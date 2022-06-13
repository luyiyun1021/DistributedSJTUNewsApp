/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\index\index.css ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".container": {
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  ".left": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "height": "100%",
    "displayIndex": 2
  },
  ".right": {
    "flexDirection": "column",
    "displayIndex": 1,
    "height": "100%"
  },
  ".top": {
    "flexDirection": "column",
    "width": "100%",
    "overflow": "scroll"
  },
  ".tab-bar": {
    "height": "40px"
  },
  ".tab-text": {
    "fontSize": "23px",
    "textAlign": "center"
  },
  ".tab-content": {
    "width": "100%",
    "height": "100%",
    "justifyContent": "center"
  },
  ".item-content": {
    "height": "100%",
    "justifyContent": "center"
  },
  ".list": {
    "width": "100%",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px"
  },
  ".text": {
    "fontSize": "18px",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px",
    "height": "90px",
    "maxLines": "4",
    "flexWeight": 3
  },
  ".image": {
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px",
    "height": "90px",
    "width": "160px",
    "flexWeight": 2
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
    "bottom": "0px"
  },
  ".textarea": {
    "marginTop": "6px",
    "height": "40px"
  },
  ".image-bottom": {
    "objectFit": "contain",
    "marginTop": "10px",
    "marginLeft": "10px",
    "height": "40px",
    "width": "40px"
  },
  ".select-device-dialog": {
    "width": "33%",
    "height": "90%"
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
    "height": "20%",
    "width": "100%"
  },
  ".select-device-btn": {
    "textAlign": "center",
    "color": "#0000ff",
    "fontSize": "16px",
    "width": "100%"
  },
  ".watch": {
    "display": "none"
  },
  "@MEDIA": [
    {
      "condition": "(device-type: wearable)",
      ".right": {
        "display": "none"
      },
      ".left": {
        "display": "none"
      },
      ".watch": {
        "display": "flex"
      }
    },
    {
      "condition": "(device-type: tv)",
      ".bottom": {
        "display": "none"
      },
      ".tab-text": {
        "color": "#938989"
      }
    },
    {
      "condition": "screen and (width <= 1500) and (orientation: landscape)",
      ".left": {
        "width": "100%"
      }
    },
    {
      "condition": "screen and (width > 1500) and (orientation: landscape)",
      ".right": {
        "width": "60%"
      },
      ".left": {
        "width": "40%"
      },
      ".right-image": {
        "marginTop": "6px",
        "marginRight": "6px",
        "marginBottom": "6px",
        "marginLeft": "6px"
      },
      ".text-title": {
        "marginTop": "6px",
        "marginRight": "6px",
        "marginBottom": "6px",
        "marginLeft": "6px",
        "fontSize": "25px"
      },
      ".text-reads": {
        "fontSize": "16px",
        "textColor": "#666666",
        "marginTop": "6px",
        "marginRight": "6px",
        "marginBottom": "6px",
        "marginLeft": "6px"
      },
      ".text-content": {
        "marginTop": "8px",
        "marginRight": "8px",
        "marginBottom": "8px",
        "marginLeft": "8px",
        "fontSize": "17px",
        "textColor": "#666666"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\index\index.hml ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:14",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:16",
        "className": "left"
      },
      "type": "div",
      "classList": [
        "left"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:17",
            "index": "0",
            "vertical": "false"
          },
          "type": "tabs",
          "events": {
            "change": "changeNewsType"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:18",
                "className": "tab-bar",
                "mode": "scrollable"
              },
              "type": "tab-bar",
              "classList": [
                "tab-bar"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:19",
                    "className": "tab-text",
                    "value": function () {return this.title.name}
                  },
                  "type": "text",
                  "classList": [
                    "tab-text"
                  ],
                  "repeat": {
                    "exp": function () {return this.titleList},
                    "value": "title"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:21",
                "className": "tab-content",
                "scrollable": "true"
              },
              "type": "tab-content",
              "classList": [
                "tab-content"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:22",
                    "className": "item-content"
                  },
                  "type": "div",
                  "classList": [
                    "item-content"
                  ],
                  "repeat": {
                    "exp": function () {return this.titleList},
                    "value": "title"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:23",
                        "className": "list"
                      },
                      "type": "list",
                      "classList": [
                        "list"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:24"
                          },
                          "type": "list-item",
                          "repeat": {
                            "exp": function () {return this.newsList},
                            "value": "news"
                          },
                          "onBubbleEvents": {
                            "click": function (evt) {this.itemClick(this.news,evt)}
                          },
                          "children": [
                            {
                              "attr": {
                                "debugLine": "pages/index/index:25"
                              },
                              "type": "div",
                              "style": {
                                "flexDirection": "column"
                              },
                              "children": [
                                {
                                  "attr": {
                                    "debugLine": "pages/index/index:26"
                                  },
                                  "type": "div",
                                  "style": {
                                    "flexDirection": "row"
                                  },
                                  "children": [
                                    {
                                      "attr": {
                                        "debugLine": "pages/index/index:27",
                                        "className": "text",
                                        "value": function () {return this.news.title}
                                      },
                                      "type": "text",
                                      "classList": [
                                        "text"
                                      ]
                                    },
                                    {
                                      "attr": {
                                        "debugLine": "pages/index/index:30",
                                        "className": "image",
                                        "src": function () {return this.news.imgUrl}
                                      },
                                      "type": "image",
                                      "classList": [
                                        "image"
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "attr": {
                                    "debugLine": "pages/index/index:34"
                                  },
                                  "type": "div",
                                  "style": {
                                    "height": "2px",
                                    "width": "100%",
                                    "backgroundColor": "#97d2d4d4"
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
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:44",
        "className": "right"
      },
      "type": "div",
      "classList": [
        "right"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:45",
            "className": "top"
          },
          "type": "div",
          "classList": [
            "top"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:46",
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
                "debugLine": "pages/index/index:47",
                "className": "text-reads",
                "value": function () {return decodeURI('reads:%20') + (this.reads) + decodeURI('%20%20%20likes:%20') + (this.likes)}
              },
              "type": "text",
              "classList": [
                "text-reads"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:48",
                "className": "right-image",
                "src": function () {return this.imgUrl}
              },
              "type": "image",
              "classList": [
                "right-image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:49",
                "className": "text-content",
                "value": function () {return this.content}
              },
              "type": "text",
              "classList": [
                "text-content"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:53",
            "className": "bottom"
          },
          "type": "div",
          "classList": [
            "bottom"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:54",
                "className": "textarea",
                "placeholder": "Enter a comment."
              },
              "type": "textarea",
              "classList": [
                "textarea"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:55",
                "className": "image-bottom",
                "src": "/common/images/icon_message.png"
              },
              "type": "image",
              "classList": [
                "image-bottom"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:56",
                "className": "image-bottom",
                "src": "/common/images/icon_star.png"
              },
              "type": "image",
              "classList": [
                "image-bottom"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:57",
                "className": "image-bottom",
                "src": "/common/images/icon_good.png"
              },
              "type": "image",
              "classList": [
                "image-bottom"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:58",
                "className": "image-bottom",
                "src": "/common/images/icon_share.png"
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
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:62",
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
            "debugLine": "pages/index/index:63",
            "className": "select-device-wrapper"
          },
          "type": "div",
          "classList": [
            "select-device-wrapper"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:64",
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
                "debugLine": "pages/index/index:65",
                "className": "select-device-list"
              },
              "type": "list",
              "classList": [
                "select-device-list"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:66",
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
                        "debugLine": "pages/index/index:67"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:68",
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
                            "debugLine": "pages/index/index:70",
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
                "debugLine": "pages/index/index:76",
                "className": "choose-ok-or-not"
              },
              "type": "div",
              "classList": [
                "choose-ok-or-not"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:77",
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
                    "debugLine": "pages/index/index:78",
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

/***/ "D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\common\\data\\data.js":
/*!**********************************************************************************************************************!*\
  !*** D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\common\data\data.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.newsData = exports.titles = void 0;

/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var titles = [{
  'name': '全部'
}, {
  'name': '生活'
}, {
  'name': '学生工作'
}, {
  'name': '体育'
}, {
  'name': '就业'
}, {
  'name': '社团'
}];
exports.titles = titles;
var newsData = [{
  'newsId': '1',
  'title': '闵行校区二餐服装店（艾克斯西装）5月21日起恢复服务',
  'type': '生活',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfvf1VQhMSnIDiaKY63Ye5n0t5b0eq39LSB5ic7yIDoKUP9rgeZgzmuryTsxgx6BibZ4H3NiaXIU9icuDwg/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfvf1VQhMSnIDiaKY63Ye5n0tERsBiaRRiajdtG3xECNQ83F1cOpcQ6NnFcGj19swkypoISj99kDCP7Qw/640?wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '4343',
  'likes': '36',
  'saved': '10',
  'date': '2022-05-20',
  'content': '    为配合当前本市和闵行区的疫情防控管理措施，做好闵行校区生活服务保障，5月21日起，二餐服装店（艾克斯西装）恢复服务。\n' + '温馨提示\n' + '    到店时请各位师生做好个人防护，戴好口罩，保持安全距离，不聚集，不扎堆!\n' + '    门店咨询电话：13611859315；18616243569\n' + '    营业时间：9:30-19:30\n'
}, {
  'newsId': '2',
  'title': '闵行校区三餐乐学洗衣5月20日起恢复服务',
  'type': '生活',
  'imgUrl': 'https://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfsljff3sv7YTtdb4VrUShib78VYrL6hZcibcSWDodHq5ZOGMb1icP28OATvlZiaJUPxk8C0kStGKpWYiaQ/640?wxfrom=5&wx_lazy=1&wx_co=1',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfsljff3sv7YTtdb4VrUShib78VYrL6hZcibcSWDodHq5ZOGMb1icP28OATvlZiaJUPxk8C0kStGKpWYiaQ/640?wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '4181',
  'likes': '25',
  'saved': '8',
  'date': '2022-05-19',
  'content': '    为配合当前本市和闵行区的疫情防控管理措施，做好闵行校区生活服务保障，5月20日起，三餐乐学洗衣恢复服务。\n' + '温馨提示\n' + '    到店时请各位师生做好个人防护，戴好口罩，间隔2米，保持距离，不聚集，不扎堆!\n' + '    门店咨询电话：54745516\n' + '    营业时间：8:30-18:00\n'
}, {
  'newsId': '3',
  'title': '闵行校区四餐全家超市5月15日起开启预约服务',
  'type': '生活',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfsE55sQQWewvDKsMcMF9HqOEEjibTyUj1H3OqEAZzAyWlDxiaibVtRlpnOGwHlyP7zdrVLXzfjEs4qQA/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/HBXfziaJrCfsE55sQQWewvDKsMcMF9HqOEEjibTyUj1H3OqEAZzAyWlDxiaibVtRlpnOGwHlyP7zdrVLXzfjEs4qQA/0?wx_fmt=jpeg',
  'reads': '1.2万',
  'likes': '29',
  'saved': '15',
  'date': '',
  'content': '    为优化闵行校区校园闭环管理期间的购物体验，5月15日起，师生可通过使用“交我办”App -生活服务-超市预约，线上预约四餐全家超市购物服务，具体安排如下：\n' + '（一）5月15日起，当日20:30开放次日购物服务预约。如次日因故未开放购物的，顺延适用。\n' + '（二）四餐全家超市预约时段及名额：\n' + '  （6人一批次）\n' + '  08：30—09：30    30人\n' + '  09：30—10：30    30人\n' + '  10：30—11：30    30人\n' + '  11：30—13：30    补货上架店内消毒\n' + '  13：30—14：30    30人\n' + '  14：30—15：30    30人\n' + '  15：30—16：30    30人\n' + '  16：30—18：00    补货上架店内消毒\n' + '  18：00—19：30    50人\n'
}, {
  'newsId': '4',
  'title': '【期末学业辅导】拯救你的考试周！',
  'type': '学生工作',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/rUWnSHnVckobggMUh78szP0j87gOkG0Je3quo0xDCdria6riax6QhDImibu0vEogW72uy5YEOIZhwm1iabxtG9PjrA/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_png/rUWnSHnVckobggMUh78szP0j87gOkG0JEluCNHh8kgQrrbY2HkzXATriazcwEVcNwa9qtI7FpBnu7VjDIVP9LkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '2331',
  'likes': '6',
  'saved': '2',
  'date': '2022-05-22',
  'content': '    亲爱的同学们，经历了十多周的线上课程，你是否会对课程的内容有一些疑惑呢？期末考试悄悄来临，如果你，概统大作业没有思路、高数复习不得其法、物理推导不够连贯、电路也不知所云？\n' + '    生活园区来满足大家的愿望！\n' + '    在十五周到十七周20：00~22:00 P.M ，我们以线上腾讯会议的形式与你一起，剑指大作业，备战期末考!\n'
}, {
  'newsId': '5',
  'title': '表白墙 | 交大抗疫，感谢有你',
  'type': '学生工作',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/rUWnSHnVckrCTPtNWXibGFZbXrvBKtgLMibvyB68gH7apa1hvr7L8vBlnaEQDOwkj0gUv2iay7qGpoCnvC1ibyiba3w/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/rUWnSHnVckrCTPtNWXibGFZbXrvBKtgLMVZfE1CCnlByLiamicZgH82YsZOUXYnqJ0r7tKVOm8XJCViaUlXlzPtTfw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '7639',
  'likes': '192',
  'saved': '24',
  'date': '2022-03-13',
  'content': '面对严峻的疫情\n' + '    上海交通大学全校迅速进入紧张的抗疫状态。学校教职工、医护人员、后勤人员、全体同学按照上级要求落实疫情防控相关工作，沉着冷静面对疫情、井然有序推进工作。\n' + '    在疫情中，我们看到了最可爱的人，他们用自己的汗水与时间为我们保驾护航。他们是不停作业，日日为我们进行核酸检测的医护人员们；他们是挺身而出，穿上防护服逐个宿舍送餐的志愿者同学们；他们是兢兢业业，无微不至照顾同学们生活的宿管阿姨们；他们是不辞辛劳，日日夜夜为同学们准备饭菜的食堂厨师们；他们是守望相助，互相陪伴的同学们……在秩序井然背后有全体并肩的交大人的日夜坚守。\n'
}, {
  'newsId': '6',
  'title': '预告|活力青春工作室：“情暖三月，花漾生活”迎春种花活动',
  'type': '学生工作',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/rUWnSHnVckrLqVXHB9IHF7qd55iaVMmv6jfAlSenKgaficzYR1VQfMx7bqNrA7qVNX5aUVsWchWAmYtqwLItooVQ/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/rUWnSHnVckrLqVXHB9IHF7qd55iaVMmv6dIQ3ngMzobvsI1OCepgql5fx5unEW6hGr0mtNh2nHV7Zyvh1daZ1rg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '402',
  'likes': '3',
  'saved': '3',
  'date': '2022-03-04',
  'content': '    在新生的世界里不负时光，遇见美好，就让我们从亲手种植一株小花开始吧！这是最好的时节，感受浓浓春意，培养美育精神，将春天带回家，让一盆盆盛开的春花在阳光下闪闪发光。万物复苏春光好，种花添彩正当时！\n' + '活动时间：3月6日（周日）下午                          16：00-17：30\n' + '活动地点：X86大厅\n' + '活动内容：活动现场提供细叶美女樱花、蒲公英花、藿香蓟花、毛地黄钓钟柳花、茉莉花等各种花苗以及花盆、土壤，每人限领取一个花盆，大家可以自己的喜好选择不同品种的花苗。\n'
}, {
  'newsId': '7',
  'title': '战疫 | 凝心聚力，共克时艰：体育系党员教师积极参加疫情防控志愿服务',
  'type': '体育',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljX4VicW4qrIXliav6KBY6esXY4u6PMDlu1Plfa3O2LM1xBibo0XZndfMl2gxkXF2lyHhB1J0JUE8MHcA/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljX4VicW4qrIXliav6KBY6esXY4u6PMDlu1Plfa3O2LM1xBibo0XZndfMl2gxkXF2lyHhB1J0JUE8MHcA/0?wx_fmt=jpeg',
  'reads': '158',
  'likes': '2',
  'saved': '0',
  'date': '2022-05-24',
  'content': '    疫情就是命令，党员就是先锋。疫情发生以来，体育系全体党员、教师迅速响应号召，坚决贯彻落实疫情防控工作部署，积极配合学校和社区疫情防控工作，主动投身学校和社区“抗疫”志愿服务工作。特殊时期，他们用平凡的坚守展现了不凡的担当，在各自的岗位上用自己的担当为疫情防控贡献力量，用实际行动彰显一名共产党员的初心和使命。\n' + '    根据不完全统计，体育系共有34位党员、教师参与疫情防控志愿服务工作，其中始终坚守在校内抗疫一线的教工志愿者有10人，担任社区志愿者的有24人，同时很多党员教师积极配合社区疫情防控工作开展，力所能及地为所在社区和楼栋邻居群众提供力所能及的帮助。\n'
}, {
  'newsId': '8',
  'title': '爱“云”动 • 爱交大--交大云健身新风尚助力师生抗疫',
  'type': '体育',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljUmic7RjtickQAARx5hhIFAYLD8IcACoN5WjokF5J3Oelu2RHnzKb26QQL0A5gxURHoh6YJR9LhL9oA/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljUmic7RjtickQAARx5hhIFAYLD8IcACoN5WjokF5J3Oelu2RHnzKb26QQL0A5gxURHoh6YJR9LhL9oA/0?wx_fmt=jpeg',
  'reads': '666',
  'likes': '7',
  'saved': '1',
  'date': '2022-05-23',
  'content': '    自学校进入封闭管理以来，师生们的活动空间和活动时间都大幅减少，昔日健身房不见同学健身撸铁的场景，体育馆也少了羽拍撞击的声音。在这个春日，你或许错过了外滩的郁金香，但你收获了交大植物园的芬芳，你或许错过了肯德基星期四的疯狂，但你收获了好吃实惠花样多的交大食堂。你或许也收获了深夜的一份宁静，但还有可能，你想和交大一起运动的心却始终按耐不住，“想运动”成为同学们的一致心声。此外，同学们“足不出户”的宿舍学习生活，也让大家伏案学习时间大幅增加，很多同学反映出现肩颈酸痛、颈椎不适等情况，打破久坐，缓解疲劳的运动健身需求激增。\n' + '    学指委、校团委和体育系及时响应师生的运动健康需求，坚持“健康第一”的理念，积极主动协调联动，调整群体工作计划、内容和形式，成立专项工作小组，指导校学生联合会、学生体育总会共同参与，积极制作和发布居家抗疫健身指导视频、组织开展同心战“疫”线上运动打卡和云上体能挑战赛等活动，通过多形式、多渠道、多元化的线上体育活动，全方位鼓励和指导广大师生们通过科学的体育运动和锻炼，助力同学们更有效地调节情绪、缓解压力、增强身体免疫力，保持健康的生活方式和规律的体育锻炼，以阳光的心态、健康的体魄，齐心抗疫、共克时艰。\n'
}, {
  'newsId': '9',
  'title': '抗疫不松懈，科研不停歇，体育系线上系列学术沙龙精彩纷呈',
  'type': '体育',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljVlia2xaYtxoiaeRLQbR6xlLQ9KogvAecNUBJOeI9lGBjT1mGmdNEIibIOnqHjocg0bmIJccKKmnpq0w/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/FerUmPMLljVlia2xaYtxoiaeRLQbR6xlLQ9KogvAecNUBJOeI9lGBjT1mGmdNEIibIOnqHjocg0bmIJccKKmnpq0w/0?wx_fmt=jpeg',
  'reads': '440',
  'likes': '3',
  'saved': '0',
  'date': '2022-04-16',
  'content': '    自闵行校区实施闭环管理以来，体育系全体师生积极响应学校政策部署，严格遵守防疫要求，做到一丝不苟严防控，一如既往勤导学，保证学业不放松，科研不止步。在这特殊时期，体育系先后邀请校内外专家学者在云端为全系师生带来了四场精彩纷呈的学术沙龙。\n' + '    系列线上学术沙龙内容丰富，涵盖基本科研方法和最新前沿进展，参会师生与专家学者进行了深入的交流和讨论。系列讲座不仅拓宽了师生的学术视野和研究思路，也激发了全系师生们的科研热情，大家纷纷表达在特殊的时期，要坚持做到“抗疫不松懈，科研不停歇”。\n'
}, {
  'newsId': '10',
  'title': '招聘 | 上海交通大学2022年春季招聘校友企业专场',
  'type': '就业',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/nOnseCialZmRFMnI1Jz9O28eC6cMHR4DFpuXReqialj4Fz6K0AU1YHJaoibtS5TXLNqg4yZAKUcHNoQK61QXPL0lA/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/nOnseCialZmRFMnI1Jz9O28eC6cMHR4DFwGRzDY1rFOTfqXPrB3kdXibU0vhqibuSvGQvvVRziabars6Vf1821Mhwg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '793',
  'likes': '12',
  'saved': '2',
  'date': '2022-05-24',
  'content': ''
}, {
  'newsId': '11',
  'title': '招聘 | 上海市徐汇区2022年储备人才招聘公告',
  'type': '就业',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/nOnseCialZmTfHjOiapYpib5qsCWbBayTfoz9iaYnCqInl2g1zribf1FHrHML0aTbvx3QgicI8e1vdBll19h07b1SHaA/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/nOnseCialZmTfHjOiapYpib5qsCWbBayTfoz9iaYnCqInl2g1zribf1FHrHML0aTbvx3QgicI8e1vdBll19h07b1SHaA/0?wx_fmt=jpeg',
  'reads': '3198',
  'likes': '23',
  'saved': '5',
  'date': '2022-05-23',
  'content': '    自2020年徐汇区储备人才项目启动以来，已吸引40名来自国内“双一流”重点高校和国际排名靠前的海外大学优秀毕业生加入徐汇，为卓越徐汇建设提供了新鲜血液和人才支撑。他们成长在徐汇，从学校进入党政机关、企事业单位，在各职能部门实现角色转变，掌握工作方式方法，为自己的职业生涯打开崭新的篇章；他们奋斗在徐汇，发挥自身专业优势，在综合管理、产业经济、城市建设、执法一线等岗位服务中心大局，为徐汇经济社会发展和人民群众生活保驾护航；他们也在徐汇燃烧着自己的青春与梦想，在疫情防控工作中，挺身而出、冲锋在前，变身“大白”和“小蓝”，参加抗疫专班、支援社区防疫，为大上海保卫战贡献自己的智慧与力量。\n' + '    为进一步加强干部队伍建设，强化源头活水工程，吸引更多优秀应届毕业生来徐汇干事创业，徐汇区2022年计划招聘储备人才30名。\n'
}, {
  'newsId': '12',
  'title': '招聘 | 中国（上海）自由贸易试验区临港新片区2022届全国高校毕业生春季云聘会',
  'type': '就业',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/nOnseCialZmS69pKp4ENxgqNBR0RmkeRJ8yQ2gJqXGXhuqm4T1LrGkiaqLjoqKrhnasGmCzHc2JO9RDY9yFbQjow/0?wx_fmt=jpeg',
  'imgUrl2': 'https://mmbiz.qpic.cn/mmbiz_jpg/dzqPQjgPX6kRliaicjIKFtviaPUELF6RK3tOt1icRg1B5ILgqjiaTAJEtJSLnWY2e4oMIEHZSItZ2Ek8QWv9lyvsT3A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
  'reads': '1345',
  'likes': '12',
  'saved': '3',
  'date': '2022-05-22',
  'content': ''
}, {
  'newsId': '13',
  'title': '「博物馆之夜」交大文博楼邀你共探水浒奇妙夜，见证博物馆的力量！',
  'type': '社团',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaXq3PjCmQiaMpdx2oVAn5icHiactXchQ0EZzjSceSJ2IDX9mGtH0sOLHXSVcRiaXoC1wqrP8A3vzMicuGw/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaXq3PjCmQiaMpdx2oVAn5icHiactXchQ0EZzjSceSJ2IDX9mGtH0sOLHXSVcRiaXoC1wqrP8A3vzMicuGw/0?wx_fmt=jpeg',
  'reads': '246',
  'likes': '1',
  'saved': '1',
  'date': '2022-05-17',
  'content': '    2022年5·18国际博物馆日以“博物馆的力量”为主题，以此为契机，交大文博楼推出「品忠义 探水浒——寻宝奇妙夜」沉浸式观展直播活动。此次活动，我们将在文博楼二展厅“聚义厅”广邀豪杰，与你共同步入戴敦邦先生笔下的水浒世界，在群星闪烁的夜幕中，探寻画卷中散落的宝藏。\n'
}, {
  'newsId': '14',
  'title': '国学社 | 读书会预告：听我道来侠义世界中的快意人生',
  'type': '社团',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaVf5txalNWYq5WmSx7icHydrMcfwsibk7D8edm3ymOvpDiaXuuMwwiaQqiaBWpXD4OtIvUibjaR2KZFY1Ww/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaVf5txalNWYq5WmSx7icHydrMcfwsibk7D8edm3ymOvpDiaXuuMwwiaQqiaBWpXD4OtIvUibjaR2KZFY1Ww/0?wx_fmt=jpeg',
  'reads': '91',
  'likes': '2',
  'saved': '1',
  'date': '2022-05-12',
  'content': '    武侠“文学”究竟算不算文学？甚至国学...（呔！你说个“不”字试试？看刀！）\n' + '    自武侠史上王朔与金庸之争，文学界“学院”派与武侠小说这一通俗文学之间难以调和却又相互皈依的矛盾已是昭然若揭。对于那一段段远去的江湖传说，有人戟指怒骂须发皆张，有人不以为意孤高清傲，有人断刀明志心念江湖，但更多人只是将其当作茶余饭后的故事，高歌长啸弹剑的热血权作少年游了。\n' + '    江湖多故人，余生只常驻。既是江湖的故事，如此拘谨严肃反倒不合意。但请三五知己，待我取来桃树下埋藏了多年的酒与心事，再拿来月光下晾晒好的信纸与长箫...若定要给个日子，便选在 5/14 19:00（#腾讯会议：943-571-844），听听我们的主讲人陈鲲鹏来话一话吧！\n' + '    闲话不多说，你是个明白人，定当赴约。我这不是粗俗，只是看你有缘，隔了千万里又打什么紧。咳，文艺？风雅？我也使得。可以为你歌一曲。记得相合。\n' + '    “黄叶萋萋，故人归兮。我有桃酒，葬于藩篱。老马啾啾，西风未休，我有锦绣，束于寒秋...”\n'
}, {
  'newsId': '15',
  'title': '招新 | SJTU音乐剧社er征集令',
  'type': '社团',
  'imgUrl': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaWJP7lZd9ndHTibJicgq1EDibh9UOwEBN8dkDe3YPTGNwXtibxnZ9nwf96LE4rZYJqVelzeNqDD3skhyw/0?wx_fmt=jpeg',
  'imgUrl2': 'http://mmbiz.qpic.cn/mmbiz_jpg/d8mBJ733hiaWJP7lZd9ndHTibJicgq1EDibh9UOwEBN8dkDe3YPTGNwXtibxnZ9nwf96LE4rZYJqVelzeNqDD3skhyw/0?wx_fmt=jpeg',
  'reads': '458',
  'likes': '4',
  'saved': '1',
  'date': '2022-04-12',
  'content': '    亲爱的旁友，你听说过音乐剧吗？站在坑边的朋友，接受我们热情的安利，我们负责推您入坑\n' + '    从剧目展演到半原创、原创音乐剧, 我们不断拓宽自我的边界，亦传递音乐剧的魅力, 从放映会到剧本围读会, 我们持续发掘崭新的可能，亦同享相聚的欢乐, \n' + '    只要你心有向往——来 都可以来。'
}];
exports.newsData = newsData;

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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\index\index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _data = __webpack_require__(/*! ../../../default/common/data/data.js */ "D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\common\\data\\data.js");

var _system = _interopRequireDefault(requireModule("@system.router"));

var _system2 = _interopRequireDefault(requireModule("@system.mediaquery"));

var _ohosDistributedHardware = _interopRequireDefault(requireModule("@ohos.distributedHardware.deviceManager"));

var _ohosAbility = _interopRequireDefault(requireModule("@ohos.ability.featureAbility"));

var _ohosAbility2 = _interopRequireDefault(requireModule("@ohos.ability.wantConstant"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = {
  data: {
    titleList: _data.titles,
    newsList: _data.newsData,
    title: _data.newsData[0].title,
    type: _data.newsData[0].type,
    imgUrl: _data.newsData[0].imgUrl,
    imgUrl2: _data.newsData[0].imgUrl2,
    reads: _data.newsData[0].reads,
    likes: _data.newsData[0].likes,
    saved: _data.newsData[0].saved,
    date: _data.newsData[0].date,
    content: _data.newsData[0].content,
    isMatchMedia: true,
    deviceList: [],
    deviceMag: {}
  },
  changeNewsType: function changeNewsType(e) {
    var type = _data.titles[e.index].name;
    this.newsList = [];

    if (type === '全部') {
      this.newsList = _data.newsData;
    } else {
      var newsArray = [];

      var _iterator = _createForOfIteratorHelper(_data.newsData),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var news = _step.value;

          if (news.type === type) {
            newsArray.push(news);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.newsList = newsArray;
    }
  },
  itemClick: function itemClick(news) {
    if (this.isMatchMedia) {
      _system["default"].push({
        uri: 'pages/detail/detail',
        params: {
          'title': news.title,
          'type': news.type,
          'imgUrl': news.imgUrl,
          'imgUrl2': news.imgUrl2,
          'reads': news.reads,
          'likes': news.likes,
          'saved': news.saved,
          'date': news.date,
          'content': news.content
        }
      });
    } else {
      this.title = news.title;
      this.type = news.type;
      this.imgUrl = news.imgUrl;
      this.imgUrl2 = news.imgUrl2;
      this.reads = news.reads;
      this.likes = news.likes;
      this.saved = news.saved;
      this.date = news.date;
      this.content = news.content;
    }
  },
  onReady: function onReady() {
    var mMediaQueryList = _system2["default"].matchMedia('(orientation: portrait)');

    var that = this;

    function maxWidthMatch(e) {
      that.isMatchMedia = e.matches;
    }

    mMediaQueryList.addListener(maxWidthMatch);
  },
  toShare: function toShare() {
    var _this = this;

    _ohosDistributedHardware["default"].createDeviceManager('com.huawei.codelab', function (err, data) {
      (0, _newArrowCheck2["default"])(this, _this);

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
    var _this2 = this;

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
              'title': this.title,
              'type': this.type,
              'imgUrl': this.imgUrl,
              'imgUrl2': this.imgUrl2,
              'reads': this.reads,
              'likes': this.likes,
              'saved': this.saved,
              'date': this.date,
              'content': this.content
            }
          }
        };

        _ohosAbility["default"].startAbility(str).then(function (data) {
          (0, _newArrowCheck2["default"])(this, _this2);
        }.bind(this))["catch"](function (error) {
          (0, _newArrowCheck2["default"])(this, _this2);
        }.bind(this));
      }
    }
  },
  selectDevice: function selectDevice(index, e) {
    this.deviceList[index].checked = e.checked;
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
/*!******************************************************************************************************************************!*\
  !*** D:\UMJI\2022_SU\CS178\harmonyos_codelabs-master\DistributeNewsJS\entry\src\main\js\default\pages\index\index.hml?entry ***!
  \******************************************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\10267\AppData\Local\Huawei\Sdk\js\3.0.0.1\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\10267\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.1\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\UMJI\\2022_SU\\CS178\\harmonyos_codelabs-master\\DistributeNewsJS\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=index.js.map