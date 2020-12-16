import { deferred } from "./deferred";
import { loadScript } from "./loader";

export const loadAndInitiateWebpackContainer = async remote => {
  const { name, url } = remote;

  await loadScript(url);

  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  const container = window[name]; // or get the container somewhere else

  if (!container || !container.init)
    throw new Error(`Cannot load external remote: ${name} from url: ${url}`);

  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);

  return container;
}

export const loadFromRemote = ({ remote = {}, component } = {}) => {
  const { name, url } = remote;

  if (!url) throw new Error("Missing remote url");
  if (!name) throw new Error("Missing remote name");
  if (!component) throw new Error("Missing component");

  return async () => {

    const container = await loadAndInitiateWebpackContainer({ url, name });

    if (!container.get)
      throw new Error(`Cannot load external remote: ${name} from url: ${url}`);

    component = component.match(/^\.\//) ? component : `./${component}`;

    const factory = await container.get(component);

    if (!factory)
      throw new Error(
        `Cannot load ${component} in remote: ${name} from url ${url}`
      );

    const Module = factory();

    return Module;
  };
};
