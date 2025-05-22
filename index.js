
let state = 1;
let messages={ 
    1:"Add contact details for further communications.", 
    2:"Add shipping address for successful delivery.", 
    3:"Complete Payment to complete the order.", 
    4:"Ready to get delivered!", 5:"Order Delivered successfully &#127881;"
};

document.querySelector('#prev').disabled=true;

const prevButton =document.querySelector('#prev');
const nextButton= document.querySelector('#next');
const statusEle= document.querySelector('.status');
const lines=document.querySelectorAll('.line');
const circles=document.querySelectorAll('.circle');

function classEdit() {
    statusEle.innerHTML=`<p>${messages[state]}</p>`
    lines.forEach(element=>{
        element.classList.remove('complete-line');

        if(element.id.replace(/[^0-9]/g, '')<state) 
            element.classList.add('complete-line');
    })
    circles.forEach(element => {
        element.classList.remove('current','completed');
        if (parseInt(element.id) < state) 
            element.classList.add('completed');
        else if (parseInt(element.id) == state) 
            element.classList.add('current');
    });
    prevButton.disabled= state===1;
    nextButton.disabled= state===5;
    nextButton.innerHTML= state==4? 'Finish' : 'Next';
}

function previous() {
    state--;
    classEdit();
}

function next() {
    state++;
    classEdit();
}
