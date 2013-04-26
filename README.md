jcFacebookLike
==============

A jQuery plugin to create Facebook Like button with Callbacks

<h2>Markup</h2>

<code>
&lt;div id="myDiv">&lt;/div>
</code>

<h2>Usage</h2>

<code>
jQuery(window).load(function(){
    jQuery("#myDiv").jcFacebookLike({href:"http://www.facebook.com/jaspreetchahal.org",
    show_faces:"false",
    applicationId: "123123123123",
    layout:"button_count",
	callbackLike:function(response) {
	    jQuery("#log").append(jQuery("&lt;div>&lt;/div>").html("Liked: "+response));
	},
	callbackUnLike:function(response) {
	    jQuery("#log").append(jQuery("&lt;div>&lt;/div>").html("Un-Liked: "+response +" - &lt;hr>Please think about your decision again. If this plugin could be a help then keep liking my FB page. I have got lot to share :)"));
	}
    });
})
</code>

<h2>License</h2>

MIT

<h2>Donate</h2>

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=MHMQ6E37TYW3N" rel="external nofollow" title="" target="_blank"><img alt="" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif"></a>

<h2>More Help</h2>

http://jaspreetchahal.org/jquery-plugin-to-create-facebook-like-button-with-callabacks-like-and-unlike


You will need Facebook Application ID to make it work. 