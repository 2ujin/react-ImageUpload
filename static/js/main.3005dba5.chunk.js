(window["webpackJsonpreact-imageupload"]=window["webpackJsonpreact-imageupload"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),r=a.n(l),c=(a(14),a(4)),o=a(5),s=a(7),d=a(6),u=a(1),m=a(8),p=(a(15),function(e){function t(){var e;Object(c.a)(this,t);return(e=Object(s.a)(this,Object(d.a)(t).call(this))).displayData_img=[],e.displayData_gif=[],e.state={showdata:e.displayData_img,showdata2:e.displayData_gif,width:0,postVal:"",showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff",counter:0,file:""},e.appendData=e.appendData.bind(Object(u.a)(e)),e.appendData_gif=e.appendData_gif.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleChange_gif=e.handleChange_gif.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"appendData",value:function(){""!=this.state.postVal&&this.displayData_img.push(i.a.createElement("div",{id:"display-data"},i.a.createElement("img",{src:this.state.postVal,id:"image"}))),this.setState({showdata:this.displayData,postVal:""})}},{key:"handleChange",value:function(e){var t=document.getElementById("meme"),a=document.getElementById("file").value;a=a.slice(a.indexOf(".")+1).toLowerCase();var n=e.target.files[0],i=new FileReader,l=(i.readAsDataURL(n),window.URL||window.webkitURL),r=new Image;r.src=l.createObjectURL(n),i.onload=function(e){this.setState({postVal:i.result,file:n,width:r.width}),r.onload=function(e){var i=this.width,l=this.height;408==i&&408==l&&"png"==a&&n.size<=512e3?t.style.visibility="visible":"png"!=a?(alert("png \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):n.size>=512e3?(alert("\uc6a9\ub7c9\uc774 \ub108\ubb34 \ud07d\ub2c8\ub2e4 \u3160\u3160"),t.style.visibility="hidden"):408!=i&&408!=l?(alert("408px * 408px \uc0ac\uc774\uc988\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):t.style.visibility="hidden"}}.bind(this)}},{key:"appendData_gif",value:function(){alert("gdgd"),""!=this.state.postVal&&this.displayData_gif.push(i.a.createElement("div",{id:"display-data"},i.a.createElement("img",{src:this.state.postVal,id:"image"}))),this.setState({showdata2:this.displayData_gif,postVal:""})}},{key:"handleChange_gif",value:function(e){alert("gdgd");var t=document.getElementById("meme"),a=document.getElementById("file").value;a=a.slice(a.indexOf(".")+1).toLowerCase();var n=e.target.files[0],i=new FileReader,l=(i.readAsDataURL(n),window.URL||window.webkitURL),r=new Image;r.src=l.createObjectURL(n),i.onload=function(e){this.setState({postVal:i.result,file:n}),r.onload=function(e){var i=this.width,l=this.height;408==i&&408==l&&"gif"==a&&n.size<=512e3?t.style.visibility="visible":"gif"!=a?(alert("gif \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):n.size>=512e3?(alert("\uc6a9\ub7c9\uc774 \ub108\ubb34 \ud07d\ub2c8\ub2e4 \u3160\u3160"),t.style.visibility="hidden"):408!=i&&408!=l?(alert("408px * 408px \uc0ac\uc774\uc988\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):t.style.visibility="hidden"}}.bind(this)}},{key:"click",value:function(){this.setState({showMe:!1,showMe1:!0,color:"#ffffff",colorr:"#f2f2f2"})}},{key:"click2",value:function(){this.setState({showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff"})}},{key:"see_guide",value:function(){window.location.assign("https://studio.stipop.io/howtocreate")}},{key:"submit",value:function(){this.state.counter+1<5&&alert("\ucd5c\uc18c 5\uac1c \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"),this.state.counter+1>30&&alert("\ub4f1\ub85d \uc22b\uc790\ub97c \ub118\uc5b4\uc130\uc2b5\ub2c8\ub2e4!")}},{key:"cancel_upload",value:function(){alert("\uc5c5\ub85c\ub4dc \ucc3d\uc744 \ub2eb\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub2eb\uc73c\uc2dc\uba74 \uc791\uc131\ud55c \ub0b4\uc6a9\uc774 \uc9c0\uc6cc\uc9d1\ub2c8\ub2e4.")}},{key:"render",value:function(){var e=this;return i.a.createElement("main",{className:"image-upload"},i.a.createElement("img",{src:"https://studio.stipop.io/static/images/logo-pink.svg",className:"title"}),i.a.createElement("img",{src:"https://studio.stipop.io/static/images/tag-studio.png",className:"studio"}),i.a.createElement("button",{type:"button",id:"cancle_upload",onClick:function(){return e.cancel_upload()}},"\uc5c5\ub85c\ub4dc \ucde8\uc18c X"),i.a.createElement("div",{className:"page"},i.a.createElement("div",{id:"change_div"},i.a.createElement("div",{style:{background:this.state.color,boxShadow:"9px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"sticker",onClick:function(){return e.click()}},"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4"),i.a.createElement("div",{style:{background:this.state.colorr,boxShadow:"-3px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"move_sticker",onClick:function(){return e.click2()}},"\uc2a4\ud2f0\ucee4")),i.a.createElement("div",{id:"main"},i.a.createElement("div",{id:"info"},i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("td",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984",i.a.createElement("br",null)),i.a.createElement("td",null,i.a.createElement("input",{type:"text",id:"input"}),i.a.createElement("br",null),i.a.createElement("code",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984\uc740 50\uc790 \uc774\ub0b4\uc5ec\uc57c\ud558\uba70 \uae00\uc790\uc640 \uc22b\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),i.a.createElement("tr",null,i.a.createElement("td",null,"\uce90\ub9ad\ud130 \uba85"),i.a.createElement("td",null,i.a.createElement("input",{type:"text",id:"input"}),i.a.createElement("br",null),i.a.createElement("code",null,"\uc601\uc22b\uc790\ub9cc \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc790 \uc774\ub984 \uc4f0\uae30."))),i.a.createElement("tr",null,i.a.createElement("td",null,"\uce74\ud14c\uace0\ub9ac"),i.a.createElement("td",{align:"left",valign:"middle"},i.a.createElement("button",{id:"btn"},"Animation/Cartoon"),i.a.createElement("button",null,"Animals"),i.a.createElement("button",null,"Celebrity"),i.a.createElement("button",null,"Food/Drink"),i.a.createElement("br",null),i.a.createElement("button",{id:"btn"},"Gag"),i.a.createElement("button",null,"Holloween"),i.a.createElement("button",null,"People"),i.a.createElement("button",null,"Pharase"),i.a.createElement("button",null,"Romance"),i.a.createElement("br",null),i.a.createElement("button",{id:"btn"},"Sports"),i.a.createElement("button",null,"Etc."))),i.a.createElement("tr",null,i.a.createElement("td",null,"\ud0a4\uc6cc\ub4dc"),i.a.createElement("td",null,i.a.createElement("input",{type:"text",id:"input"}),i.a.createElement("br",null),i.a.createElement("code",null,"2-5 \uac1c\uc758 \ud0a4\uc6cc\ub4dc\ub97c \uc368\uc8fc\uc138\uc694. \uc27c\ud45c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0a4\uc6cc\ub4dc\ub97c \uad6c\ubd84\ud574\uc8fc\uc138\uc694."))),i.a.createElement("tr",null,i.a.createElement("td",null,"\uc5b8\uc5b4"),i.a.createElement("td",null,i.a.createElement("input",{type:"text",id:"input",list:"language"})),i.a.createElement("datalist",{id:"language"},i.a.createElement("option",{value:"English"}),i.a.createElement("option",{value:"French"}),i.a.createElement("option",{value:"Korean"}),i.a.createElement("option",{value:"Czech"}))))),this.state.showMe?i.a.createElement("div",{id:"UploadSticker"},i.a.createElement("h4",null,"\ud30c\uc77c"),i.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),i.a.createElement("br",null),i.a.createElement("p",null,"PNG, 500kb \uc774\ud558 408 x 408 px, \ucd5c\uc18c 5\uac1c \ucd5c\ub300 30\uac1c \uc2a4\ud2f0\ucee4"),i.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),i.a.createElement("div",{id:"img-box"},i.a.createElement("input",{type:"file",id:"file",onChange:this.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",id:"meme",className:"button",onClick:this.appendData,value:"\ubc84\ud2bc"}),i.a.createElement("div",{id:"show_image"},this.displayData_img)),i.a.createElement("button",{id:"submit",onClick:function(){return e.submit()}},"\uc81c\ucd9c\ud558\uae30")):null,this.state.showMe1?i.a.createElement("div",{id:"UploadGif"},i.a.createElement("h4",null,"\ud30c\uc77c"),i.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),i.a.createElement("br",null),i.a.createElement("p",null,"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4: GIF, 500kb \uc774\ud558, 408 x 408 px"),i.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),i.a.createElement("div",{id:"gif-box"},i.a.createElement("input",{type:"file",id:"file",onChange:this.handleChange_gif}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",id:"meme",className:"button",onClick:this.appendData_gif,value:"\ubc84\ud2bc"}),i.a.createElement("div",{id:"show_image"},this.displayData_gif)),i.a.createElement("button",{id:"submit",onClick:function(){return e.submit()}},"\uc81c\ucd9c\ud558\uae30")):null)))}}]),t}(i.a.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3005dba5.chunk.js.map