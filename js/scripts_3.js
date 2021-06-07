jQuery(document).ready(function($) {		var docContainer      = $('.container-fluid'),		docMainContent    = $('.main'),		docContentSection = docMainContent.find('section');			function docScroll() {				var offsetTop  = docMainContent != 'undefined' ? docMainContent.offset().top : 0,			scrollTop  = $(window).scrollTop(),			docSideBar = $('.sidebar');					if (scrollTop < offsetTop) {			docSideBar.css({top:offsetTop-scrollTop});		} else if (scrollTop >= offsetTop) {			docSideBar.css({top:0});		} else {			docSideBar.css({top:offsetTop});		}	}		window.onload = function() {		(!window.requestAnimationFrame) ? docScroll(): window.requestAnimationFrame(docScroll);	}		$(window).on('scroll', function() {		(!window.requestAnimationFrame) ? docScroll(): window.requestAnimationFrame(docScroll);	});		function docPrependZeros(num, len) {		num = num.toString();		while (num.length < len) {			num = "0"+num;		}		return num;	}		function docGetLength(string) {		return string.toString().length;	}		function docSectionCount() {		return docContentSection.length;	}		function docIsValidHex(hexColor) {		return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColor);	}		$('.container-fluid > .row').prepend('<div class="sidebar col-sm-3 col-md-3 col-xl-2" style="top:'+$('header').outerHeight()+'px" role="nav"><div class="well"><ul class="nav flex-column"></ul></div></div><!-- /.sidebar -->');		$('.container-fluid').before('<div class="push-nav-switch d-block d-sm-none d-md-none d-lg-none d-xl-none">MENU</div><!-- /.sidebar -->');		$(function($) {		docContentSection.each(function(i) {						var docSection        = $(this),				docSecCount       = i+1,				docSecMenu        = docSection.data('menu-name'),				docSecId          = 'section-'+docSecCount,				docSecColorData   = docSection.data('section-color'),				docSecColor       = docSecColorData != undefined && docSecColorData != '' && docIsValidHex(docSecColorData) ? docSecColorData : '#4a4a4a',				docSecContent     = docSection.find('.section-content'),				docSecContentWrap = docSecContent.wrapInner('<div class="section-content-wrap"></div>'),				docSecLength      = docGetLength(docSectionCount()) < 2 ? 2 : docGetLength(docSectionCount()),				iWithZeros        = docPrependZeros(++i, docSecLength);						docSection.attr('id', docSecId);			docSecContentWrap.each(function(index) {				$(this).prepend('<span class="nav-label" style="background-color:'+docSecColor+'">'+iWithZeros+'</span>');			});						docSecContent.css({'border-left':'10px solid '+docSecColor});						var docSecNavId = docSection.attr('id');						if (docSecContent.length > 1) {				docSecContent.append('<div class="back-to-section-nav" style="background-color:'+docSecColor+'"><a class="back-to-sec-nav" href="#'+docSecNavId+'" title="Back to Section Navigation"></a></div>');			}						$('.container-fluid').find('.sidebar .flex-column').append('<li class="nav-item"><a class="nav-link p-2" href="#'+docSecId+'"><span class="nav-label" style="background-color:'+docSecColor+'">'+iWithZeros+'</span>'+docSecMenu+'</a></li>');						/* lets add doc section navigation */			if (docSecContent[0].hasAttribute('data-section-nav-name') && docSecContent.length >= 1) {								docSection.prepend('<div class="section-content doc-section-nav"><div class="section-content-wrap"><span class="nav-label" style="background-color:'+docSecColor+'"></span><h2>'+docSecMenu+'</h2><div class="well section-nav"><h5 class="ml-3 pb-2"><strong>Section Navigation</strong></h5><ol class="nav flex-column"></ol></div></div></div>');								var docSecNav = docSection.find('.doc-section-nav');								docSecNav.find('span.nav-label').text(iWithZeros);				docSecNav.css({'border-left':'10px solid '+docSecColor});				docSecNav.find('.back-to-section-nav').hide();								docSecContent.each(function(j) {					var docSubSection = $(this),						docSubSecCount = j+1,						docSubSecId = 'sec-'+docSecCount+'-subsection-'+docSubSecCount,						docSecNavName = docSubSection.data('section-nav-name');										docSecNav.find('ol.flex-column').append('<li><a href="#'+docSubSecId+'">'+docSecNavName+'</a></li>');					docSubSection.attr('id', docSubSecId);					docSubSection.find('span.nav-label').text(iWithZeros+'.'+(j+1));				});			}						docSection.find('.section-content').append('<div class="back-to-top" style="background-color:'+docSecColor+'"><a href="#overview" title="Back to Top">TOP</a></div>');					});	});		$(function($) {		$('.nav a, .nav li a, .pull-right a, .back-to-section-nav a, .back-to-top a, .to-top a, .doc-link').bind('click', function(e) {			var c = $(this).attr('href');			$('html, body').stop().animate({				scrollTop: $(c).offset().top - 0			}, {				duration: 1200,				easing: 'easeInOutExpo'			});			e.preventDefault();		});	});		var theSidebar = document.querySelector('.sidebar');	SimpleScrollbar.initEl(theSidebar);		$(function(){		var date = new Date();		$('.yr-cr').html(date.getFullYear().toString());	});		$(function(){		$('.footer-wrapper').append($('.links').clone());	});		$('pre code').each(function(i, block) {		hljs.highlightBlock(block);	});	});jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});