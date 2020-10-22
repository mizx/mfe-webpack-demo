export const deferred = (args) => {
  args = args || {};

  const { timeout } = args;

  let resolve;
  let reject;
  let timeoutId;

  const promise = new Promise((resolver, rejector) => {
    resolve = resolver;
    reject = rejector;
  });

  promise.resolve = (arg) => {
    clearTimeout(timeoutId);
    resolve(arg);
  };

  promise.reject = (arg) => {
    clearTimeout(timeoutId);
    reject(arg);
  };

  if (typeof timeout === "number") {
    const id = args.id || "anonymous deferred";
    timeoutId = setTimeout(
      () => reject({ reason: `timeout (${timeout}) reached on "${id}"` }),
      timeout
    );
  }

  return promise;
};
