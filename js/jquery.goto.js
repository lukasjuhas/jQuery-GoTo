/**
 * jQuery GoTo
 */
(function ( $ ) {
	$.fn.gotothis = function() { 

		var testParams = parseURLParams($(location).attr('href'));
		//do check for undefined to prevent js errors
		if(testParams != undefined) {
			//check if "goto" param exists 
			if(testParams['goto']) {
				//if yes, set vars.
				var locationID = testParams['goto'];
				//value of our param as id of the element
				var IDselector = $('#'+locationID);
				// find our element in the document
				element = $(document).find(IDselector);
				//if found
				if(element.length) {
					// animate to the element
					 $('html, body').animate({
				        scrollTop: $(element).offset().top
				    }, 2000);
				} else {
					//no element found
					return false;
				}
			} else {
				return false;
			};
		};

	}
}( jQuery ));

(function ( $ ) {
	$.fn.gotothis = function( options ) { 

		var settings = $.extend({
			// These are the defaults.
			color: "#556b2f",
			backgroundColor: "white"
		}, options );

		return this;
	};

}( jQuery ));	

/**
 * parse URL Params
 * @author Lukas Juhas
 * @version 1.0
 * @package jQuery GoTo
 * @since   2015-01-22
 * @param   {[type]}   url [description]
 * @return  {[type]}       [description]
 */
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
