/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		}

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true

/******/ 		// Return the exports of the module
/******/ 		return module.exports
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ''

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0)
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var _main = __webpack_require__(1)

	var _main2 = _interopRequireDefault(_main)

	__webpack_require__(12)

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

	/*
	full API description you can find here:
	https://ru.wargaming.net/developers/api_reference

	you don't have to pass application_id query param.
	It will be passed automatically via proxy server
	*/

	document.addEventListener('DOMContentLoaded', _main2.default)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = mainHandler

	var _userList = __webpack_require__(2)

	var _userList2 = _interopRequireDefault(_userList)

	var _userInfo = __webpack_require__(10)

	var _userInfo2 = _interopRequireDefault(_userInfo)

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

	function mainHandler() {
	  var searchButton = document.getElementById('search')
	  var searchResults = document.querySelector('.search-results')

	  searchButton.addEventListener('click', _userList2.default)
	  searchResults.addEventListener('click', _userInfo2.default)
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = getUsersList

	var _renderers = __webpack_require__(3)

	var _users = __webpack_require__(7)

	var _users2 = _interopRequireDefault(_users)

	var _error = __webpack_require__(9)

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

	function getUsersList() {
	  var resultsNode = document.querySelector('.search-results')
	  var username = document.getElementById('username').value
	  var errorMessages = {
	    INVALID_SEARCH: 'Ничего не найдено',
	    SEARCH_NOT_SPECIFIED: 'Не задана строка поиска',
	    NOT_ENOUGH_SEARCH_LENGTH: 'Минимальное количество символов для поиска: 3'
	  };

	  (0, _renderers.renderSpinner)(resultsNode);
	  (0, _users2.default)(username).then(function (accounts) {
	    return (0, _renderers.renderSearchResult)(resultsNode, accounts)
	  }).catch(function (error) {
	    return (0, _error.handleError)(error, resultsNode, errorMessages)
	  })
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})

	var _search = __webpack_require__(4)

	Object.defineProperty(exports, 'renderSearchResult', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default
	  }
	})

	var _spinner = __webpack_require__(6)

	Object.defineProperty(exports, 'renderSpinner', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_spinner).default
	  }
	})

	var _user = __webpack_require__(5)

	Object.defineProperty(exports, 'renderUsername', {
	  enumerable: true,
	  get: function get() {
	    return _user.renderUsername
	  }
	})
	Object.defineProperty(exports, 'renderUserStat', {
	  enumerable: true,
	  get: function get() {
	    return _user.renderUserStat
	  }
	})
	Object.defineProperty(exports, 'renderUserInfo', {
	  enumerable: true,
	  get: function get() {
	    return _user.renderUserInfo
	  }
	})

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = renderSearchResult

	var _user = __webpack_require__(5)

	function renderSearchResult(node, accounts) {
	  var results = accounts.map(_user.renderUsername).join('')
	  node.innerHTML = results
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.renderUsername = renderUsername
	exports.renderUserStat = renderUserStat
	exports.renderUserInfo = renderUserInfo
	function renderUsername(account) {
	  return '\n    <div class="search-results_item" data-account-id="' + account.account_id + '">\n      ' + account.nickname + '\n    </div>\n  '
	}

	function renderUserStat(info) {
	  var nickname = info.nickname

	  var stats = info.statistics.all
	  var winRate = stats.battles ? stats.wins / stats.battles * 100 : 0

	  return '\n    <h2>' + nickname + '</h2>\n    <div class="search-results_item">\n      Количество боев: ' + stats.battles + '<br>\n      Победы: ' + stats.wins + '<br>\n      Процент побед: ' + Math.floor(winRate) + '%<br>\n      Суммарный опыт: ' + stats.xp + '<br>\n      Средний опыт за бой: ' + stats.battle_avg_xp + '<br>\n      Нанесено повреждений: ' + stats.damage_dealt + '\n    </div>\n  '
	}

	function renderUserInfo(node, statistics) {
	  var results = renderUserStat(statistics)
	  node.innerHTML = results
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = renderSpinner
	function renderSpinner(domNode) {
	  domNode.innerHTML = '<div class="spinner"></div>'
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = loadUsers

	var _constants = __webpack_require__(8)

	function loadUsers(username) {
	  var url = _constants.API_PROXY_URL + '/' + _constants.GAME + '/account/list/?search=' + username

	  return fetch(url).then(function (resp) {
	    return resp.json()
	  }).then(function (json) {
	    if (json.status === 'ok' && json.data.length) {
	      return json.data
	    } else {
	      var error = json.error || {}
	      throw new PAPIError(error.message || 'INVALID_SEARCH')
	    }
	  })
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	var API_PROXY_URL = exports.API_PROXY_URL = 'http://188.166.73.133/wg-api'
	var GAME = exports.GAME = 'wot'

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.PAPIError = PAPIError
	exports.handleError = handleError
	function PAPIError(message) {
	  this.message = message
	}

	function handleError(error, node) {
	  var errorMessages = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2]

	  var messages = Object.assign(errorMessages, {
	    GENERIC: 'Произошла ошибка'
	  })

	  console.log(error)

	  if (error instanceof PAPIError) {
	    node.innerHTML = messages[error.message] || messages.GENERIC
	  } else {
	    node.innerHTML = messages.GENERIC
	    throw error
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = getUserInfo

	var _user = __webpack_require__(11)

	var _user2 = _interopRequireDefault(_user)

	var _renderers = __webpack_require__(3)

	var _error = __webpack_require__(9)

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

	function getUserInfo(event) {
	  var resultsNode = document.querySelector('.user-results')
	  var accountId = event.target.dataset.accountId
	  var searchResults = document.querySelector('.search-results .active')
	  var errorMessages = {
	    ACCOUNT_ID_NOT_SPECIFIED: 'ID аккаунта не указан',
	    INVALID_ACCOUNT_ID: 'Неверный ID аккаунта'
	  }

	  if (event.target === event.currentTarget) {
	    return false
	  }

	  if (searchResults) {
	    searchResults.classList.remove('active')
	  }
	  event.target.classList.add('active');

	  (0, _renderers.renderSpinner)(resultsNode);
	  (0, _user2.default)(accountId).then(function (stats) {
	    return (0, _renderers.renderUserInfo)(resultsNode, stats)
	  }).catch(function (error) {
	    return (0, _error.handleError)(error, resultsNode, errorMessages)
	  })
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	Object.defineProperty(exports, '__esModule', {
	  value: true
	})
	exports.default = loadUserInfo

	var _constants = __webpack_require__(8)

	var _error = __webpack_require__(9)

	function loadUserInfo(accountId) {
	  var url = _constants.API_PROXY_URL + '/' + _constants.GAME + '/account/info/?account_id=' + accountId

	  return fetch(url).then(function (resp) {
	    return resp.json()
	  }).then(function (json) {
	    if (json.status === 'ok') {
	      return json.data[accountId]
	    } else {
	      var error = json.error || {}
	      throw new _error.PAPIError(error.message || 'ACCOUNT_ID_NOT_SPECIFIED')
	    }
	  })
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13)
	if(typeof content === 'string') content = [[module.id, content, '']]
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {})
	if(content.locals) module.exports = content.locals
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept('!!./../node_modules/css-loader/index.js!./main.css', function() {
				var newContent = require('!!./../node_modules/css-loader/index.js!./main.css')
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']]
				update(newContent)
			})
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update() })
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)()
	// imports


	// module
	exports.push([module.id, 'body {\n  font-family: verdana;\n  background-color: #fafafa;\n}\n#search {\n  padding: 5px;\n}\n\n.search_field {\n  width: 220px;\n}\n\n.spinner {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n  background: url(' + __webpack_require__(15) + ') no-repeat;\n  background-size: 64px 64px;\n}\n\n.results-container {\n  display: flex;\n}\n\n.search-results,\n.user-results {\n  flex: 1\n}\n\n.search-results_item {\n    margin: 8px 0 0;\n}\n\n.search-results_item.active{\n    background: pink\n}', ''])

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict'

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = []

		// return the list of modules as css string
		list.toString = function toString() {
			var result = []
			for (var i = 0; i < this.length; i++) {
				var item = this[i]
				if (item[2]) {
					result.push('@media ' + item[2] + '{' + item[1] + '}')
				} else {
					result.push(item[1])
				}
			}
			return result.join('')
		}

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === 'string') modules = [[null, modules, '']]
			var alreadyImportedModules = {}
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0]
				if (typeof id === 'number') alreadyImportedModules[id] = true
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i]
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery
					} else if (mediaQuery) {
						item[2] = '(' + item[2] + ') and (' + mediaQuery + ')'
					}
					list.push(item)
				}
			}
		}
		return list
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + 'bd0fb75bef8e5c757d6826e80334b7c6.gif'

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo
			return function () {
				if (typeof memo === 'undefined') memo = fn.apply(this, arguments)
				return memo
			}
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName('head')[0]
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = []

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== 'object') throw new Error('The style-loader cannot be used in a non-browser environment')
		}

		options = options || {}
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === 'undefined') options.singleton = isOldIE()

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === 'undefined') options.insertAt = 'bottom'

		var styles = listToStyles(list)
		addStylesToDom(styles, options)

		return function update(newList) {
			var mayRemove = []
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i]
				var domStyle = stylesInDom[item.id]
				domStyle.refs--
				mayRemove.push(domStyle)
			}
			if(newList) {
				var newStyles = listToStyles(newList)
				addStylesToDom(newStyles, options)
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i]
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]()
					delete stylesInDom[domStyle.id]
				}
			}
		}
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i]
			var domStyle = stylesInDom[item.id]
			if(domStyle) {
				domStyle.refs++
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j])
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options))
				}
			} else {
				var parts = []
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options))
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts}
			}
		}
	}

	function listToStyles(list) {
		var styles = []
		var newStyles = {}
		for(var i = 0; i < list.length; i++) {
			var item = list[i]
			var id = item[0]
			var css = item[1]
			var media = item[2]
			var sourceMap = item[3]
			var part = {css: css, media: media, sourceMap: sourceMap}
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]})
			else
				newStyles[id].parts.push(part)
		}
		return styles
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement()
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1]
		if (options.insertAt === 'top') {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild)
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling)
			} else {
				head.appendChild(styleElement)
			}
			styleElementsInsertedAtTop.push(styleElement)
		} else if (options.insertAt === 'bottom') {
			head.appendChild(styleElement)
		} else {
			throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.')
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement)
		var idx = styleElementsInsertedAtTop.indexOf(styleElement)
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1)
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement('style')
		styleElement.type = 'text/css'
		insertStyleElement(options, styleElement)
		return styleElement
	}

	function createLinkElement(options) {
		var linkElement = document.createElement('link')
		linkElement.rel = 'stylesheet'
		insertStyleElement(options, linkElement)
		return linkElement
	}

	function addStyle(obj, options) {
		var styleElement, update, remove

		if (options.singleton) {
			var styleIndex = singletonCounter++
			styleElement = singletonElement || (singletonElement = createStyleElement(options))
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
		} else if(obj.sourceMap &&
			typeof URL === 'function' &&
			typeof URL.createObjectURL === 'function' &&
			typeof URL.revokeObjectURL === 'function' &&
			typeof Blob === 'function' &&
			typeof btoa === 'function') {
			styleElement = createLinkElement(options)
			update = updateLink.bind(null, styleElement)
			remove = function() {
				removeStyleElement(styleElement)
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href)
			}
		} else {
			styleElement = createStyleElement(options)
			update = applyToTag.bind(null, styleElement)
			remove = function() {
				removeStyleElement(styleElement)
			}
		}

		update(obj)

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return
				update(obj = newObj)
			} else {
				remove()
			}
		}
	}

	var replaceText = (function () {
		var textStore = []

		return function (index, replacement) {
			textStore[index] = replacement
			return textStore.filter(Boolean).join('\n')
		}
	})()

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? '' : obj.css

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css)
		} else {
			var cssNode = document.createTextNode(css)
			var childNodes = styleElement.childNodes
			if (childNodes[index]) styleElement.removeChild(childNodes[index])
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index])
			} else {
				styleElement.appendChild(cssNode)
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css
		var media = obj.media

		if(media) {
			styleElement.setAttribute('media', media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild)
			}
			styleElement.appendChild(document.createTextNode(css))
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css
		var sourceMap = obj.sourceMap

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
		}

		var blob = new Blob([css], { type: 'text/css' })

		var oldSrc = linkElement.href

		linkElement.href = URL.createObjectURL(blob)

		if(oldSrc)
			URL.revokeObjectURL(oldSrc)
	}


/***/ }
/******/ ])