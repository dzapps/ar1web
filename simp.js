var DesignDevta_Site = &quot;http://www.ar1web.co&quot;;
var DesignDevta_Credits = &quot;تصميم <a href='http://www.ar1web.co' id='credit-ar1web'>عرب ويب</a>&quot;;
var DD_Encryption=[&quot;\x30\x2E\x36\x3D\x39\x28\x29\x7B\x61\x20\x65\x3D\x34\x2E\x35\x28\x22\x64\x22\x29\x3B\x37\x3D\x3D\x65\x26\x26\x28\x30\x2E\x38\x2E\x31\x3D\x32\x29\x2C\x65\x2E\x62\x28\x22\x31\x22\x2C\x32\x29\x2C\x65\x2E\x63\x3D\x33\x7D\x3B&quot;,&quot;\x7C&quot;,&quot;\x73\x70\x6C\x69\x74&quot;,&quot;\x77\x69\x6E\x64\x6F\x77\x7C\x68\x72\x65\x66\x7C\x44\x65\x73\x69\x67\x6E\x44\x65\x76\x74\x61\x5F\x53\x69\x74\x65\x7C\x44\x65\x73\x69\x67\x6E\x44\x65\x76\x74\x61\x5F\x43\x72\x65\x64\x69\x74\x73\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x6F\x6E\x6C\x6F\x61\x64\x7C\x6E\x75\x6C\x6C\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x44\x44\x5F\x45\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x7C&quot;,&quot;\x72\x65\x70\x6C\x61\x63\x65&quot;,&quot;&quot;,&quot;\x5C\x77\x2B&quot;,&quot;\x5C\x62&quot;,&quot;\x67&quot;];
eval(function(_0x6600x1,_0x6600x2,_0x6600x3,_0x6600x4,_0x6600x5,_0x6600x6){_0x6600x5=function(_0x6600x3){return _0x6600x3.toString(_0x6600x2)};if(!DD_Encryption[5][DD_Encryption[4]](/^/,String)){while(_0x6600x3--){_0x6600x6[_0x6600x5(_0x6600x3)]=_0x6600x4[_0x6600x3]||_0x6600x5(_0x6600x3)};_0x6600x4=[function(_0x6600x5){return _0x6600x6[_0x6600x5]}];_0x6600x5=function(){return DD_Encryption[6]};_0x6600x3=1;};while(_0x6600x3--){if(_0x6600x4[_0x6600x3]){_0x6600x1=_0x6600x1[DD_Encryption[4]]( new RegExp(DD_Encryption[7]+_0x6600x5(_0x6600x3)+DD_Encryption[7],DD_Encryption[8]),_0x6600x4[_0x6600x3])}};return _0x6600x1;}(DD_Encryption[0],15,15,DD_Encryption[3][DD_Encryption[2]](DD_Encryption[1]),0,{}));
var loriga = document.getElementById(&#39;ar1web-posts&#39;);
var hussam = document.getElementById(&#39;ar1web-post&#39;);
hussam.innerHTML = loriga.innerHTML;
var randomRelatedIndex,startRelated;!function(a,b,c){var d={callBack:function(){}};for(var e in relatedSettings)d[e]="undefined"==relatedSettings[e]?d[e]:relatedSettings[e];var f=function(a){var d=b.createElement("script");d.type="text/javascript",d.src=a,c.appendChild(d)},g=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},h=function(a){var c,d,b=a.length;if(0===b)return!1;for(;--b;)c=Math.floor(Math.random()*(b+1)),d=a[b],a[b]=a[c],a[c]=d;return a},i="object"==typeof labelArray&&labelArray.length>0?"/-/"+h(labelArray)[0]:"",j=function(a){var b=a.feed.openSearch$totalResults.$t-d.relatedPosts,c=g(1,b>0?b:1);f(d.blogURL.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+c+"&max-results="+d.relatedPosts+"&callback=startRelated")},k=function(a){var l,m,n,o,p,q,b=document.getElementById("related-posts-widget"),c=h(a.feed.entry),e=d.relatedStyle,f=d.relatedHeading+'<ul class="related-posts-'+e+'">',g=d.openNewTab?' target="_blank"':"",i=d.centerText?"text-align:center;":"",j=d.roundThumbs?"-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;":"",k='<span style="display:block;clear:both;"></span>';if(b){for(var r=0;r<d.relatedPosts&&r!=c.length;r++){n=c[r].title.$t,o="auto"!==d.titleLength&&d.titleLength<n.length?n.substring(0,d.titleLength)+"&hellip;":n,p="media$thumbnail"in c[r]&&d.thumbnailSize!==!1?c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/"+d.thumbnailSize):d.defaultThumb,l=h(c[r].published.$t);for(var s=[1,2,3,4,5,6,7,8,9,10,11,12],t=["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],u=l.split("-")[2].substring(0,2),v=l.split("-")[1],w=l.split("-")[0],x=0;x<s.length;x++)if(parseInt(v)==s[x]){v=t[x];break}postdate=v+" "+u+" "+w,q="summary"in c[r]&&d.snippetLength>0?c[r].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.snippetLength)+"&hellip;":"";for(var y=0,z=c[r].link.length;y<z;y++)m="alternate"==c[r].link[y].rel?c[r].link[y].href:"#";1==e?f+='<li><a href="'+m+'" '+g+">"+o+"</a></li>":2==e?f+='<li><a href="'+m+'" '+g+'><div class="related-title">'+o+'</div></a><div class="related-snippets">'+q+"</div></li>":3==e?f+='<li class="related-post-item" style="'+i+'"><a href="'+m+'" '+g+'><img alt="" class="related-thumb-large" src="'+p+'" style="'+j+'"><div class="related-title">'+o+'</div></a><div class="related-snippets">'+q+"</div></li>":4==e?f+='<li class="related-post-item" style="'+i+'"><a href="'+m+'" '+g+'><img alt="" class="related-thumb-large" src="'+p+'" style="'+j+'"><div class="related-title">'+o+'</div></a><div class="related-date">'+postdate+"</div></li>":5==e?f+='<li class="related-post-item" style="'+i+'"><a href="'+m+'" '+g+'><img alt="" class="related-thumb-large" src="'+p+'" style="'+j+'"><div class="related-title">'+o+"</div></a></li>":6==e?f+='<li class="related-post-item"><a href="'+m+'" '+g+'><img alt="" class="related-thumb-large" src="'+p+'" style="'+j+'"><div class="related-wrapper" style="'+j+'"><div class="related-wrapper-inner"><div class="related-title">'+o+"</div></div></div></a></li>":7==e?f+='<li class="related-post-item"><a href="'+m+'" '+g+'><img alt="" class="related-thumb-large" src="'+p+'" style="'+j+'"></a></li>':8==e?f+='<li class="related-post-item"><a class="related-post-item-wrapper" href="'+m+'" '+g+'><img alt="" class="related-thumb" src="'+p+'" style="'+j+'"><div class="related-title">'+o+'</div></a><div class="related-date">'+postdate+"</div></li>":9==e&&(f+='<li><a href="'+m+'" '+g+'><img alt="" class="related-thumb" src="'+p+'" style="'+j+'"><div class="related-title">'+o+'</div></a><div class="related-snippets">'+q+"</div></li>")}b.innerHTML=f+="</ul>"+k,d.callBack()}};randomRelatedIndex=j,startRelated=k,f(d.blogURL.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);