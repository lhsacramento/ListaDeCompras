const button = document.querySelector('.buttonAddIten');
let id = 0;

document.addEventListener('click',(e) => {
    console.log(e.target);
    if(e.target.classList.contains('isButton')){
        const myParent = e.target.parentElement;
        myParent.remove();
    }
});


button.onclick = function(){

    const iten = getItem();
    createIten(iten);

    function getItem()
    {
        const iten = {};
        iten.name = (document.querySelector('.boxNameIten')).value;
        iten.quant = (document.querySelector('.boxQuantIten')).value;

        // document.querySelector('.boxNameIten').value = '';
        // document.querySelector('.boxQuantIten').value = '';
        return iten;
    }

    function createIten(iten)
    {
        const listItens = document.querySelector('.listItens');

        const newIten = document.createElement('div');
        const newItenName = document.createElement('p');
        const newItenQuant = document.createElement('p');
        const newItenButton = document.createElement('button');

        newItenName.innerText = iten.name;
        newItenQuant.innerText = iten.quant;

        newIten.appendChild(newItenQuant); 
        newIten.appendChild(newItenName);   

        newItenButton.setAttribute('class','isButton');  
        newItenButton.innerHTML = 'x';  
        newIten.appendChild(newItenButton);         
        
        newIten.classList.add('iten');
        newIten.classList.add('i'+id);

        listItens.appendChild(newIten);
        id++;
    }
}