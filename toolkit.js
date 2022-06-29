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
