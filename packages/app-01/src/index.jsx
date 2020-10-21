import { loadRemote } from './helpers/load-component';

const init = async () => {
  // These remotes will be preloaded before running the app. This is weird, if we remove them from preloading here
  // then the app that has the styled-component button does not load anymore. But if I preload this one before
  // running any code then it works. It doesn't make much sense but it seems this is how it is.
  const remotesToPreload = [
    { url: 'http://localhost:3003/remoteEntry.js', name: 'app_03' },

    // Not needed to preload this one. Only the one that have styled-components is needed
    // { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' },
  ];

  await remotesToPreload.reduce((p, remote) => {
    return p.then(() => loadRemote(remote));
  }, Promise.resolve());

  import("./bootstrap");
};

init();