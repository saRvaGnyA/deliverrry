const blacklist = require("metro-config/src/defaults/exclusionList");
module.exports = {
  resolver: {
    blacklistRE: blacklist([/sanity\/.*/]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
