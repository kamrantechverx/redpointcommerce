(function() {
  var formatVariantResult;

  $(document).ready(function() {
    if ($("#variant_autocomplete_template").length > 0) {
      window.variantTemplate = Handlebars.compile($("#variant_autocomplete_template").text());
      window.variantStockTemplate = Handlebars.compile($("#variant_autocomplete_stock_template").text());
      window.variantLineItemTemplate = Handlebars.compile($("#variant_line_items_autocomplete_stock_template").text());
    }
  });

  formatVariantResult = function(variant) {
    if (variant["images"][0] !== undefined && variant["images"][0].mini_url !== undefined) {
      variant.image = variant.images[0].mini_url;
    }
    return variantTemplate({
      variant: variant
    });
  };

  $.fn.variantAutocomplete = function() {
    return this.select2({
      placeholder: Spree.translations.variant_placeholder,
      minimumInputLength: 3,
      initSelection: function(element, callback) {
        return $.get(Spree.routes.variants_search + "/" + element.val(), {}, function(data) {
          return callback(data);
        });
      },
      ajax: {
        url: Spree.url(Spree.routes.variants_api),
        datatype: "json",
        data: function(term, page) {
          return {
            q: {
              product_name_or_sku_cont: term
            }
          };
        },
        results: function(data, page) {
          window.variants = data["variants"];
          return {
            results: data["variants"]
          };
        }
      },
      formatResult: formatVariantResult,
      formatSelection: function(variant) {
        if (!!variant.options_text) {
          return variant.name + (" (" + variant.options_text + ")");
        } else {
          return variant.name;
        }
      }
    });
  };

}).call(this);
