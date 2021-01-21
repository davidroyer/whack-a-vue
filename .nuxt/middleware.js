const middleware = {}

middleware['dev-helper'] = require('../middleware/dev-helper.js')
middleware['dev-helper'] = middleware['dev-helper'].default || middleware['dev-helper']

export default middleware
