(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},14:function(t,n,o){"use strict";o.r(n);var e=o(5),c=o.n(e),i=o(6),r=o(1),a=(o(12),o(0)),s=function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",children:t.name},t.id)}))})},u=o(7);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],e=n[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Dynamic list of Goods"}),Object(a.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){d().then((function(t){e(t)}))},children:"Load all goods"}),Object(a.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){d().then((function(t){return Object(u.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){e(t)}))},children:"Load 5 first goods"}),Object(a.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){e(t)}))},children:"Load red goods"}),Object(a.jsx)(s,{goods:o})]})};c.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.84d0e90a.chunk.js.map