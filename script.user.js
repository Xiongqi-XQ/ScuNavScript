// ==UserScript==
// @name         使用四川大学教务系统导航栏
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  使用川大教务系统顶部导航栏
// @author       Xiongqi
// @match        http://202.115.47.141/loginAction.do
// @match        http://zhjw.scu.edu.cn/loginAction.do
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  window.onload = function () {
    if (window.location.href === 'http://202.115.47.141/loginAction.do'||window.location.href === 'http://zhjw.scu.edu.cn/loginAction.do') {
      window.frames['topFrame'].changeLeftMenu = function () {
        if (
          parent.frames['bottomFrame'] &&
          parent.frames['bottomFrame'].frames['menuFrame'] &&
          parent.frames['bottomFrame'].frames['menuFrame'].menus
        ) {
          parent.frames['bottomFrame'].frames['menuFrame'].menus.index = window.frames['topFrame'].moduleNum;
          parent
            .frames['bottomFrame']
            .frames['menuFrame']
            .menus.show();
          parent
            .frames['bottomFrame']
            .frames['menuFrame']
            .menus.click();
        }
      };
      console.log('成功');
    }
  };
})();
