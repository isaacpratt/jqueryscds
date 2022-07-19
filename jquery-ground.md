<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js?ver=6.0' id='bootstrap-js-js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js?ver=6.0' id='lightbox-js'></script>
<link rel='stylesheet' id='bootstrap-css-css' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css?ver=6.0' media='all' />
<link rel='stylesheet' id='lightbox-css-css' href='https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css?ver=6.0' media='all' />
<link rel='stylesheet' id='earthdefenderstoolkit-style-base-css' href='https://www.earthdefenderstoolkit.com/wp-content/themes/earthdefenderstoolkit/style.css?ver=57' media='all' />
<link rel='stylesheet' id='earthdefenderstoolkit-style-css' href='https://www.earthdefenderstoolkit.com/wp-content/themes/earthdefenderstoolkit/style-edt.css?ver=44' media='all' />


<button class="skip-button" id="skip-tools">Skip to the Toolfinder</button>
<h2 id="skip-anchor">I want to use tools to...</h2>

<div class="tool-option-group">
  <div class="tool-option using-tools" data-terms="make-decisions-around-land-use-and-resource-management">Make decisions around land use and resource management </div>
  <div class="tool-option using-tools" data-terms="monitor-threats-or-land-incursions">Monitor threats or land incursions </div>
  <div class="tool-option using-tools" data-terms="advocate-for-change-or-petition-for-land-rights">Advocate for change, or petition for land rights </div>
  <div class="tool-option using-tools" data-terms="record-and-archive-local-knowledge-and-stories-about-the-land">Record and archive local knowledge and stories about the land </div>

<h2>I have access to...</h2>

<div class="tool-option-group">
  <div class="tool-option access-to" data-terms="computers-locally-available">Computers locally available </div>
  <div class="tool-option access-to" data-terms="smartphones-locally-available">Smartphones locally available </div>
</div>

<button class="skip-button" id="see-tools">See the Tools</button>

<div class="the-tool-kit" id="the-tool-kit">
<div class="content-section">

<h2 id="see-tool-anchor"></h2>

<div class="tool-kit-selected-table">
  <div class="tool-kit-selected-section">
  <h2 style="color: white !important;">I am using tools to: </h2>
    <div class="grid-list" id="using-tools"></div>
  </div>
  <div class="tool-kit-selected-section">
  <h2 style="color: white !important;">I have access to: </h2>
    <div class="grid-list" id="access-to">
    </div>
  </div>
</div>

<p id="clear-filters" style="color:white;">Clear all filters (<span class="filterNumber">0</span>)</p>
<p style="color:white !important;">SELECTED TOOLS</p>

<div class="tool-kit-results">

<p class="no-results">No tools meet these criteria. If you would like to share more about your needs with the Earth Defenders Toolkit community to see if somebody can help, please feel free to post in the <a href="http://forum.earthdefenderstoolkit.com/">Forum</a>.</p>

<div class="result-box" data-terms=" computers-locally-available have-access-to is-entirely-free-to-use is-simple-and-easy-to-use need-a-tool-that record-and-archive-local-knowledge-and-stories-about-the-land resources using-tools-to will-enable-us-to-have-local-or-offline-control-of-our-data will-help-us-share-and-publish-data-online works-in-remote-and-offline-areas">
<div class="box-image">
<img src="https://www.earthdefenderstoolkit.com/wp-content/uploads/2021/06/5f6978aec526abb54bd5fa09_desktop-whakapapa.png" width="200" alt="logo">
</div>

<div class="box-content" style="padding: 25px;">
<h2>Āhau</h2>
<p>Āhau is a Whānau (Māori-language word for extended family) Data Platform”</p>
<div style="margin-top: 30px;">
<a class="orange-button" target="_blank" href="http://ahau.io/">Visit Website</a>
</div>
<p class="expand-button" style="margin-top: 30px; text-decoration: underline;
                font-weight: bold; cursor: pointer;
                color: rgb(43, 56, 65);">Learn More <span class="arrow-show">↓</span></p>
<div class="expand-content"><p><strong>PROS:</strong></p>
<ul>
<li>Built with principles of data sovereignty front of mind by an Indigenous-led team.</li>
<li>User-friendly interface that feels like a social networking application.</li>
</ul>
<p><strong>CONS:</strong></p>
<ul>
<li>Right now, it’s difficult to customize the application for non-Māori usage, but the Āhau team is willing to work with any community across the globe to help adapt the software.</li>
</ul>
</div>
</div>

<script>

  jQuery(document).ready(function(){
    let usingFilter = []
    let accessFilter = []
    let needFilter = []

    jQuery(document).on('click', '.tool-option', function() {
      var thisData = jQuery(this).data('terms');
      var numberVisible = 0;
      if(jQuery(this).hasClass('tool-option-selected')) {
        jQuery(this).removeClass('tool-option-selected')
      } else {
        jQuery(this).addClass('tool-option-selected')
      }
      if(jQuery(this).hasClass('using-tools')) {
        if(usingFilter.indexOf(thisData) > -1) {
          usingFilter.splice(usingFilter.indexOf(thisData), 1);
        } else {
          usingFilter.push(thisData);
        }
      }
      if(jQuery(this).hasClass('access-to')) {
        if(accessFilter.indexOf(thisData) > -1) {
          accessFilter.splice(accessFilter.indexOf(thisData), 1);
        } else {
          accessFilter.push(thisData);
        }
      }
      if(jQuery(this).hasClass('need-tool')) {
        if(needFilter.indexOf(thisData) > -1) {
          needFilter.splice(needFilter.indexOf(thisData), 1);
        } else {
          needFilter.push(thisData);
        }
      }
      jQuery('.result-box').each(function() {
        var anyUseFilter = usingFilter.length > 0 ? false : true;
        usingFilter.forEach(filter => {
          if(jQuery(this).data('terms').indexOf(filter) > -1) {
            anyUseFilter = true;
          }
        })
        var anyAccessFilter = accessFilter.length > 0 ? false : true;
        accessFilter.forEach(filter => {
          if(jQuery(this).data('terms').indexOf(filter) > -1) {
            anyAccessFilter = true;
          }
        })
        var allNeedFilters = true;
        needFilter.forEach(filter => {
          if(jQuery(this).data('terms').indexOf(filter) === -1) {
            allNeedFilters = false;
          }
        })
        var visible = false;
        if(anyUseFilter && anyAccessFilter && allNeedFilters) {
          visible = true;
        }
        if(visible || (usingFilter.length === 0 && accessFilter.length === 0 && needFilter.length === 0)) {
          jQuery(this).show()
          numberVisible += 1;
        } else {
          jQuery(this).hide()
        }
      })
      jQuery("#clear-filters .filterNumber").text(usingFilter.length + accessFilter.length + needFilter.length)
      if(numberVisible === 0) {
        jQuery('.no-results').show();
      } else {
        jQuery('.no-results').hide();
      }

      //add back filters
      jQuery('#using-tools').find('p').remove();
      usingFilter.forEach(element => {
        var parent = document.getElementById("using-tools");
        var formatted = element.replace(/-/g, ' ')
        parent.insertAdjacentHTML('beforeend', `<p style="text-transform: capitalize; color: white !important; font-size: 15px !important">${formatted} </p>`);
      });
      jQuery('#access-to').find('p').remove();
      accessFilter.forEach(element => {
        var parent = document.getElementById("access-to");
        var formatted = element.replace(/-/g, ' ')
        parent.insertAdjacentHTML('beforeend', `<p style="text-transform: capitalize; color: white !important; font-size: 15px !important">${formatted} </p>`);
      });
      jQuery('#need-tool').find('p').remove();
      needFilter.forEach(element => {
        var parent = document.getElementById("need-tool");
        var formatted = element.replace(/-/g, ' ')
        parent.insertAdjacentHTML('beforeend', `<p style="text-transform: capitalize; color: white !important; font-size: 15px !important">${formatted} </p>`);
      });
    });

    //load jquery
    jQuery("#skip-tools").click(()=>{
      var elmnt = document.getElementById("skip-anchor");
      elmnt.scrollIntoView();
    })

    jQuery("#see-tools").click(()=>{
      var elmnt = document.getElementById("see-tool-anchor");
      elmnt.scrollIntoView();
    })

    jQuery("#clear-filters").click(()=>{
      // filter = []
      usingFilter = []
      accessFilter = []
      needFilter = []
      jQuery('.tool-option').each(function() {
        jQuery(this).removeClass('tool-option-selected')
      })
      jQuery('.result-box').each(function() {
        jQuery(this).show()
      });
      jQuery('.no-results').hide();
      jQuery('#using-tools').find('p').remove();
      jQuery('#access-to').find('p').remove();
      jQuery('#need-tool').find('p').remove();
      jQuery("#clear-filters .filterNumber").text("0")
    })
  });

  jQuery(document).on('click', '.expand-button', function() {
    console.log(jQuery(this).next())
    var nextEle = jQuery(this).next();
    if(nextEle.is(':visible')) {
      jQuery(this).find('.arrow-show').html('↓')
      nextEle.fadeOut()
    } else {
      jQuery(this).find('.arrow-show').html('↑')
      nextEle.fadeIn()
    }
  })

  jQuery('.printer-logo').on('click',function(){
    window.print();
  })

</script>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script>
				// Used by Gallery Custom Links to handle tenacious Lightboxes
				jQuery(document).ready(function () {

					function mgclInit() {
						if (jQuery.fn.off) {
							jQuery('.no-lightbox, .no-lightbox img').off('click'); // jQuery 1.7+
						}
						else {
							jQuery('.no-lightbox, .no-lightbox img').unbind('click'); // < jQuery 1.7
						}
						jQuery('a.no-lightbox').click(mgclOnClick);

						if (jQuery.fn.off) {
							jQuery('a.set-target').off('click'); // jQuery 1.7+
						}
						else {
							jQuery('a.set-target').unbind('click'); // < jQuery 1.7
						}
						jQuery('a.set-target').click(mgclOnClick);
					}

					function mgclOnClick() {
						if (!this.target || this.target == '' || this.target == '_self')
							window.location = this.href;
						else
							window.open(this.href,this.target);
						return false;
					}

					// From WP Gallery Custom Links
					// Reduce the number of  conflicting lightboxes
					function mgclAddLoadEvent(func) {
						var oldOnload = window.onload;
						if (typeof window.onload != 'function') {
							window.onload = func;
						} else {
							window.onload = function() {
								oldOnload();
								func();
							}
						}
					}

					mgclAddLoadEvent(mgclInit);
					mgclInit();

				});
			</script>
