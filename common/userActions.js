export async function Encurtar(linkOriginal) {
    const API_URL = "https://encurtalinkapi-eaa6f7efb7cqgceq.canadacentral-01.azurewebsites.net/api/v1";

    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(linkOriginal)
    })
    .then((res) => res.json())
    .catch((erro) => toastr.error(erro))
    
    console.log(response);

    if(response.erro){
        toastr.error(mensagem)
        return "";
    }

    $("#linkEncurtado").html(`Link encurtado: <a target="_blank" href="${response.linkEncurtado}">${response.linkEncurtado}</a>`).css("display", "block");
    $("#linkOriginal").html(`Link original: <a target="_blank" href="${linkOriginal}">${linkOriginal}</a>`).css("display", "block");
    $("#encurtadorLink").val("");

    return response.linkEncurtado;
}