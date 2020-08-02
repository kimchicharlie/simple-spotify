export default ({ config }) => ({
  version: process.env.MY_CUSTOM_PROJECT_VERSION || config.version,
  extra: {
    musicApi: {
      baseUrl: process.env.MUSIC_API_BASE_URL || config.musicApi.baseUrl,
    },
  },
});
