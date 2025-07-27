import { Encurtar } from "./common/userActions.js";

const handleEnterKey = ({ key }) => {
  if (key === "Enter") {
    Encurtar();
  }
};

document.querySelector("#encurtarBtn").addEventListener("click", async function(){
    var link = $("#encurtadorLink").val();
    if(ValidaEnvio(link)){
        var linkEncurtado = await Encurtar(link);
        try{
            window.focus();
            await navigator.clipboard.writeText(linkEncurtado);
        }catch(erro){
            copiarComFallback(linkEncurtado);
        }

        toastr.success("Link copiado para a área de transferência!");
    }
});
document.querySelector("#encurtadorLink").addEventListener("keyup", handleEnterKey);

function copiarComFallback(link) {
    console.log("veio pro fallback")
    console.log(link);
    const input = document.createElement('textarea');
    input.value = link;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

function ValidaEnvio(link){

    if(link === ""){
        toastr.error("O link não pode ser vazio");
        return false;
    }

    try{
        var urlOriginal = new URL(link);
    }catch(error){
        toastr.error("Envie um link válido!");
        return false;
    }

    return true;
}