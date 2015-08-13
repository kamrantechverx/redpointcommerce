(function() {
  $(function() {
    return ($('#new_image_link')).click(function(event) {
      event.preventDefault();
      ($('.no-objects-found')).hide();
      ($(this)).hide();
      return $.ajax({
        type: 'GET',
        url: this.href,
        data: {
          authenticity_token: AUTH_TOKEN
        },
        success: function(r) {
          ($('#images')).html(r);
          return ($('.select2')).select2();
        }
      });
    });
  });

}).call(this);
