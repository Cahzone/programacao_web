var qualquer
var pessoa = {
    nome: 'Carla',
    sobrenome: 'Fabiana',
    sexo: 'Feminino',
    idade: 28,
    altura: 1.6,
    peso: 57,
    andando: false,
    Caminhouquantosmetros: 0,
    fazerAniversario: function () {
        //this = este / this.nome = vai puxar o objetivo 
        //que você chamou no caso nome
        this.idade++

    },
    andar: function (x) { //(x) = parametro
        this.Caminhouquantosmetros = this.Caminhouquantosmetros + x
        this.andando = true
    },
    parar: function () {
        this.andando = false
    },
    nomeCompleto: function () {
        console.log("Meu nome é " + this.nome + " " + this.sobrenome + "!")
    },
    mostrarIdade: function () {
        console.log("Olá eu tenho " + this.idade + " anos")
    },

    mostrarAltura: function () {
        console.log("Minha altura é " + this.altura + " m")
    },

}

for (i = 10; i < 13; i++) {
    pessoa.fazerAniversario()
    pessoa.andar(i) 
    }

if(pessoa.andando = true)
    console.log( + nome + " Está andando!")
else console.log( + nome + " Está parado!")         



    /*Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa.nomeCompleto()
VM344:25 Meu nome é Carla Fabiana!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*
pessoa.idade
28

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*pessoa.peso
57

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*
pessoa.altura
1.6



/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
/pessoa.idade
31

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
?

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*pessoa
{nome: "Carla", sobrenome: "Fabiana", sexo: "Feminino", idade: 31, altura: 1.6, …}
nome: "Carla"
sobrenome: "Fabiana"
sexo: "Feminino"
idade: 31
altura: 1.6
peso: 57
andando: true
Caminhouquantosmetros: 33
fazerAniversario: ƒ ()
andar: ƒ (x)
parar: ƒ ()
nomeCompleto: ƒ ()
mostrarIdade: ƒ ()
mostrarAltura: ƒ ()
__proto__: Object

/*
Se a pessoa ainda está andando, faça-a parar.
*/
?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)
?






