'use strict';

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        await next();

        ctx.set(
          'X-Powered-By',
          strapi.config.get('middleware.settings.poweredBy.value', 'PunchInEngine')
        );
      });
    },
  };
};
