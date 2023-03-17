/* Atribuição via desestruração*/

let pessoa = {
    nome : "Sandra Sedano",
email: "sandrasedano09@gmail.com"
}

/* let nome = pessoa.nome
let email = pessoa.email */


let {nome, email} = pessoa
console.log(nome, email)