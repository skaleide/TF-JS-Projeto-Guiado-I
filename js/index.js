let estoque =[]

let proximoId = 1

function adicionarProduto(nome, quantidade, preco, descricao) {
    let produto = {
        id: proximoId++,
        nome: nome ,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }
    estoque.push(produto)
}

let novoProduto = adicionarProduto("tenis", "30", "12.00", "tenis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Camiseta", "01", "30.00", "Camiseta da marca Afrocódigos");

console.log(estoque)

function listarProdutos(){
    for(let i =  0 ; i < estoque.length; i++){
        let produto = estoque[i];
        console.log(produto)
    }
}

listarProdutos()

function atualizarProduto(id, novainformacao){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            estoque[i] = Object.assign(estoque[i], novainformacao)
            break;
        }
}

}

function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1)
            console.log("removeu: ", removerProduto)
            return;
        }
    }
}//lógica aqui
