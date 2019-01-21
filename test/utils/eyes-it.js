import eyes from 'eyes.it';

export const DEFAULT_WINDOW_WIDTH = 1050;
export const DEFAULT_WINDOW_HEIGHT = 1075;

const defaultConfig = {
  enableSnapshotAtBrowserGet: false,
};

/**
 * Create an instance of eyes.it with a default configure options.
 * All instances share the same eyes singleton which is already initialized.
 */
export function eyesItInstance(config) {
  /* eslint-disable no-restricted-globals */
  return new Proxy(eyes, {
    /* eslint-enable no-restricted-globals */
    get: (obj, prop) => {
      if (prop === 'it' || prop === 'fit') {
        return (msg, f, configArg) =>
          obj[prop](msg, f, {
            ...defaultConfig,
            ...config,
            ...configArg,
          });
      }
      return obj[prop];
    },
  });
}
