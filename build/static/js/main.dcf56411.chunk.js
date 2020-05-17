(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(53)},28:function(e,t,n){},29:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(28),n(29),n(2)),l=n(3),s=Object.freeze({LoadTorrents:"LoadTorrents",FinishAddingTorrent:"FinishAddingTorrent",UpdateTorrent:"UpdateTorrent",EnterEditMode:"EnterEditMode",LeaveEditMode:"LeaveEditMode",FinishDeletingTorrent:"FinishDeletingTorrent",StartWaiting:"StartWaiting"});function u(e){return{type:s.StartWaiting}}function d(e){return{type:s.LoadTorrents,payload:e}}function m(e){return{type:s.UpdateTorrent,payload:e}}function h(e){if(!e.ok)throw Error("".concat(e.status,": ").concat(e.statusText));return e}var f="https://torrentapi.duckdns.org:8442";function p(){return function(e){e(u()),fetch("".concat(f,"/api/torrents")).then(h).then(function(e){return e.json()}).then(function(t){e(d(t))}).catch(function(e){return console.error(e)})}}function E(e,t,n,a,r,c){var o="";"Ubuntu"===r?o="https://ubuntu.com/":"CentOS"===r?o="https://www.centos.org/":"Get Fedora"===r?o="https://getfedora.org/":"Debian"===r?o="https://www.debian.org/":"Linux Mint"===r?o="https://www.linuxmint.com/":"Manjaro"===r&&(o="https://manjaro.org/");var i={name:e,author:t,filesize:n,filename:a,distribution:{distributionName:r,distributionWebsite:o},description:c},l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)};return function(e){e(u()),fetch("".concat(f,"/api/torrents"),l).then(h).then(function(e){return e.json()}).then(function(t){var n;e((n=t,{type:s.FinishAddingTorrent,payload:n}))}).catch(function(e){return console.error(e)})}}function b(e,t){var n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({})};return 1===t?function(t){t(u()),fetch("".concat(f,"/api/torrents/").concat(e,"/leech"),n).then(h).then(function(e){return e.json()}).then(function(e){t(m(e))}).catch(function(e){return console.error(e)})}:function(t){t(u()),fetch("".concat(f,"/api/torrents/").concat(e,"/unleech"),n).then(h).then(function(e){return e.json()}).then(function(e){t(m(e))}).catch(function(e){return console.error(e)})}}function g(e,t){var n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({})};return 1===t?function(t){t(u()),fetch("".concat(f,"/api/torrents/").concat(e,"/seed"),n).then(h).then(function(e){return e.json()}).then(function(e){t(m(e))}).catch(function(e){return console.error(e)})}:function(t){t(u()),fetch("".concat(f,"/api/torrents/").concat(e,"/unseed"),n).then(h).then(function(e){return e.json()}).then(function(e){t(m(e))}).catch(function(e){return console.error(e)})}}function v(e){var t={method:"DELETE"};return function(n){n(u()),fetch("".concat(f,"/api/torrentfiles/").concat(e.filename),t).then(h).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.error(e)}),fetch("".concat(f,"/api/torrents/").concat(e._id),t).then(h).then(function(e){return e.json()}).then(function(t){n(function(e){return{type:s.FinishDeletingTorrent,payload:e}}(e))}).catch(function(e){return console.error(e)})}}function N(e){var t=e.torrent,n=Object(l.b)(),c=function(){n(b(t._id,1))},o=function(){n(b(t._id,-1))},d=function(){n(g(t._id,1))},p=function(){n(g(t._id,-1))},E=Object(a.useState)(t.name),N=Object(i.a)(E,2),j=N[0],y=N[1],O=Object(a.useState)(t.description),C=Object(i.a)(O,2),T=C[0],S=C[1],k="https://torrentapi.duckdns.org:8442";return t.isEditing?r.a.createElement("tr",{className:"torrent"},r.a.createElement("td",{className:"torrent-left"},r.a.createElement("input",{type:"text",value:j,onChange:function(e){return y(e.target.value)},placeholder:"Change Torrent name"}),r.a.createElement("button",{onClick:function(){n(function(e,t,n){var a={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t})};return function(e){e(u()),fetch("".concat(f,"/api/torrents/").concat(n),a).then(h).then(function(e){return e.json()}).then(function(t){e(m(t))}).catch(function(e){return console.error(e)})}}(j,T,t._id))}},"Save"),r.a.createElement("button",{onClick:function(){n(function(e){return{type:s.LeaveEditMode,payload:e}}(t))}},"Cancel"),r.a.createElement("button",{onClick:function(){n(v(t))},className:"delete-button"},"Delete")),r.a.createElement("td",null,r.a.createElement("span",{className:"size"},t.filesize," Mb")),r.a.createElement("td",null,r.a.createElement("div",{className:"leechers-full"},r.a.createElement("div",{className:"increments"},r.a.createElement("button",{onClick:c},"+"),r.a.createElement("button",{onClick:o},"-")),r.a.createElement("span",{className:"leechers"},t.leechers))),r.a.createElement("td",null,r.a.createElement("div",{className:"seeders-full"},r.a.createElement("div",{className:"increments"},r.a.createElement("button",{onClick:d},"+"),r.a.createElement("button",{onClick:p},"-")),r.a.createElement("span",{className:"seeders"},t.seeders))),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(t.distribution.distributionWebsite),target:"_blank",rel:"noopener noreferrer"},t.distribution.distributionName)),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(k,"/api/torrentfiles/").concat(t.filename),download:!0},t.name,".iso")),r.a.createElement("td",null,r.a.createElement("div",{className:"authorDatePair"},r.a.createElement("span",{className:"uploaderName"},t.author),r.a.createElement("span",{className:"datePosted"},t.dateCreated.substring(0,10)))),r.a.createElement("td",{className:"torrent-right"},r.a.createElement("div",{className:"descriptionInput"},r.a.createElement("label",null,"Change Description:"),r.a.createElement("textarea",{value:T,onChange:function(e){return S(e.target.value)}})))):r.a.createElement("tr",{className:"torrent"},r.a.createElement("td",{className:"torrent-left"},r.a.createElement("div",{className:"nameButtonGroup"},r.a.createElement("span",{className:"name"},t.name),r.a.createElement("img",{className:"logo",src:"".concat(t.distribution.distributionName,".png"),alt:t.distribution.distributionName}),r.a.createElement("button",{onClick:function(){n(function(e){return{type:s.EnterEditMode,payload:e}}(t))}},"Edit Torrent"))),r.a.createElement("td",null,r.a.createElement("span",{className:"size"},t.filesize," Mb")),r.a.createElement("td",null,r.a.createElement("div",{className:"leechers-full"},r.a.createElement("div",{className:"increments"},r.a.createElement("button",{onClick:c},"+"),r.a.createElement("button",{onClick:o},"-")),r.a.createElement("span",{className:"leechers"},t.leechers))),r.a.createElement("td",null,r.a.createElement("div",{className:"seeders-full"},r.a.createElement("div",{className:"increments"},r.a.createElement("button",{onClick:d},"+"),r.a.createElement("button",{onClick:p},"-")),r.a.createElement("span",{className:"seeders"},t.seeders))),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(t.distribution.distributionWebsite),target:"_blank",rel:"noopener noreferrer"},t.distribution.distributionName)),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(k,"/api/torrentfiles/").concat(t.filename),download:!0},t.name,".iso")),r.a.createElement("td",null,r.a.createElement("div",{className:"authorDatePair"},r.a.createElement("span",{className:"uploaderName"},t.author),r.a.createElement("span",{className:"datePosted"},t.dateCreated.substring(0,10)))),r.a.createElement("td",{className:"torrent-right"},r.a.createElement("span",{className:"description"},t.description)))}function j(){return r.a.createElement("div",{className:"header"},"Quick and Easy Torrent Downloads")}function y(){return r.a.createElement("tr",null,r.a.createElement("th",null,"Torrent Name"),r.a.createElement("th",null,"File Size"),r.a.createElement("th",null,"Leechers"),r.a.createElement("th",null,"Seeders"),r.a.createElement("th",null,"Distribution"),r.a.createElement("th",null,"Download Link"),r.a.createElement("th",null,"Author/Date Posted"),r.a.createElement("th",null,"Description"))}function O(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)("name"),m=Object(i.a)(s,2),E=m[0],b=m[1];return r.a.createElement("div",{className:"searchBar"},r.a.createElement("span",{className:"searchBarLabel"},"Search By: "),r.a.createElement("select",{className:"searchBy",onChange:function(e){b(e.target.value)}},r.a.createElement("option",{value:"name"},"Torrent Name"),r.a.createElement("option",{value:"author"},"Torrent Author"),r.a.createElement("option",{value:"distribution"},"Distribution")),r.a.createElement("input",{className:"searchInput",type:"text",onChange:function(e){o(e.target.value)},placeholder:"Search Torrents..."}),r.a.createElement("button",{onClick:function(){e(function(e,t){return function(n){""===t?n(p()):(n(u()),fetch("".concat(f,"/api/torrents/").concat(e,"/").concat(t)).then(h).then(function(e){return e.json()}).then(function(e){n(d(e))}).catch(function(e){return console.error(e)}))}}(E,c))}},"Search"))}var C=n(20),T=n.n(C);function S(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),d=u[0],m=u[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),p=f[0],b=f[1],g=Object(a.useState)(null),v=Object(i.a)(g,2),N=v[0],j=v[1],y=Object(a.useState)("Ubuntu"),O=Object(i.a)(y,2),C=O[0],S=O[1],k=Object(a.useState)(""),w=Object(i.a)(k,2),D=w[0],M=w[1];return r.a.createElement("div",{className:"torrentAdder"},r.a.createElement("h3",null,"Add a New Torrent"),r.a.createElement("div",{className:"torrentAdder-left"},r.a.createElement("input",{className:"torrentNameInput",type:"text",onChange:function(e){o(e.target.value)},placeholder:"Insert Torrent Name"}),r.a.createElement("input",{className:"torrentAuthorInput",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Insert Torrent's Author"}),r.a.createElement("input",{className:"fileSizeInput",type:"text",onChange:function(e){b(e.target.value)},placeholder:"Insert the File Size (in MB)"})),r.a.createElement("div",{className:"torrentAdder-right"},r.a.createElement("label",null,"Add a Torrent File"),r.a.createElement("input",{id:"inputFile",type:"file",name:"file",onChange:function(e){j(e.target.files[0])}}),r.a.createElement("select",{className:"distributionSelector",onChange:function(e){S(e.target.value)}},r.a.createElement("option",{value:"Ubuntu"},"Ubuntu"),r.a.createElement("option",{value:"CentOS"},"CentOS"),r.a.createElement("option",{value:"Get Fedora"},"Get Fedora"),r.a.createElement("option",{value:"Debian"},"Debian"),r.a.createElement("option",{value:"Linux Mint"},"Linux Mint"),r.a.createElement("option",{value:"Manjaro"},"Manjaro")),r.a.createElement("input",{className:"torrentDescInput",onChange:function(e){M(e.target.value)},placeholder:"Enter Torrent Description"})),r.a.createElement("div",{className:"torrentAdder-bottom"},r.a.createElement("button",{onClick:function(){if(p.match(/^\d+$/)){var t=new FormData;t.append("torrentFile",N),T.a.post("".concat("https://torrentapi.duckdns.org:8442","/api/torrentfiles/upload"),t,{}).then(function(t){t.data.error?alert("Must use a file with .torrent that has not been entered yet."):e(E(c,d,p,t.data.filename,C,D))})}else alert("File size must contain only numbers")}},"Publish Torrent"),r.a.createElement("button",null,"Cancel")))}var k=function(){var e=Object(l.c)(function(e){return e.torrents}),t=Object(l.b)(),n=Object(l.c)(function(e){return e.isWaiting});return Object(a.useEffect)(function(){t(p())},[t]),r.a.createElement("div",{id:"torrents-root"},r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(S,null),n&&r.a.createElement("div",{className:"spinner"}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement(y,null),e.map(function(e){return r.a.createElement(N,{key:e._id,torrent:e})}))))},w=n(5),D=n(21),M=n(22),F=n(4),_={isWaiting:!1,torrents:[]};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.LoadTorrents:return Object(F.a)({},e,{isWaiting:!1,torrents:t.payload});case s.FinishAddingTorrent:return t.payload.key=t.payload._id,Object(F.a)({},e,{isWaiting:!1,torrents:[t.payload].concat(Object(M.a)(e.torrents))});case s.UpdateTorrent:return Object(F.a)({},e,{isWaiting:!1,torrents:e.torrents.map(function(e){return e._id===t.payload._id?t.payload:e})});case s.EnterEditMode:return Object(F.a)({},e,{torrents:e.torrents.map(function(e){return e._id===t.payload._id?Object(F.a)({},e,{isEditing:!0}):e})});case s.LeaveEditMode:return Object(F.a)({},e,{torrents:e.torrents.map(function(e){return e._id===t.payload._id?Object(F.a)({},e,{isEditing:void 0}):e})});case s.FinishDeletingTorrent:return Object(F.a)({},e,{isWaiting:!1,torrents:e.torrents.filter(function(e){return e._id!==t.payload._id})});case s.StartWaiting:return Object(F.a)({},e,{isWaiting:!0});default:return e}},L=Object(w.c)(A,Object(w.a)(D.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:L},r.a.createElement(k,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.dcf56411.chunk.js.map