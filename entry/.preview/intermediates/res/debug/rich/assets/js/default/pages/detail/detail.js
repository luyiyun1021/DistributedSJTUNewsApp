/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\detail\detail.css ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".container": {
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "marginBottom": "80px",
    "flexDirection": "column"
  },
  ".text-title": {
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "fontSize": "25px",
    "backgroundColor": "#ffd700"
  },
  ".text-reads": {
    "fontSize": "16px",
    "textColor": "#666666",
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px"
  },
  ".image": {
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px"
  },
  ".text-content": {
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px",
    "fontSize": "18px",
    "textColor": "#666666"
  },
  ".bottom": {
    "paddingLeft": "12px",
    "paddingRight": "12px",
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopWidth": "1px",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "backgroundColor": "#FFFFFF",
    "height": "60px",
    "width": "100%",
    "position": "fixed",
    "bottom": "0px"
  },
  ".textarea": {
    "height": "40px"
  },
  ".image-bottom": {
    "objectFit": "contain",
    "marginLeft": "10px",
    "height": "40px",
    "width": "40px"
  },
  ".select-device-dialog": {
    "width": "90%",
    "height": "33%"
  },
  ".select-device-wrapper": {
    "marginTop": "5%",
    "marginRight": "5%",
    "marginBottom": "5%",
    "marginLeft": "5%",
    "width": "90%",
    "height": "90%",
    "flexDirection": "column"
  },
  ".select-device-title": {
    "width": "100%",
    "height": "20%",
    "textAlign": "left",
    "fontSize": "20px"
  },
  ".select-device-list": {
    "width": "100%",
    "height": "60%",
    "textAlign": "left",
    "fontSize": "15px"
  },
  ".select-device-item": {
    "width": "100%",
    "height": "33%"
  },
  ".select-device-item-left": {
    "width": "90%",
    "height": "100%",
    "textAlign": "left",
    "fontSize": "16px"
  },
  ".select-device-item-right": {
    "width": "10%",
    "height": "100%"
  },
  ".choose-ok-or-not": {
    "height": "40%",
    "width": "100%"
  },
  ".select-device-btn": {
    "textAlign": "center",
    "color": "#0000ff",
    "fontSize": "16px",
    "width": "100%"
  },
  "@MEDIA": [
    {
      "condition": "screen and (width > 1500) and (orientation: landscape)",
      ".select-device-dialog": {
        "width": "33%",
        "height": "90%"
      }
    }
  ],
  ".dialog-main": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "height": "30%"
  },
  ".dialog-div": {
    "flexDirection": "column"
  },
  ".dialog-div-rating": {
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "flexDirection": "column",
    "width": "100%",
    "fontSize": "16px"
  },
  ".dialog-divs-divider-div": {
    "width": "100%",
    "justifyContent": "flex-end",
    "marginRight": "35px",
    "height": "50px",
    "alignItems": "center"
  },
  ".comment-title": {
    "marginLeft": "20px",
    "marginTop": "5px",
    "marginBottom": "20px",
    "textAlign": "left",
    "fontSize": "20px"
  },
  ".lian-text-change": {
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "20px",
    "width": "50%",
    "backgroundColor": "#9370DB"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.hml":
/*!**********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\detail\detail.hml ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/detail/detail:14",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/detail/detail:15",
        "className": "text-reads",
        "value": "返回"
      },
      "type": "text",
      "classList": [
        "text-reads"
      ],
      "onBubbleEvents": {
        "click": "routeBack"
      }
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:16",
        "className": "text-title",
        "value": function () {return this.title}
      },
      "type": "text",
      "classList": [
        "text-title"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:17",
        "className": "text-reads",
        "value": function () {return (this.date) + decodeURI('%20%20%20%20%E9%98%85%E8%AF%BB:%20') + (this.reads) + decodeURI('%20%20%20%E5%96%9C%E6%AC%A2:%20') + (this.likes) + decodeURI('%20%20%20%E6%94%B6%E8%97%8F:%20') + (this.saved)}
      },
      "type": "text",
      "classList": [
        "text-reads"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:18",
        "className": "image",
        "src": function () {return this.imgUrl2}
      },
      "type": "image",
      "classList": [
        "image"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:19",
        "className": "text-content",
        "value": function () {return this.content}
      },
      "type": "text",
      "classList": [
        "text-content"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:22",
        "className": "text-reads",
        "value": "----评论区----"
      },
      "type": "text",
      "classList": [
        "text-reads"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:23",
        "className": "text-reads",
        "value": function () {return this.comment}
      },
      "type": "text",
      "classList": [
        "text-reads"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:25",
        "className": "bottom"
      },
      "type": "div",
      "classList": [
        "bottom"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/detail/detail:27",
            "className": "lian-text-change",
            "value": "一键三连"
          },
          "type": "text",
          "classList": [
            "lian-text-change"
          ],
          "onBubbleEvents": {
            "click": "onLian"
          }
        },
        {
          "attr": {
            "debugLine": "pages/detail/detail:28",
            "className": "image-bottom",
            "src": "/common/images/icon_message.png"
          },
          "type": "image",
          "classList": [
            "image-bottom"
          ],
          "onBubbleEvents": {
            "click": "onClickcomment"
          }
        },
        {
          "attr": {
            "debugLine": "pages/detail/detail:29",
            "className": "image-bottom",
            "src": function () {return this.star}
          },
          "type": "image",
          "classList": [
            "image-bottom"
          ],
          "onBubbleEvents": {
            "click": "onClickstar"
          }
        },
        {
          "attr": {
            "debugLine": "pages/detail/detail:30",
            "className": "image-bottom",
            "src": function () {return this.good}
          },
          "type": "image",
          "classList": [
            "image-bottom"
          ],
          "onBubbleEvents": {
            "click": "onClickgood"
          }
        },
        {
          "attr": {
            "debugLine": "pages/detail/detail:31",
            "className": "image-bottom",
            "src": function () {return this.share}
          },
          "type": "image",
          "classList": [
            "image-bottom"
          ],
          "onBubbleEvents": {
            "click": "toShare"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:35",
        "id": "showDialog",
        "className": "select-device-dialog"
      },
      "type": "dialog",
      "id": "showDialog",
      "classList": [
        "select-device-dialog"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/detail/detail:36",
            "className": "select-device-wrapper"
          },
          "type": "div",
          "classList": [
            "select-device-wrapper"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/detail/detail:37",
                "className": "select-device-title",
                "value": "选择设备"
              },
              "type": "text",
              "classList": [
                "select-device-title"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/detail/detail:38",
                "className": "select-device-list"
              },
              "type": "list",
              "classList": [
                "select-device-list"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:39",
                    "className": "select-device-item",
                    "id": "list"
                  },
                  "type": "list-item",
                  "classList": [
                    "select-device-item"
                  ],
                  "repeat": function () {return this.deviceList},
                  "id": "list",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/detail/detail:40"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/detail/detail:41",
                            "className": "select-device-item-left",
                            "value": function () {return this.$item.deviceName}
                          },
                          "type": "text",
                          "classList": [
                            "select-device-item-left"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "pages/detail/detail:43",
                            "className": "select-device-item-right",
                            "type": "checkbox",
                            "name": "Device",
                            "value": function () {return this.$idx},
                            "checked": function () {return this.$item.checked}
                          },
                          "type": "input",
                          "classList": [
                            "select-device-item-right"
                          ],
                          "events": {
                            "change": function (evt) {this.selectDevice(this.$idx,evt)}
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/detail/detail:49",
                "className": "choose-ok-or-not"
              },
              "type": "div",
              "classList": [
                "choose-ok-or-not"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:50",
                    "className": "select-device-btn",
                    "value": "取消"
                  },
                  "type": "text",
                  "classList": [
                    "select-device-btn"
                  ],
                  "onBubbleEvents": {
                    "click": "chooseCancel"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:51",
                    "className": "select-device-btn",
                    "value": "确定"
                  },
                  "type": "text",
                  "classList": [
                    "select-device-btn"
                  ],
                  "onBubbleEvents": {
                    "click": "chooseComform"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/detail/detail:56",
        "id": "ratingDialog",
        "className": "dialog-main"
      },
      "type": "dialog",
      "id": "ratingDialog",
      "classList": [
        "dialog-main"
      ],
      "events": {
        "cancel": "cancelrRatingDialog"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/detail/detail:57",
            "className": "dialog-div"
          },
          "type": "div",
          "classList": [
            "dialog-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/detail/detail:58",
                "className": "dialog-div-rating"
              },
              "type": "div",
              "classList": [
                "dialog-div-rating"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:59",
                    "className": "comment-title",
                    "value": "我要评论"
                  },
                  "type": "text",
                  "classList": [
                    "comment-title"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:60",
                    "type": "text",
                    "placeholder": "输入你的评论。"
                  },
                  "type": "input",
                  "events": {
                    "change": "ratingReasonChange"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/detail/detail:61",
                    "className": "choose-ok-or-not"
                  },
                  "type": "div",
                  "classList": [
                    "choose-ok-or-not"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/detail/detail:62",
                        "className": "select-device-btn",
                        "value": "取消"
                      },
                      "type": "text",
                      "classList": [
                        "select-device-btn"
                      ],
                      "onBubbleEvents": {
                        "click": "cancelrRatingDialog"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/detail/detail:63",
                        "vertical": "true",
                        "className": "dialog-divider"
                      },
                      "type": "divider",
                      "classList": [
                        "dialog-divider"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/detail/detail:64",
                        "className": "select-device-btn",
                        "value": "确定"
                      },
                      "type": "text",
                      "classList": [
                        "select-device-btn"
                      ],
                      "onBubbleEvents": {
                        "click": "confirmRatingInfo"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\detail\detail.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(requireModule("@system.router"));

var _ohosDistributedHardware = _interopRequireDefault(requireModule("@ohos.distributedHardware.deviceManager"));

var _ohosAbility = _interopRequireDefault(requireModule("@ohos.ability.featureAbility"));

var _ohosAbility2 = _interopRequireDefault(requireModule("@ohos.ability.wantConstant"));

var _system2 = _interopRequireDefault(requireModule("@system.prompt"));

var _default = {
  data: {
    title: '',
    type: '',
    imgUrl: '',
    imgUrl2: '',
    reads: '',
    likes: '',
    saved: '',
    date: '',
    content: '',
    deviceList: [],
    deviceMag: {},
    good: 'common/images/icon_good.png',
    gooded: 'common/images/icon_gooded.png',
    star: 'common/images/icon_star.png',
    starred: 'common/images/icon_starred.png',
    share: 'common/images/icon_share.png',
    shared: 'common/images/icon_shared.png',
    comment: '',
    tmpcomment: ''
  },
  onInit: function onInit() {
    var _this = this;

    if (_system["default"].getParams()) {} else {
      _ohosAbility["default"].getWant().then(function (want) {
        (0, _newArrowCheck2["default"])(this, _this);
        this.title = want.parameters.title;
        this.imgUrl = want.parameters.imgUrl;
        this.imgUrl2 = want.parameters.imgUrl2;
        this.reads = want.parameters.reads;
        this.likes = want.parameters.likes;
        this.saved = want.parameters.saved;
        this.date = want.parameters.date;
        this.content = want.parameters.content;
      }.bind(this))["catch"](function (error) {
        (0, _newArrowCheck2["default"])(this, _this);
      }.bind(this));
    }
  },
  toShare: function toShare() {
    var _this2 = this;

    this.share = this.shared;

    _ohosDistributedHardware["default"].createDeviceManager('com.huawei.codelab', function (err, data) {
      (0, _newArrowCheck2["default"])(this, _this2);

      if (err) {
        return;
      }

      this.deviceMag = data;
      this.deviceList = this.deviceMag.getTrustedDeviceListSync();
    }.bind(this));

    for (var i = 0; i < this.deviceList.length; i++) {
      this.deviceList[i] = {
        deviceName: this.deviceList[i].deviceName,
        deviceId: this.deviceList[i].deviceId,
        checked: false
      };
    }

    this.$element('showDialog').show();
  },
  chooseCancel: function chooseCancel() {
    this.$element('showDialog').close();
  },
  chooseComform: function chooseComform() {
    var _this3 = this;

    this.$element('showDialog').close();

    for (var i = 0; i < this.deviceList.length; i++) {
      if (this.deviceList[i].checked) {
        var str = {
          'want': {
            'deviceId': this.deviceList[i].deviceId,
            'bundleName': 'com.huawei.codelab',
            'abilityName': 'com.huawei.codelab.MainAbility',
            'flags': _ohosAbility2["default"].Flags.FLAG_ABILITYSLICE_MULTI_DEVICE,
            'parameters': {
              'url': 'pages/detail/detail',
              title: this.title,
              type: this.type,
              imgUrl: this.imgUrl,
              imgUrl2: this.imgUrl2,
              reads: this.reads,
              likes: this.likes,
              saved: this.saved,
              date: this.date,
              content: this.content
            }
          }
        };

        _ohosAbility["default"].startAbility(str).then(function (data) {
          (0, _newArrowCheck2["default"])(this, _this3);
        }.bind(this))["catch"](function (error) {
          (0, _newArrowCheck2["default"])(this, _this3);
        }.bind(this));
      }
    }
  },
  selectDevice: function selectDevice(index, e) {
    this.deviceList[index].checked = e.checked;
  },
  routeBack: function routeBack() {
    _system["default"].back();
  },
  onClickgood: function onClickgood() {
    this.good = this.gooded;
    this.likes = String(Number(this.likes) + 1);
  },
  onClickstar: function onClickstar() {
    this.star = this.starred;
    this.saved = String(Number(this.saved) + 1);
  },
  cancelrRatingDialog: function cancelrRatingDialog() {
    this.$element('ratingDialog').close();

    _system2["default"].showToast({
      message: '取消评论'
    });
  },
  confirmRatingInfo: function confirmRatingInfo() {
    this.$element('ratingDialog').close();
    this.comment += this.tmpcomment + '\n';

    _system2["default"].showToast({
      message: '评论成功'
    });
  },
  ratingReasonChange: function ratingReasonChange(e) {
    this.tmpcomment = e.text;

    _system2["default"].showToast({
      message: JSON.stringify(e.text)
    });
  },
  onClickcomment: function onClickcomment() {
    this.$element('ratingDialog').show();
  },
  onLian: function onLian() {
    this.onClickgood();
    this.onClickstar();
    this.toShare();
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************************************************************!*\
  !*** D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\detail\detail.hml?entry ***!
  \********************************************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./detail.hml */ "./lib/json.js!./lib/template.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./detail.css */ "./lib/json.js!./lib/style.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./detail.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\detail\\detail.js")

$app_define$('@app-component/detail', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/detail',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=detail.js.map