// Criando um conjunto vazio
const emptySet = new Set(); 
// Criando um conjunto a partir de um array
const set = new Set([45,68,92]);

// Obtendo um elemento através da sua chave
console.log(set[68]);

// Verificando se existe elemento
console.log(set.has(1)); // false

// Percorrendo um conjunto
for(const item of set) {
    console.log(item);
}

// Inserindo um elemento
set.add(4);

// Removendo um elemento
set.delete(4);

// Removendo todos os elementos
set.clear();