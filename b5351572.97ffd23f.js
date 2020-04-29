(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{236:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return o}));var t=n(1),c=n(9),r=(n(0),n(300)),s={id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},i=[{value:"Installation and Usage",id:"installation-and-usage",children:[]},{value:"CLI arguments",id:"cli-arguments",children:[{value:"--dir",id:"--dir",children:[]},{value:"--moduleType",id:"--moduletype",children:[]},{value:"--framework",id:"--framework",children:[]}]},{value:"Project types",id:"project-types",children:[]},{value:"create-single-spa",id:"create-single-spa",children:[]},{value:"generator-single-spa",id:"generator-single-spa",children:[]},{value:"webpack-config-single-spa",id:"webpack-config-single-spa",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]}]},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-1",children:[]}]},{value:"webpack-config-single-spa-ts",id:"webpack-config-single-spa-ts",children:[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"webpack-config-single-spa-react-ts",id:"webpack-config-single-spa-react-ts",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],p={rightToc:i},l="wrapper";function o(e){var a=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(l,Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5bf9\u4e8e\u90a3\u4e9b\u559c\u6b22\u81ea\u52a8\u751f\u6210\u548c\u7ba1\u7406webpack\uff0cbabel\uff0cjest\u7b49\u914d\u7f6e\u7684\u7528\u6237\uff0cSingle-spa\u63d0\u4f9b\u4e86\u4e00\u4e2aCLI\u3002\u60a8\u4e0d\u4e00\u5b9a\u975e\u5f97\u7528CLI\u6765\u751f\u6210single-spa\u7684\u914d\u7f6e\u3002"),Object(r.b)("p",null,"\u6b64CLI\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa")," (",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/"}),"Github link"),")\u3002\u5b83\u65e8\u5728\u7528\u4e8e\u521b\u5efa\u65b0\u9879\u76ee\u548c\u66f4\u65b0\u7531 ",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa")," \u521b\u5efa\u7684\u9879\u76ee\uff0c\u4f46\u4e0d\u9002\u7528\u4e8e\u5c06\u5df2\u7ecf\u5b58\u5728\u7684\u4ee3\u7801\u5e93\u8fc1\u79fb\u81f3singa-spa\u3002"),Object(r.b)("h2",{id:"installation-and-usage"},"Installation and Usage"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u60f3\u5168\u5c40\u5b89\u88c5 create-single-spa \uff0c\u8bf7\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --global create-single-spa\n\n# or\nyarn global add create-single-spa\n")),Object(r.b)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa\n")),Object(r.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u672c\u5730\u5b89\u88c5 create-single-spa"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm init single-spa\n\n# or\nnpx create-single-spa\n\n# or \nyarn create single-spa\n")),Object(r.b)("p",null,"\u8fd9\u5c06\u89e6\u53d1CLI\u63d0\u793a\uff0c\u8be2\u95ee\u4f60\u5c06\u521b\u5efa\u6216\u66f4\u65b0\u54ea\u79cd\u9879\u76ee\u3002"),Object(r.b)("h2",{id:"cli-arguments"},"CLI arguments"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u5982\u4e0b\u8fd9\u79cd\u65b9\u5f0f\u4f20\u53c2\u6570\u7ed9",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Different ways of doing the same thing\ncreate-single-spa --framework react\nnpm init single-spa --framework react\nnpx create-single-spa --framework react\nyarn create single-spa --framework react\n")),Object(r.b)("p",null,"\u4ee5\u4e0b\u4e3a\u6709\u6548\u53c2\u6570\uff1a"),Object(r.b)("h3",{id:"--dir"},"--dir"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u6307\u5b9a ",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa")," \u6267\u884c\u7684\u8def\u5f84"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Two ways of doing the same thing\ncreate-single-spa my-dir\ncreate-single-spa --dir my-dir\n")),Object(r.b)("h3",{id:"--moduletype"},"--moduleType"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"--moduleType")," \u6307\u5b9a\u521b\u5efa\u54ea\u4e00\u79cd\u5e94\u7528 :"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa --moduleType root-config\ncreate-single-spa --moduleType app-parcel\ncreate-single-spa --moduleType util-module\n")),Object(r.b)("h3",{id:"--framework"},"--framework"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"--framework")," \u53c2\u6570\u6307\u5b9a\u4f7f\u7528\u54ea\u79cd\u6846\u67b6\uff0c\u5982\u679c\u4e0d\u4f20 ",Object(r.b)("inlineCode",{parentName:"p"},"--moduleType")," \uff0c\u9ed8\u8ba4\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"app-parcel"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa --framework react\ncreate-single-spa --framework vue\ncreate-single-spa --framework angular\n")),Object(r.b)("h2",{id:"project-types"},"Project types"),Object(r.b)("p",null,"create-single-spa \u5c06\u8be2\u95ee\u4f60\u5c06\u8981\u521b\u5efa single-spa\u5e94\u7528\uff0c\u516c\u5171\u6a21\u5757\uff0c\u6216\u8005\u6839\u914d\u7f6e\u3002\u6240\u6709\u8fd9\u4e09\u79cd\u6a21\u5f0f\u90fd\u4f1a\u5047\u5b9a\u4f60\u4f7f\u7528\u7684\u662f",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/recommended-setup"}),"\u63a8\u8350\u5b89\u88c5"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u9009\u62e9\u521b\u5efa\u4e00\u4e2asingle-spa\u5e94\u7528\uff0c\u5219\u4f1a\u63d0\u793a\u60a8\u9009\u62e9\u54ea\u79cd\u6846\u67b6\u3002React\u4f7f\u7528 babel + webpack + jest\u7684\u9884\u7f6e\u914d\u7f6e\u3002Angular\u4f7f\u7528Angular CLI\u548c",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:""}),"single-spa-angular"),"\u3002Vue\u4f7f\u7528Vue CLI\u548c",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/ecosystem/ecosystem-vue#vue-cli"}),"vue-cli-plugin-single-spa"),"\u3002"),Object(r.b)("h1",{id:"npm-packages"},"NPM packages"),Object(r.b)("p",null,"Within the create-single-spa repo, there are several NPM packages. The following sections document each package:\ncreate-single-spa\u63d0\u4f9b\u5982\u4e0bNPM\u5305\uff1a"),Object(r.b)("h2",{id:"create-single-spa"},"create-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa"}),"Github project")),Object(r.b)("p",null,"\u6838\u5fc3CLI\uff0c\u8c03\u7528\u4e86",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"#generator-single-spa"}),"generator-single-spa"),"\u3002"),Object(r.b)("h2",{id:"generator-single-spa"},"generator-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa"}),"Github project")),Object(r.b)("p",null,"\u63d0\u793a\u7528\u6237\u7136\u540e\u521b\u5efa\u6587\u4ef6\u7684",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://yeoman.io/"}),"Yeoman generator"),"\u3002\u4e3b\u8981\u901a\u8fc7create-single-spa CLI\u8c03\u7528\uff0c\u4f46\u662f\u5982\u679c\u4f60\u60f3\u5b9a\u5236\u5316\u5b83\uff0c\u4e5f\u53ef\u4ee5\u88ab",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://yeoman.io/authoring/composability.html"}),"composed"),"\u3002"),Object(r.b)("h2",{id:"webpack-config-single-spa"},"webpack-config-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa"}),"Github project")),Object(r.b)("p",null,"\u53ef\u5206\u4eab\u53ef\u5b9a\u5236\u5316\u7684webpack\u914d\u7f6e\uff0c\u5e94\u7528\u4e8e\u516c\u5171\u6a21\u5757\u548cReact single-spa\u5e94\u7528\u3002"),Object(r.b)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa webpack-merge\n\nyarn add --dev webpack-config-single-spa webpack-merge\n")),Object(r.b)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(r.b)("h2",{id:"webpack-config-single-spa-react"},"webpack-config-single-spa-react"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react"}),"Github project")),Object(r.b)("p",null,"\u53ef\u5206\u4eab\u53ef\u5b9a\u5236\u5316\u7684webpack\u914d\u7f6e\uff0c\u53ef\u5c06react\u7684\u7279\u5b9a\u914d\u7f6e\u6dfb\u52a0\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-single-spa")," \u4e2d\u3002"),Object(r.b)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\nyarn add --dev webpack-config-single-spa-react webpack-merge\n")),Object(r.b)("h3",{id:"\u7528\u6cd5-1"},"\u7528\u6cd5"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(r.b)("h2",{id:"webpack-config-single-spa-ts"},"webpack-config-single-spa-ts"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts"}),"Github project")),Object(r.b)("p",null,"A shareable, customizable webpack config that adds typescript-specific configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),". Note that webpack-config-single-spa-ts has a peerDependency on ",Object(r.b)("inlineCode",{parentName:"p"},"typescript"),"."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-ts webpack-merge\n\nyarn add --dev webpack-config-single-spa-ts webpack-merge\n")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-ts');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const singleSpaTs = require('webpack-config-single-spa-ts');\n\n// Alternatively, you may modify a webpack config directly\nconst myOtherWebpackConfig = {/* ... */}\nconst finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig)\n")),Object(r.b)("h2",{id:"webpack-config-single-spa-react-ts"},"webpack-config-single-spa-react-ts"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts"}),"Github project")),Object(r.b)("p",null,"A shareable, customizable webpack config that creates a webpack config that works with both react and typescript. Note that webpack-config-single-spa-react-ts simply merges the config from webpack-config-single-spa-react with that of webpack-config-single-spa-ts."),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-react-ts webpack-merge\n\nyarn add --dev webpack-config-single-spa-react-ts webpack-merge\n")),Object(r.b)("h3",{id:"usage-1"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-react-ts');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")))}o.isMDXComponent=!0},300:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"b",(function(){return b}));var t=n(0),c=n.n(t),r=c.a.createContext({}),s=function(e){var a=c.a.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},i=function(e){var a=s(e.components);return c.a.createElement(r.Provider,{value:a},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},o=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,p=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),o=s(n),b=t,g=o[i+"."+b]||o[b]||l[b]||r;return n?c.a.createElement(g,Object.assign({},{ref:a},p,{components:n})):c.a.createElement(g,Object.assign({},{ref:a},p))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,s=new Array(r);s[0]=o;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:t,s[1]=i;for(var b=2;b<r;b++)s[b]=n[b];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);