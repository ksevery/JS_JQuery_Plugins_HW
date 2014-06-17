(function ($) {
    $.fn.dropdown = function () {
        var $this = $(this);
        $this.hide();

        var $options = $this.find('option');
        var $generatedDropdown = $('<div />').addClass('dropdown-list-container');
        var $list = $('<ul />').addClass('dropdown-list-options');

        var $listOption;
        for (var i = 0; i < $options.length; i++) {
            $listOption = $('<li />')
                .addClass('dropdown-list-option')
                .attr('data-value', i)
                .val($options[i].val());
            $list.append($listOption);
        }

        $generatedDropdown.append($list);
        $this.after($generatedDropdown);

        return $this;
    };
}(jQuery));

$('#dropdown').dropdown();

