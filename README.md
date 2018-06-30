<p align="center">
  <img width="550" src="http://fairyever.qiniudn.com/github-banner.png">
</p>

Solution of management system front-end based on `vue.js` and `ElementUI`

<p>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.2-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.0.11-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/vuejs/vuex/">
    <img src="https://img.shields.io/badge/vuex-3.0.1-brightgreen.svg" alt="vuex">
  </a>
  <a href="https://github.com/axios/axios">
    <img src="https://img.shields.io/badge/axios-0.17.1-brightgreen.svg" alt="axios">
  </a>
</p>

Welcome everyone to maintain

[中文文档](https://github.com/FairyEver/d2admin-vue-element/blob/master/doc/zh-cn.md)

[预览 / Online preview address](http://d2admin.fairyever.com/)

To watch the experience, the preview screenshot is at the end

> This project is suitable for use as a template. Because a lot of plug-ins and components are integrated now, the first load will take more time. Although the first screen loading animation has been done, it is suggested that you must delete the code that is not used when you release it. For example, the project does not use charts, so it is better to delete the integrated chart library and encapsulated chart components.

## feature

* first screen loading wait for animation to avoid first loading white screen embarrassment.

* brief theme

* each plug-in and component is equipped with an introduction document

* image resource sketch source file (you can regenerate all image resources in this file).

* landing and cancellation

* automatically generate menus based on Routing

* folding side sidebar

* multilingual support

* rich text editor

* Markdown editor

* full screen function

* Fontawesome Icon Library

* Fontawesome icon selector (component)

* automatic introduction of the downloaded SVG Icon

* front-end false data support (mock)

* integrated G2 chart

* chart adaptable drag and drop size card container (example)

* simplify the clipboard operation

* simplifying the Cookie operation

* time computing tool

* import Excel (xlsx format + CSV format)

* data export Excel (xlsx format + CSV format)

* data export text

* Digital Animation

* can drag and drop the size of the cut layout

* can drag and drop the size and location of the grid layout

* provide three kinds of page container components (normal cards, invisible containers, fill pages).

* code highlighting

* load and parse the markdown file

* GitHub style markdown display component

* markdown code is high

* extension of Baidu cloud link resolution and Optimization for markdown.

## Use

install

```
npm i
```

run

```
npm run dev
```

The following environment tests are available

```
➜  ~ npm -v
5.6.0
➜  ~ node -v
v8.11.1
➜  ~ nrm -V
1.0.2
➜  ~ nrm ls
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

> Not recommended for use `cnpm`
      
## preview

login

![Snip20180526_1](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_1.png)

dashboard

![Snip20180526_2](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_2.png)

mock data demo

![Snip20180526_3](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_3.png)

dragable and modified size card

![Snip20180526_4](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_4.png)

dragable layout

![Snip20180526_5](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_5.png)

multi-language support

![Snip20180526_6](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_6.png)

import `csv` `xlsx`
export `csv` `xlsx` and text

![Snip20180526_7](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_7.png)

![Snip20180526_8](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_8.png)

three modes page container component

![Snip20180526_9](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_9.png)

integrated rich text editor

![Snip20180526_10](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_10.png)

integrated markdown editor

![Snip20180526_11](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_11.png)

integrated icon font

![Snip20180526_12](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_12.png)

encapsulation icon component

![Snip20180526_13](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_13.png)

support automatically import SVG folder icon, and through the use of components

![Snip20180526_14](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_14.png)

icon selector component

![Snip20180526_15](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_15.png)

Integrated markdown rendering function and optimized the Baidu cloud sharing link in the rendering result display

![Snip20180526_16](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_16.png)

integrated digital animation plug-in

![Snip20180526_17](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_17.png)

hightLight in source code viewer

![Snip20180526_18](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_18.png)

integrated chart

![Snip20180526_19](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_19.png)

support chart drag and resize and drag and drop locations

![Snip20180526_20](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_20.png)

separate chart example

![Snip20180526_21](https://raw.githubusercontent.com/FairyEver/d2admin-vue-element/master/preview-image/Snip20180526_21.png)


