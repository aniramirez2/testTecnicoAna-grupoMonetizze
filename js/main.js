jQuery(document).ready(function($) {
	destaques.init();

});



var destaques = {
	init: function(){

			$("#destaqueVenda").click(function(){
				$("#aluguel").hide();
				$("#venda").show();
			})
			$("#destaqueAluguel").click(function(){
				$("#aluguel").show();
				$("#venda").hide();
			})

	},


};
