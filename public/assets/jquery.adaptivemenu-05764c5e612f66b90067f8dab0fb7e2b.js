jQuery.fn.AdaptiveMenu=function(e){var e=jQuery.extend({text:"More...",accuracy:70,"class":null,classLinckMore:null},e),i=this,n=$(i).find("li"),l=0,t=[];$.each(n,function(e,i){l+=$(i).width(),t.push(l)});var o=function(l){for(var l=l-e.accuracy,o=0;o<t.length;o++)t[o]>l?$(n[o]).hide():$(n[o]).show();$(i).find("#more").remove();var r=$(n).filter(":not(:visible)"),s=$(n).filter(":visible").last();if(r.length>0){var a=$("<li>").css({display:"inline-block","white-space":"nowrap"}).addClass(e.classLinckMore).attr({id:"more"}).html(e.text).click(function(){$(this).find("li").toggle()}),c=$("<ul>").css({position:"absolute"}).addClass(e.klass).html(r.clone()).prepend(s.clone().hide());a.append(c),s.hide().before(a)}};jQuery(window).resize(function(){o(jQuery(window).width())}),jQuery(window).ready(function(){o(jQuery(window).width())})};