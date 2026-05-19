const nome = 'Julia';

 let sobrenome = "Mauricio";

{
   const nome = "Eduardo";
   let sobrenome = "Pereira";
   console.log(`Nome Completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.97;
sobrenome = true;

console.log(`Nome Completo: ${nome} ${sobrenome}`);


const nomes = ["Julia", "Eduardo"];
for (var i = 0; i < nomes.length; i++){
    console.log(`Nome ${i}: $${nome[i]}`);

}

console.log(i);
