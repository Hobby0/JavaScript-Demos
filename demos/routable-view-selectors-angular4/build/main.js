webpackJsonp([1],{69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),r=n(70);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},70:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),c=n(2),i=n(31),p=n(71),s=n(73),l=n(75),u=[{path:"a",component:s.AViewComponent},{path:"b",component:l.BViewComponent}],f=function(){function t(){}return t=o([c.NgModule({bootstrap:[p.AppComponent],imports:[r.BrowserModule,i.RouterModule.forRoot(u,{useHash:!0})],declarations:[p.AppComponent,s.AViewComponent,l.BViewComponent],providers:[]})],t)}();e.AppModule=f},71:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),c=function(){function t(){}return t=o([r.Component({selector:"my-app",styles:[n(72)],template:'\n\t\t<p>\n\t\t\t<a routerLink="/">Home</a> &nbsp;|&nbsp;\n\t\t\t<a routerLink="/a">A View</a> &nbsp;|&nbsp;\n\t\t\t<a routerLink="/b">B View</a>\n\t\t</p>\n\n\t\t<router-outlet></router-outlet>\n\t'})],t)}();e.AppComponent=c},72:function(t,e){t.exports="\n:host {\n\tdisplay: block ;\n\tfont-size: 16px ;\n}\n\n:host ::ng-deep a {\n\tcolor: red ;\n\tcursor: pointer ;\n\ttext-decoration: underline ;\n\tuser-select: none ;\n\t\t-moz-user-select: none ;\n\t\t-webkit-user-select: none ;\n}\n"},73:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),c=function(){function t(){}return t=o([r.Component({styles:[n(74)],template:"\n\t\t<h3>\n\t\t\tA-View Component\n\t\t</h3>\n\n\t\t<p>\n\t\t\tThis is the a-view component, noice!\n\t\t</p>\n\t"})],t)}();e.AViewComponent=c},74:function(t,e){t.exports="\n:host {\n\tdisplay: block ;\n}\n\n"},75:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),c=function(){function t(){}return t=o([r.Component({selector:"b-view",styles:[n(76)],template:"\n\t\t<h3>\n\t\t\tB-View Component\n\t\t</h3>\n\n\t\t<p>\n\t\t\tThis is the b-view component, sweet!\n\t\t</p>\n\t"})],t)}();e.BViewComponent=c},76:function(t,e){t.exports="\n:host {\n\tdisplay: block ;\n}\n\n"}},[69]);