'use strict';

var set_taxon_select = function(){
  if ($('#product_taxon_ids').length > 0) {
    $('#product_taxon_ids').select2({
      placeholder: Spree.translations.taxon_placeholder,
      multiple: true,
      initSelection: function (element, callback) {
        var url = Spree.url(Spree.routes.taxons_search, {
          ids: element.val()
        });
        return $.getJSON(url, null, function (data) {
          return callback(data['taxons']);
        });
      },
      ajax: {
        url: Spree.routes.taxons_search,
        datatype: 'json',
        data: function (term, page) {
          return {
            per_page: 50,
            page: page,
            without_children: true,
            q: {
              name_cont: term
            }
          };
        },
        results: function (data, page) {
          var more = page < data.pages;
          return {
            results: data['taxons'],
            more: more
          };
        }
      },
      formatResult: function (taxon) {
        return taxon.pretty_name;
      },
      formatSelection: function (taxon) {
        return taxon.pretty_name;
      }
    });
  }
}

$(document).ready(function () {
  set_taxon_select()
});
