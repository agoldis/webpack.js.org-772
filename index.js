import inlineModule from './inlineModule'
inlineModule()

require.ensure(['./loadedModule'], function (request) {
  request('./loadedModule')
})