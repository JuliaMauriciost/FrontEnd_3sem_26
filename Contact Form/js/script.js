// 
// Esta funcao recebe os dados do formulario em um objeto 
// JavaScript e em seguida chama a api para cadastrar
//
async function CadastrarContato(objetoContato) {
        console.log(objetoContato);

    const resposta = fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    return await resposta;
}


async function buscarEndereco(cep) {

    //  let nome = "Júlia";
    //  let sobrenome = "Maurício";

    //  console.log(`O nome completo e: ${nome} ${sobrenome}`);

    //  return false;

    //quando cep nao vier prenchido
    if (cep.trim().length < 8) {
        alert("O CEP deve conter 8 dígitos");
        return false;
    }

    //buscar o CEP la na Viacep
    try {
        aguardandoCampos();
        // setTimeout(asyc () => {

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        //  console.log(dados);
        //  console.log(dados.logradouro);
        //  console.log(dados.bairro);
        //  console.log(dados.localidade);
        //  console.log(dados.estado);

        // Preenchendo os campos do formulario
        document.getElementById("Rua").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.estado;

    } catch (erro) {
        console.log(erro);
    }
}
//informar ao usuario que os campos estao aguardando o preenchimento
function aguardandoCampos() {
    document.getElementById("Rua").value = "aguarde ...";
    document.getElementById("Bairro").value = "aguarde ...";
    document.getElementById("Cidade").value = "aguarde ...";
    document.getElementById("Estado").value = "aguarde ...";
}



function validarFormularios() {
    let nome = document.getElementById("Nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;
    let nEstado = document.getElementById("NEstado").value;
    let ddd = document.getElementById("DDD").value;
    let telefone = document.getElementById("Telefone").value;
    let cep = document.getElementById("Cep").value;
    let rua = document.getElementById("Rua").value;
    let compremento = document.getElementById("Compremento").value;
    let apartamento = document.getElementById("Apartamento").value;
    let bairro = document.getElementById("Bairro").value;
    let cidade = document.getElementById("Cidade").value;
    let estado = document.getElementById("Estado").value;
    let anotacoes = document.getElementById("Anotacoes").value;

     //debugger;
    let quantidadeErros = 0;

     if (nome.trim().length == 0) {
         formError("Nome");
         quantidadeErros++;
        //alert("O campo Nome é obrigatorio");

     } else {
         reiniciarBorda("Nome");
     }

     if (sobrenome.trim().length == 0) {
         formError("Sobrenome");
         quantidadeErros++;
        //alert("O campo Sobrenome é obrigatorio");

     } else {
         reiniciarBorda("Sobrenome");
     }

     if (email.trim().length == 0) {
         formError("Email");
         quantidadeErros++;
         // alert("O campo Email é obrigatorio");

     } else {
         reiniciarBorda("Email");
     }

    //  if (nEstado.trim().length == 0) {
    //      formError("NEstado");
    //      quantidadeErros++;
    //     //alert("O campo Número do Estado é obrigatorio");

    //  } else {
    //      reiniciarBorda("NEstado");
    //  }

    //  if (ddd.trim().length == 0) {
    //      formError("DDD");
    //      quantidadeErros++;
    //     //alert("O campo DDD do Estado é obrigatorio");

    //  } else {
    //      reiniciarBorda("DDD");
    //  }

    //  if (telefone.trim().length == 0) {
    //      formError("Telefone");
    //      quantidadeErros++;
    //     //alert("O campo Telefone é obrigatorio");

    //  } else {
    //      reiniciarBorda("Telefone");
    //  }

    //  if (cep.trim().length == 0) {
    //      formError("Cep");
    //      quantidadeErros++;
    //     //alert("O campo Cep é obrigatorio");

    //  } else {
    //      reiniciarBorda("Cep");
    //  }

    //  if (rua.trim().length == 0) {
    //      formError("Rua");
    //      quantidadeErros++;
    //     //alert("O campo Rua é obrigatorio");

    //  } else {
    //      reiniciarBorda("Rua");
    //  }

    //  if (compremento.trim().length == 0) {
    //      formError("Compremento");
    //      quantidadeErros++;
    //     //alert("O campo Compremento é obrigatorio");

    //  } else {
    //      reiniciarBorda("Compremento");
    //  }

    //  if (apartamento.trim().length == 0) {
    //      formError("Apartamento");
    //      quantidadeErros++;
    //     //alert("O campo Apartamento é obrigatorio");

    //  } else {
    //      reiniciarBorda("Apartamento");
    //  }

    //  if (bairro.trim().length == 0) {
    //      formError("Bairro");
    //      quantidadeErros++;
    //     //alert("O campo Bairro é obrigatorio");

    //  } else {
    //      reiniciarBorda("Bairro");
    //  }

    //  if (cidade.trim().length == 0) {
    //      formError("Cidade");
    //      quantidadeErros++;
    //     //alert("O campo Cidade é obrigatorio");

    //  } else {
    //      reiniciarBorda("Cidade");
    //  }

    //  if (estado.trim().length == 0) {
    //      formError("Estado");
    //      quantidadeErros++;
    //     //alert("O campo Estado é obrigatorio");

    //  } else {
    //      reiniciarBorda("Estado");
    //  }

    //  if (anotacoes.trim().length == 0) {
    //      formError("Anotacoes");
    //      quantidadeErros++;
    //     //alert("O campo Estado é obrigatorio");

    //  } else {
    //      reiniciarBorda("Estado");
    //  }

    if (quantidadeErros > 0) {
        alert("Existem" + quantidadeErros + " erros no formulario!");
        quantidadeErros = 0;
    }
    else {
        //gera um objeto com os dados do formulario
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            nEstado: nEstado,
            ddd: ddd,
            telefone: telefone,
            cep: cep,
            rua: rua,
            compremento: compremento,
            apartamento: apartamento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotacoes: anotacoes
        }

        let cadastrado = CadastrarContato(objetoContato);

        reiniciarBorda();
        //     alert("Formulario enviado com sucesso!");
        //     reiniciarBorda();
        // }
    }

    function formError(idCampo) {
        document.getElementById(idCampo).style.border = "2px solid red"
    }

    function reiniciarBorda(idCampo) {
        document.getElementById(idCampo).style.border = "transparent"
    }

}
