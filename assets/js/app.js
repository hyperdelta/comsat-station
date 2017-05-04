function loadJS(jsFiles,pageScript){for(i=0;i<jsFiles.length;i++){var body=document.getElementsByTagName("body")[0],script=document.createElement("script");script.type="text/javascript",script.async=!1,script.src=jsFiles[i],body.appendChild(script)}if(pageScript){var body=document.getElementsByTagName("body")[0],script=document.createElement("script");script.type="text/javascript",script.async=!1,script.src=pageScript,body.appendChild(script)}init()}function loadCSS(cssFile,end,callback){if(cssArray[cssFile])callback&&callback();else if(cssArray[cssFile]=!0,1==end){var head=document.getElementsByTagName("head")[0],s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",cssFile),s.onload=callback,head.appendChild(s)}else{var head=document.getElementsByTagName("head")[0],style=document.getElementById("management-style"),s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",cssFile),s.onload=callback,head.insertBefore(s,style)}}function setUpUrl(url){$(".nav li .nav-link").removeClass("active"),$(".nav li.nav-dropdown").removeClass("open"),$('.nav li:has(a[href="'+url+'"])').addClass("open"),$('.nav a[href="'+url+'"]').addClass("active"),loadPage(url)}function loadPage(url){$.ajax({type:"GET",url:$.subPagesDirectory+url,dataType:"html",cache:!1,async:!1,beforeSend:function(){$.mainContent.css({opacity:0})},success:function(){Pace.restart(),$("html, body").animate({scrollTop:0},0),$.mainContent.load($.subPagesDirectory+url,null,function(responseText){window.location.hash=url}).delay(250).animate({opacity:1},0)},error:function(){window.location.href=$.page404}})}function capitalizeFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1)}function init(url){$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({placement:"bottom",delay:{show:400,hide:200}}),$('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover()}function navigationSmartResize(e){if($("body").hasClass("sidebar-nav")&&$("body").hasClass("fixed-nav")){var bodyHeight=$(window).height(),headerHeight=$("header").outerHeight();$("body").hasClass("sidebar-off-canvas")?$("nav.sidebar-nav").css("height",bodyHeight):$("nav.sidebar-nav").css("height",bodyHeight-headerHeight)}}$.ajaxLoad=!1,$.defaultPage="main.html",$.subPagesDirectory="views/",$.page404="views/pages/404.html",$.mainContent=$("#ui-view"),$.navigation=$("nav > ul.nav"),$.dynamicTitle=!0,$.dynamicBreadcrumb=!0,$.panelIconOpened="icon-arrow-up",$.panelIconClosed="icon-arrow-down",$.brandPrimary="#20a8d8",$.brandSuccess="#4dbd74",$.brandInfo="#63c2de",$.brandWarning="#f8cb00",$.brandDanger="#f86c6b",$.grayDark="#2a2c36",$.gray="#55595c",$.grayLight="#818a91",$.grayLighter="#d1d4d7",$.grayLightest="#f8f9fa";var cssArray={};$.ajaxLoad&&(paceOptions={elements:!1,restartOnRequestAfter:!1},url=location.hash.replace(/^#/,""),setUpUrl(""!=url?url:$.defaultPage),$(document).on("click",'.nav a[href!="#"]',function(e){if($(this).parent().parent().hasClass("nav-tabs")||$(this).parent().parent().hasClass("nav-pills"))e.preventDefault();else if("_top"==$(this).attr("target"))e.preventDefault(),$this=$(e.currentTarget),window.location=$this.attr("href");else if("_blank"==$(this).attr("target"))e.preventDefault(),$this=$(e.currentTarget),window.open($this.attr("href"));else{e.preventDefault();var target=$(e.currentTarget);setUpUrl(target.attr("href"))}}),$(document).on("click",'a[href="#"]',function(e){e.preventDefault()})),$(document).ready(function($){function resizeBroadcast(){var timesRun=0,interval=setInterval(function(){timesRun+=1,5===timesRun&&clearInterval(interval),window.dispatchEvent(new Event("resize"))},62.5)}navigationSmartResize(),$.navigation.find("a").each(function(){var cUrl=String(window.location);"#"==cUrl.substr(cUrl.length-1)&&(cUrl=cUrl.slice(0,-1)),$($(this))[0].href==cUrl&&($(this).addClass("active"),$(this).parents("ul").add(this).each(function(){$(this).parent().addClass("open")}))}),$.navigation.on("click","a",function(e){$.ajaxLoad&&e.preventDefault(),$(this).hasClass("nav-dropdown-toggle")&&$(this).parent().toggleClass("open")}),$(".navbar-toggler").click(function(){var bodyClass=localStorage.getItem("body-class");$(this).hasClass("layout-toggler")&&$("body").hasClass("sidebar-off-canvas")?($("body").toggleClass("sidebar-opened").parent().toggleClass("sidebar-opened"),resizeBroadcast()):$(this).hasClass("layout-toggler")&&($("body").hasClass("sidebar-nav")||"sidebar-nav"==bodyClass)?($("body").toggleClass("sidebar-nav"),localStorage.setItem("body-class","sidebar-nav"),"sidebar-nav"==bodyClass&&localStorage.clear(),resizeBroadcast()):$("body").toggleClass("mobile-open")}),$(".aside-toggle").click(function(){$("body").toggleClass("aside-menu-open"),resizeBroadcast()}),$(".sidebar-close").click(function(){$("body").toggleClass("sidebar-opened").parent().toggleClass("sidebar-opened")}),$('a[href="#"][data-top!=true]').click(function(e){e.preventDefault()})}),$(document).on("click",".card-actions a",function(e){if(e.preventDefault(),$(this).hasClass("btn-close"))$(this).parent().parent().parent().fadeOut();else if($(this).hasClass("btn-minimize")){$(this).parent().parent().next(".card-block");$(this).hasClass("collapsed")?$("i",$(this)).removeClass($.panelIconClosed).addClass($.panelIconOpened):$("i",$(this)).removeClass($.panelIconOpened).addClass($.panelIconClosed)}else $(this).hasClass("btn-setting")&&$("#myModal").modal("show")}),$(window).bind("resize",navigationSmartResize);