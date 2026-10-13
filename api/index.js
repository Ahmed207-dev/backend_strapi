const strapi = require("@strapi/strapi");

let instance;

module.exports = async (req, res) => {
  if (!instance) {
    const createStrapi =
      typeof strapi === "function"
        ? strapi
        : strapi.default || strapi.createStrapi;

    instance = await createStrapi().load();
    await instance.start();
  }
  return instance.server.app(req, res);
};
