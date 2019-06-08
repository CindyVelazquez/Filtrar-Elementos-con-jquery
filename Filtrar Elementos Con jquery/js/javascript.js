$(document).ready(function(){

		//agregando clase active al primer enlace

		$('.category-list .category_item[category="all"]').addClass('ct_item-active');

		$('.category_item').click(function(){

			//filtrando productos

			var catProduct = $(this).attr('category');
			console.log(catProduct);

			//agregar clase al enlace seleccionado

			$('.category_item').removeClass('ct_item-active');
			$(this).addClass('ct_item-active');

			//ocultando productos

			$('.product-item').css('transform', 'scale(0)');

			function hideProduct(){

				$('.product-item').hide();

			}setTimeout(hideProduct,400);

			// mostrando productos

			function showProduct(){

				$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');

				$('.product-item[category="'+catProduct+'"]').show();

			}setTimeout(showProduct,400);
		});

		//mostrando todos los productos

		$('.category_item[category="all"]').click(function(){

			function showAll(){

			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');

			}setTimeout(showAll,400);


		});

});