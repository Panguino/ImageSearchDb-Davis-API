'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('deploy-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
  async getConfig(){
    return {
      post_url: strapi.plugin('deploy-plugin').config('post_url', ''),
      button_text: strapi.plugin('deploy-plugin').config('button_text', ''),
      result_text: strapi.plugin('deploy-plugin').config('result_text', '')
    }
  }
});
