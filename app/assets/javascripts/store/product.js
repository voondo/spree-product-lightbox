$(document).ready(function() {
    $("#product-thumbnails a.full_img").colorbox({rel:'thumb'});
    $("#main-image a").colorbox({rel:'thumb'});

    $('#cart-form form').append('<input type="hidden" name="'+$("#product-variants-select").attr('name')+'" id="hidden_product_id">');

    $("#product-variants-select").ddslick({
        onSelected: function(selectedData){
            $("#product_price_label").html(selectedData.selectedData.description);
            $("#hidden_product_id").val(selectedData.selectedData.value);
            $(".vtmb").hide();
            $(".vtmb-"+selectedData.selectedData.value).show();
            $("#main-image img").attr('src', selectedData.selectedData.imageSrc.replace('/mini/', '/product/'));
            $("#main-image a").attr('href', selectedData.selectedData.imageSrc.replace('/mini/', '/large/'));
            $("#main-image a").colorbox({rel:'thumb'+selectedData.selectedData.value});
            $("#product-thumbnails li:visible a.full_img").colorbox({rel:'thumb'+selectedData.selectedData.value});
            console.log(selectedData);
        }   
    });
});