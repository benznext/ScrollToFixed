(function(a){a.isScrollToFixed=function(b){return a(b).data("ScrollToFixed")!==undefined};a.ScrollToFixed=function(d,h){var k=this;k.$el=a(d);k.el=d;k.$el.data("ScrollToFixed",k);var c=false;var D=k.$el;var E;var B;var A=0;var p=0;var i=-1;var e=-1;var r=null;var w;var f;function s(){D.trigger("preUnfixed.ScrollToFixed");j();D.trigger("unfixed.ScrollToFixed");e=-1;A=D.offset().top;p=D.offset().left;if(k.options.offsets){p+=(D.offset().left-D.position().left)}if(i==-1){i=p}E=D.css("position");c=true;if(k.options.bottom!=-1){D.trigger("preFixed.ScrollToFixed");u();D.trigger("fixed.ScrollToFixed")}}function m(){var F=k.options.limit;if(!F){return 0}if(typeof(F)==="function"){return F()}return F}function o(){return E==="fixed"}function v(){return E==="absolute"}function g(){return !(o()||v())}function u(){if(!o()){r.css({display:D.css("display"),width:D.outerWidth(true),height:D.outerHeight(true),"float":D.css("float")});D.css({width:D.width(),position:"fixed",top:k.options.bottom==-1?q():"",bottom:k.options.bottom==-1?"":k.options.bottom,"margin-left":"0px"});if(k.options.className){D.addClass(k.options.className)}E="fixed"}}function b(){D.css({width:D.width(),position:"absolute",top:m(),left:p,"margin-left":"0px",bottom:""});E="absolute"}function j(){if(!g()){e=-1;r.css("display","none");D.css({width:"",position:"",left:"",top:"","margin-left":""});if(k.options.className){D.removeClass(k.options.className)}E=null}}function t(F){if(F!=e){D.css("left",p-F);e=F}}function q(){return k.options.marginTop}function x(){if(!a.isScrollToFixed(D)){return}var H=c;if(!c){s()}var F=a(window).scrollLeft();var I=a(window).scrollTop();var G=m();if(k.options.minWidth&&a(window).width()<k.options.minWidth){if(!g()||!H){n();D.trigger("preUnfixed.ScrollToFixed");j();D.trigger("unfixed.ScrollToFixed")}}else{if(k.options.bottom==-1){if(G>0&&I>=G-q()){if(!v()||!H){n();D.trigger("preAbsolute.ScrollToFixed");b();D.trigger("unfixed.ScrollToFixed")}}else{if(I>=A-q()){if(!o()||!H){n();D.trigger("preFixed.ScrollToFixed");u();e=-1;D.trigger("fixed.ScrollToFixed")}t(F)}else{if(!g()||!H){n();D.trigger("preUnfixed.ScrollToFixed");j();D.trigger("unfixed.ScrollToFixed")}}}}else{if(G>0){if(I+a(window).height()-D.outerHeight(true)>=G-(q()||-l())){if(o()){n();D.trigger("preUnfixed.ScrollToFixed");if(B==="absolute"){b()}else{j()}D.trigger("unfixed.ScrollToFixed")}}else{if(!o()){n();D.trigger("preFixed.ScrollToFixed");u()}t(F);D.trigger("fixed.ScrollToFixed")}}else{t(F)}}}}function l(){if(!k.options.bottom){return 0}return k.options.bottom}function n(){var F=D.css("position");if(F=="absolute"){D.trigger("postAbsolute.ScrollToFixed")}else{if(F=="fixed"){D.trigger("postFixed.ScrollToFixed")}else{D.trigger("postUnfixed.ScrollToFixed")}}}var z=function(F){if(D.is(":visible")){c=false;x()}};var C=function(F){x()};var y=function(){var G=document.body;if(document.createElement&&G&&G.appendChild&&G.removeChild){var I=document.createElement("div");if(!I.getBoundingClientRect){return null}I.innerHTML="x";I.style.cssText="position:fixed;top:100px;";G.appendChild(I);var J=G.style.height,K=G.scrollTop;G.style.height="3000px";G.scrollTop=500;var F=I.getBoundingClientRect().top;G.style.height=J;var H=(F===100);G.removeChild(I);G.scrollTop=K;return H}return null};k.init=function(){k.options=a.extend({},a.ScrollToFixed.defaultOptions,h);if(!k.options||!k.options.checkForPositionFixedSupport){var F=y();if(!F){return}}k.$el.css("z-index",k.options.zIndex);r=a("<div />");E=D.css("position");B=D.css("position");if(g()){k.$el.after(r)}a(window).bind("resize.ScrollToFixed",z);a(window).bind("scroll.ScrollToFixed",C);if(k.options.preFixed){D.bind("preFixed.ScrollToFixed",k.options.preFixed)}if(k.options.postFixed){D.bind("postFixed.ScrollToFixed",k.options.postFixed)}if(k.options.preUnfixed){D.bind("preUnfixed.ScrollToFixed",k.options.preUnfixed)}if(k.options.postUnfixed){D.bind("postUnfixed.ScrollToFixed",k.options.postUnfixed)}if(k.options.preAbsolute){D.bind("preAbsolute.ScrollToFixed",k.options.preAbsolute)}if(k.options.postAbsolute){D.bind("postAbsolute.ScrollToFixed",k.options.postAbsolute)}if(k.options.fixed){D.bind("fixed.ScrollToFixed",k.options.fixed)}if(k.options.unfixed){D.bind("unfixed.ScrollToFixed",k.options.unfixed)}if(k.options.spacerClass){r.addClass(k.options.spacerClass)}D.bind("resize.ScrollToFixed",function(){r.height(D.height())});D.bind("scroll.ScrollToFixed",function(){D.trigger("preUnfixed.ScrollToFixed");j();D.trigger("unfixed.ScrollToFixed");x()});D.bind("remove.ScrollToFixed",function(){D.trigger("preUnfixed.ScrollToFixed");j();D.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",z);a(window).unbind("scroll.ScrollToFixed",C);D.unbind(".ScrollToFixed");k.$el.removeData("ScrollToFixed")});z()};k.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);