/*
 * Facebook Like Unlike jQuery Plugin
 * Copyright 2013, Jaspreet Chahal
 * Free to use under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 * http://jaspreetchahal.org
 * Donate: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MHMQ6E37TYW3N
 */
jQuery.fn.jcFacebookLike = function (settings) {
    settings = jQuery.extend({
        applicationId: "",
        status: true,
        cookie: true,
        send: "false",
        href: window.location.href,
        layout: "standard", // standard | button_count | box_count
        show_faces: "true",
        width: "450",
        font: "lucida grande",
        colorscheme: "light",
        ref: "",
        debug: false,
        callbackLike: function () {
        },
        callbackUnLike: function () {
        }
    }, settings)
    // place fb-root element on the page as described here https://developers.facebook.com/docs/reference/javascript/#fbroot
    if ((jQuery("#fb-root").length == 0)) {
        jQuery('<div id="fb-root" ></div>').appendTo("body");
    }
    ;
    function addAtt(el, att) {
        if (settings[att] && settings[att].length > 0) {
            return el.setAttribute(att, settings[att]);
        }
    }
    var fbInit = false;
    return this.each(function () {
        $el = jQuery(this);
        // now we will create fb:like element
        var fbLike = document.createElement("fb:like");
        addAtt(fbLike, "status");
        addAtt(fbLike, "send");
        addAtt(fbLike, "href");
        addAtt(fbLike, "layout");
        addAtt(fbLike, "show_faces");
        addAtt(fbLike, "width");
        addAtt(fbLike, "font");
        addAtt(fbLike, "colorscheme");
        addAtt(fbLike, "ref");
        $el.append(fbLike);

    // final thing is to make sure that application ID exists
    if (settings.applicationId.length > 0 && !fbInit) {
        window.fbAsyncInit = function () {
            FB.init({
                cookie: true,
                xfbml: true,
                appId: settings.applicationId
            });
            FB.Event.subscribe('edge.create', function (response) {
                settings.callbackLike(response);
                if (settings.debug) {
                    console.log(" -- Liked URL -- ");
                    console.log(response);
                }
            });
            FB.Event.subscribe('edge.remove', function (response) {
                settings.callbackUnLike(response);
                if (settings.debug) {
                    console.log(" -- Unliked URL -- ");
                    console.log(response);
                }
            });
        };
        // add all.js
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=135793783198674";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        fbInit = true;
    }
    });
};