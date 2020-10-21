import { deferred } from './deferred';

const scriptsCache = {};

export const loadJS = async (src) => {

  if (scriptsCache[src]) {
    return scriptsCache;
  }

  const dfd = deferred({ timeout: 30000 });

  const { document: doc } = window;

  const script = doc.createElement("script");

  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", src);

  script.addEventListener("error", err => {
    scriptsCache[src] = null;
    dfd.reject(err);
  });

  script.addEventListener("load", () => {
    dfd.resolve(script);
  });

  doc.head.appendChild(script);

  scriptsCache[src] = dfd;

  return dfd;
};
