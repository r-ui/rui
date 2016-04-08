+function ($) {

    var defaults = {
        url: null,
        wrap: null,
        headers: {},
        dataType: 'html',
        select: '[data-snippet^="snippet"]'
    };
    // 构造函数
    var Snippet = function(elem, options){
        var self = this;
        defaults.elem = elem;
        this.config = $.extend({}, defaults, options);
        this.isPushState = "pushState" in window.history;

        if(elem.prop("tagName") === 'A') this.config.url = elem.attr('href') || options.url;
        if (!this.config.url || !this.config.wrap) return;

        var snippetRoute = getUrlParam('snippetRoute')

        if(snippetRoute === getHashParam(elem)){
            this.postFilter(elem)
        }

        this.addEvent()

        this.eleMenus = elem.off('click').on("click", function(event) {
            var whref = window.location.href
            var hash = $(this).data('snippet').split('#')[0]
            var query = this.href.split("?")[1];
            
            query = query? (query + '&snippetRoute='+hash) : ('snippetRoute='+hash);
            self.post(elem);
            if (history.pushState) {
                history.pushState(null, null, location.href.split("?")[0] + "?" + query);
            }else{
                self.hashChange()
            }
            return false;
        });
    }

    function getUrlParam (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
        r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    function getHashParam (elem) {
        return elem.data('snippet').split('#')[0]
    }

    Snippet.prototype ={
        addEvent: function(elem) {
            var self = this,
                location = window.location,
                oldHash = location.hash,
                isSupported = ("onhashchange" in window) && (document.documentMode === undefined || document.documentMode > 7);

            //IE 10+, Chrome, FireFox
            if (this.isPushState) {
                $(window).on('popstate', function(){
                    self.postFilter(self.config.elem)
                });
            } else {
                //IE 8, 9
                if (isSupported) {
                    $(window).on('hashchange', function(){ self.postFilter(self.config.elem); });
                } else {
                    //IE 6, 7
                    //检测 Hash 值
                    setInterval(function() {
                        var newHash = location.hash;
                        if (newHash != oldHash) {
                            self.postFilter(self.config.elem);
                            oldHash = newHash;
                        }
                    }, 100);
                }
            }
            return this;
        },
        postFilter:function(elem){
            if(getUrlParam('snippetRoute') === getHashParam(elem)) this.post(elem);
            return this;
        },
        hashChange: function(elem) {
            var url = window.location.href;
            window.location.hash = '#' + url.replace(/^[^#]*#*(.*)$/, '') + this.href;
            return this;
        },
        post: function(elem) {
            var href,$wrap = this.config.wrap;
            
            href = elem.attr('href');

            $.ajax({
                type: 'post',
                headers: $.extend({}, {'embed': '1'}, this.config.headers),
                url: href,
                dataType: this.config.dataType,
                success:function(data){
                    // console.log("message:post:post:234324",$wrap);
                    (data&&$wrap.length>0)&&$wrap.empty().html(data);
                    elem.trigger("snippet.show")
                }
            })
        }
    }

    function Plugin (option){

        return $(defaults.select).each(function(index, el) {
            var $this   = $(this)
            var data    = $this.data('snippet')
            var options = (typeof option == 'object' && option) || {}
            options.wrap = $('#'+data.split('#')[1])

            if(el) new Snippet($this, options)
        });

    }

    $.snippet = Plugin
    $.snippet.Constructor = Snippet
}(jQuery);