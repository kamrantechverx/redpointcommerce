/*! RateIt | v1.0.21 / 03/16/2014 | https://rateit.codeplex.com/license
    http://rateit.codeplex.com | Twitter: @gjunge
*/

(function(n){function t(n){var u=n.originalEvent.changedTouches,t=u[0],i="",r;switch(n.type){case"touchmove":i="mousemove";break;case"touchend":i="mouseup";break;default:return}r=document.createEvent("MouseEvent");r.initMouseEvent(i,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null);t.target.dispatchEvent(r);n.preventDefault()}n.rateit={aria:{resetLabel:"reset rating",ratingLabel:"rating"}};n.fn.rateit=function(i,r){var e=1,u={},o="init",s=function(n){return n.charAt(0).toUpperCase()+n.substr(1)},f;if(this.length===0)return this;if(f=n.type(i),f=="object"||i===undefined||i===null)u=n.extend({},n.fn.rateit.defaults,i);else{if(f=="string"&&i!=="reset"&&r===undefined)return this.data("rateit"+s(i));f=="string"&&(o="setvalue")}return this.each(function(){var c=n(this),f=function(n,t){if(t!=null){var i="aria-value"+(n=="value"?"now":n),r=c.find(".rateit-range");r.attr(i)!=undefined&&r.attr(i,t)}return arguments[0]="rateit"+s(n),c.data.apply(c,arguments)},p,w,v,h,b,g,nt,l,y,k,a;if(i=="reset"){p=f("init");for(w in p)c.data(w,p[w]);f("backingfld")&&(h=n(f("backingfld")),h.val(f("value")),h.trigger("change"),h[0].min&&(h[0].min=f("min")),h[0].max&&(h[0].max=f("max")),h[0].step&&(h[0].step=f("step")));c.trigger("reset")}if(c.hasClass("rateit")||c.addClass("rateit"),v=c.css("direction")!="rtl",o=="setvalue"){if(!f("init"))throw"Can't set value before init";i!="readonly"||r!=!0||f("readonly")||(c.find(".rateit-range").unbind(),f("wired",!1));i=="value"&&(r=r==null?f("min"):Math.max(f("min"),Math.min(f("max"),r)));f("backingfld")&&(h=n(f("backingfld")),i=="value"&&h.val(r),i=="min"&&h[0].min&&(h[0].min=r),i=="max"&&h[0].max&&(h[0].max=r),i=="step"&&h[0].step&&(h[0].step=r));f(i,r)}f("init")||(f("min",isNaN(f("min"))?u.min:f("min")),f("max",isNaN(f("max"))?u.max:f("max")),f("step",f("step")||u.step),f("readonly",f("readonly")!==undefined?f("readonly"):u.readonly),f("resetable",f("resetable")!==undefined?f("resetable"):u.resetable),f("backingfld",f("backingfld")||u.backingfld),f("starwidth",f("starwidth")||u.starwidth),f("starheight",f("starheight")||u.starheight),f("value",Math.max(f("min"),Math.min(f("max"),isNaN(f("value"))?isNaN(u.value)?u.min:u.value:f("value")))),f("ispreset",f("ispreset")!==undefined?f("ispreset"):u.ispreset),f("backingfld")&&(h=n(f("backingfld")).hide(),(h.attr("disabled")||h.attr("readonly"))&&f("readonly",!0),h[0].nodeName=="INPUT"&&(h[0].type=="range"||h[0].type=="text")&&(f("min",parseInt(h.attr("min"))||f("min")),f("max",parseInt(h.attr("max"))||f("max")),f("step",parseInt(h.attr("step"))||f("step"))),h[0].nodeName=="SELECT"&&h[0].options.length>1?(f("min",isNaN(f("min"))?Number(h[0].options[0].value):f("min")),f("max",Number(h[0].options[h[0].length-1].value)),f("step",Number(h[0].options[1].value)-Number(h[0].options[0].value)),b=h.find("option[selected]"),b.length==1&&f("value",b.val())):f("value",h.val())),g=c[0].nodeName=="DIV"?"div":"span",e++,nt='<button id="rateit-reset-{{index}}" data-role="none" class="rateit-reset" aria-label="'+n.rateit.aria.resetLabel+'" aria-controls="rateit-range-{{index}}"><\/button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="'+n.rateit.aria.ratingLabel+'" aria-owns="rateit-reset-{{index}}" aria-valuemin="'+f("min")+'" aria-valuemax="'+f("max")+'" aria-valuenow="'+f("value")+'"><{{element}} class="rateit-selected" style="height:'+f("starheight")+'px"><\/{{element}}><{{element}} class="rateit-hover" style="height:'+f("starheight")+'px"><\/{{element}}><\/{{element}}>',c.append(nt.replace(/{{index}}/gi,e).replace(/{{element}}/gi,g)),v||(c.find(".rateit-reset").css("float","right"),c.find(".rateit-selected").addClass("rateit-selected-rtl"),c.find(".rateit-hover").addClass("rateit-hover-rtl")),f("init",JSON.parse(JSON.stringify(c.data()))));c.find(".rateit-selected, .rateit-hover").height(f("starheight"));l=c.find(".rateit-range");l.width(f("starwidth")*(f("max")-f("min"))).height(f("starheight"));y="rateit-preset"+(v?"":"-rtl");f("ispreset")?c.find(".rateit-selected").addClass(y):c.find(".rateit-selected").removeClass(y);f("value")!=null&&(k=(f("value")-f("min"))*f("starwidth"),c.find(".rateit-selected").width(k));a=c.find(".rateit-reset");a.data("wired")!==!0&&a.bind("click",function(t){t.preventDefault();a.blur();var i=n.Event("beforereset");if(c.trigger(i),i.isDefaultPrevented())return!1;c.rateit("value",null);c.trigger("reset")}).data("wired",!0);var tt=function(t,i){var u=i.changedTouches?i.changedTouches[0].pageX:i.pageX,r=u-n(t).offset().left;return v||(r=l.width()-r),r>l.width()&&(r=l.width()),r<0&&(r=0),k=Math.ceil(r/f("starwidth")*(1/f("step")))},it=function(n){var t=n*f("starwidth")*f("step"),r=l.find(".rateit-hover"),i;r.data("width")!=t&&(l.find(".rateit-selected").hide(),r.width(t).show().data("width",t),i=[n*f("step")+f("min")],c.trigger("hover",i).trigger("over",i))},d=function(t){var i=n.Event("beforerated");return(c.trigger(i,[t]),i.isDefaultPrevented())?!1:(f("value",t),f("backingfld")&&n(f("backingfld")).val(t).trigger("change"),f("ispreset")&&(l.find(".rateit-selected").removeClass(y),f("ispreset",!1)),l.find(".rateit-hover").hide(),l.find(".rateit-selected").width(t*f("starwidth")-f("min")*f("starwidth")).show(),c.trigger("hover",[null]).trigger("over",[null]).trigger("rated",[t]),!0)};f("readonly")?a.hide():(f("resetable")||a.hide(),f("wired")||(l.bind("touchmove touchend",t),l.mousemove(function(n){var t=tt(this,n);it(t)}),l.mouseleave(function(){l.find(".rateit-hover").hide().width(0).data("width","");c.trigger("hover",[null]).trigger("over",[null]);l.find(".rateit-selected").show()}),l.mouseup(function(n){var t=tt(this,n),i=t*f("step")+f("min");d(i);l.blur()}),l.keyup(function(n){(n.which==38||n.which==(v?39:37))&&d(Math.min(f("value")+f("step"),f("max")));(n.which==40||n.which==(v?37:39))&&d(Math.max(f("value")-f("step"),f("min")))}),f("wired",!0)),f("resetable")&&a.show());l.attr("aria-readonly",f("readonly"))})};n.fn.rateit.defaults={min:0,max:5,step:.5,starwidth:16,starheight:16,readonly:!1,resetable:!0,ispreset:!1};n(function(){n("div.rateit, span.rateit").rateit()})})(jQuery);
/*
//# sourceMappingURL=jquery.rateit.min.js.map
*/
;
