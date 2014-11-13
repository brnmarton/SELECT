$(document).ready(function($) {
  var id_alvo = ''; //alvo do select ID
  var id_select = ''; //primeiro select ID
  var texto_alvo = '<option value="">Selecione...</option>'; //texto inicial para o alvo do select
  
  $('#'+id_alvo).html(texto_alvo); //Coloca o texto inicial no alvo
  
  $('#'+id_select).change(function(e) {
    //carrega o valor escolhido na primeira alteração do select
    var valor_selecionado = $(this).val();
 
    //Exibe 'carregando' no alvo
    $('#'+id_alvo).html('<option value="">Carregando...</option>');
 
    //Carregar valores iniciais e exibir ou não certas partes do formulário
    if (valor_selecionado == "") {
        //Se nenhum valor for selecionado exibe o texto inicial no alvo
       $('#'+id_alvo).html(texto_alvo);       
    } else {
    //Faz a requisição ajax usando o valor selecionado como GET      
        $.ajax({url: 'ajax-getvalues.php?svalue='+valor_selecionado,
          success: function(output) {
              $('#'+id_alvo).html(output);
          },
          error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.status + " "+ thrownError);
          }
        });
    }
  });
});