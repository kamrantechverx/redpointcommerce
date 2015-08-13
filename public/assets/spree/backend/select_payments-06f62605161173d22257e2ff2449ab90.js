(function() {
  $(function() {
    if ($('.new_payment').is('*')) {
      $('.payment-method-settings fieldset').addClass('hidden').first().removeClass('hidden');
      return $('input[name="payment[payment_method_id]"]').click(function() {
        var id;
        $('.payment-method-settings fieldset').addClass('hidden');
        id = $(this).parents('li').data('id');
        return $("fieldset[data-id='" + id + "']").removeClass('hidden');
      });
    }
  });

}).call(this);
