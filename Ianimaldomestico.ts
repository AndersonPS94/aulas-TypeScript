interface Cachorro {
    nome: String;
    idade: number;
    parqueFavorito?: String;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);