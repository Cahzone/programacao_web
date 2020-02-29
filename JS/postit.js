

var postitElement = document.querySelector("#postit");
var addPostitElement = document.createElement('button');
var inputElement = document.createElement('input');
var textElement = document.createTextNode('Adcionar Postit');

var mensagem = dcoument.createElement('P');
var texto = document.createTextNode("Clique duas vezes para remover")
mensagem.apenchild(texto); //Acrescenta o nome 

addPostitElement.setAttribute('class','botao');//setar a classe botão
addPostitElement.appendChild(textElement);//Acrescenta nome no botao
postitElement.appendChild(addPostitElement)//acrescentar botãona div

inputElement.setAttribute('type','password');//Digo que meu input deve ser de senha
postitElement.appendChild(inputElement);
postitElement.appendChild(mensagem);//??????????

addPostitElement.onclick = function () { //Ação do botão
    createPostit(); // cria o postit
};

function createPostit() {
    var boxElement = document.createElement('div')
}
boxElement.onclick = function(){
    boxElement.style.background = getRandomColor();

};
boxElement.ondblclick = function(){
    boxElement.style.width = '200px'
    boxElement.style.height = '200px'
    boxElement.style.backgroundColor = getRandomColor();;
    boxElement.style.textAlign = 'center'

boxElement.appendChild(document.createTextNode(inputElement.value));

postitElement.appendChild(boxElement); //

}

function getRandomColor () { //?????????????????
    var letters ="123456789ABCDEF"
    var color = "#"
    for (var i = 0; 1 < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    return color;

}






