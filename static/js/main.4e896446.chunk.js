(window["webpackJsonpreact-imageupload"]=window["webpackJsonpreact-imageupload"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),r=a.n(i),o=(a(14),a(4)),c=a(5),d=a(7),s=a(6),u=a(1),m=a(8),p=(a(15),function(e){function t(){var e;Object(o.a)(this,t);return(e=Object(d.a)(this,Object(s.a)(t).call(this))).displayData_img=[],e.displayData_gif=[],e.state={showdata:e.displayData_img,showdata2:e.displayData_gif,width:0,postVal:"",showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff",counter:0,file:""},e.appendData=e.appendData.bind(Object(u.a)(e)),e.appendData_gif=e.appendData_gif.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleChange_gif=e.handleChange_gif.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"appendData",value:function(){""!=this.state.postVal&&this.displayData_img.push(l.a.createElement("div",{id:"display-data"},l.a.createElement("img",{src:this.state.postVal,id:"image"}))),this.setState({showdata:this.displayData,postVal:""})}},{key:"handleChange",value:function(e){var t=document.getElementById("meme"),a=document.getElementById("file").value;a=a.slice(a.indexOf(".")+1).toLowerCase();var n=e.target.files[0],l=new FileReader,i=(l.readAsDataURL(n),window.URL||window.webkitURL),r=new Image;r.src=i.createObjectURL(n),l.onload=function(e){this.setState({postVal:l.result,file:n,width:r.width}),console.log(this.state.postVal),r.onload=function(e){var l=this.width,i=this.height;408==l&&408==i&&"png"==a&&n.size<=512e3?t.style.visibility="visible":"png"!=a?(alert("png \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):n.size>=512e3?(alert("\uc6a9\ub7c9\uc774 \ub108\ubb34 \ud07d\ub2c8\ub2e4 \u3160\u3160"),t.style.visibility="hidden"):408!=l&&408!=i?(alert("408px * 408px \uc0ac\uc774\uc988\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4!"),t.style.visibility="hidden"):t.style.visibility="hidden"}}.bind(this)}},{key:"appendData_gif",value:function(){""!=this.state.postVal&&this.displayData_gif.push(l.a.createElement("div",{id:"display-data"},l.a.createElement("img",{src:this.state.postVal,id:"image"}))),this.setState({showdata2:this.displayData_gif,postVal:""})}},{key:"handleChange_gif",value:function(e){document.getElementById("meme");var t=document.getElementById("file").value;t=t.slice(t.indexOf(".")+1).toLowerCase();var a=e.target.files[0],n=new FileReader,l=(n.readAsDataURL(a),window.URL||window.webkitURL),i=new Image;i.src=l.createObjectURL(a),n.onload=function(e){this.setState({postVal:n.result,file:a}),i.onload=function(e){this.width,this.height}}.bind(this)}},{key:"click",value:function(){this.setState({showMe:!1,showMe1:!0,color:"#ffffff",colorr:"#f2f2f2"})}},{key:"click2",value:function(){this.setState({showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff"})}},{key:"see_guide",value:function(){window.location.assign("https://studio.stipop.io/howtocreate")}},{key:"submit",value:function(){this.state.counter+1<5&&alert("\ucd5c\uc18c 5\uac1c \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"),this.state.counter+1>30&&alert("\ub4f1\ub85d \uc22b\uc790\ub97c \ub118\uc5b4\uc130\uc2b5\ub2c8\ub2e4!")}},{key:"cancel_upload",value:function(){alert("\uc5c5\ub85c\ub4dc \ucc3d\uc744 \ub2eb\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub2eb\uc73c\uc2dc\uba74 \uc791\uc131\ud55c \ub0b4\uc6a9\uc774 \uc9c0\uc6cc\uc9d1\ub2c8\ub2e4.")}},{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"image-upload"},l.a.createElement("div",{className:"page"},l.a.createElement("div",{id:"change_div"},l.a.createElement("div",{style:{background:this.state.color,boxShadow:"9px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"sticker",onClick:function(){return e.click()}},"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4"),l.a.createElement("div",{style:{background:this.state.colorr,boxShadow:"-3px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"move_sticker",onClick:function(){return e.click2()}},"\uc2a4\ud2f0\ucee4")),l.a.createElement("div",{id:"main"},l.a.createElement("div",{id:"info"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984",l.a.createElement("br",null)),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984\uc740 50\uc790 \uc774\ub0b4\uc5ec\uc57c\ud558\uba70 \uae00\uc790\uc640 \uc22b\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uce90\ub9ad\ud130 \uba85"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"\uc601\uc22b\uc790\ub9cc \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc790 \uc774\ub984 \uc4f0\uae30."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("td",{align:"left",valign:"middle"},l.a.createElement("button",{id:"btn"},"Animation/Cartoon"),l.a.createElement("button",null,"Animals"),l.a.createElement("button",null,"Celebrity"),l.a.createElement("button",null,"Food/Drink"),l.a.createElement("br",null),l.a.createElement("button",{id:"btn"},"Gag"),l.a.createElement("button",null,"Holloween"),l.a.createElement("button",null,"People"),l.a.createElement("button",null,"Pharase"),l.a.createElement("button",null,"Romance"),l.a.createElement("br",null),l.a.createElement("button",{id:"btn"},"Sports"),l.a.createElement("button",null,"Etc."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0a4\uc6cc\ub4dc"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"2-5 \uac1c\uc758 \ud0a4\uc6cc\ub4dc\ub97c \uc368\uc8fc\uc138\uc694. \uc27c\ud45c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0a4\uc6cc\ub4dc\ub97c \uad6c\ubd84\ud574\uc8fc\uc138\uc694."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uc5b8\uc5b4"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input",list:"language"})),l.a.createElement("datalist",{id:"language"},l.a.createElement("option",{value:"English"}),l.a.createElement("option",{value:"French"}),l.a.createElement("option",{value:"Korean"}),l.a.createElement("option",{value:"Czech"}))))),this.state.showMe?l.a.createElement("div",{id:"UploadSticker"},l.a.createElement("h4",null,"\ud30c\uc77c"),l.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),l.a.createElement("br",null),l.a.createElement("p",null,"PNG, 500kb \uc774\ud558 408 x 408 px, \ucd5c\uc18c 5\uac1c \ucd5c\ub300 30\uac1c \uc2a4\ud2f0\ucee4"),l.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),l.a.createElement("div",{id:"img-box"},l.a.createElement("input",{type:"file",id:"file",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",id:"meme",onClick:this.appendData,value:"\ud074\ub9ad"}),l.a.createElement("div",{id:"show_image"},this.displayData_img)),l.a.createElement("button",{id:"submit",onClick:function(){return e.submit()}},"\uc81c\ucd9c\ud558\uae30")):null,this.state.showMe1?l.a.createElement("div",{id:"UploadGif"},l.a.createElement("h4",null,"\ud30c\uc77c"),l.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),l.a.createElement("br",null),l.a.createElement("p",null,"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4: GIF, 500kb \uc774\ud558, 408 x 408 px"),l.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),l.a.createElement("div",{id:"gif-box"},l.a.createElement("input",{type:"file",id:"file",onChange:this.handleChange_gif}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",id:"meme",className:"button",onClick:this.appendData_gif,value:"\ud074\ub9ad"}),l.a.createElement("div",{id:"show_image"},this.displayData_gif)),l.a.createElement("button",{id:"submit",onClick:function(){return e.submit()}},"\uc81c\ucd9c\ud558\uae30")):null)))}}]),t}(l.a.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4e896446.chunk.js.map