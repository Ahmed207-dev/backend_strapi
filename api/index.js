const strapi = require("@strapi/strapi");
let instance;

module.exports = async (req, res) => {
  if (!instance) {
    instance = await strapi().load();
    await instance.start();
  }
  return instance.server.app(req, res);
};
