const { getUUID } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./htttp-client-plugin')
const { axiosPlugin } = require('./axios-plugin')
const buildLogger = require('./logger.plugin')

module.exports = {
    getUUID,
    getAge,
    http,
    axiosPlugin,
    buildLogger,
}