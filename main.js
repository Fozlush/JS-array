btnNav = document.querySelectorAll('.btn-nav');
tabs = document.querySelectorAll('.task');
display = document.querySelectorAll('.array-box_display');
let length = 6;
let array = [];

//Навигация
btnNav.forEach(function(elem){
    elem.addEventListener('click', navigation)
});
function navigation(){
    btnNav.forEach(function(elem){
        elem.classList.remove('active')
    })
    this.classList.add('active');
    let tabNumber = this.getAttribute('data-tab');
    activateTab(tabNumber);
};
function activateTab(tabNumber){
    tabs.forEach(function(item){
        item.classList.contains(tabNumber) ? item.classList.add('active-tab') : item.classList.remove('active-tab');
    })
    display.forEach(function(dis){
        dis.innerText = "";
    })
    array = [];
}

//Длина массива
document.querySelector('.btn-minus').onclick = function lengthMinus(){
    length --;
    document.querySelector('.length-container').innerText = length;
    if(length === 3){
        document.querySelector('.btn-minus').classList.add('hidden')
    } else if(length === 17){
        document.querySelector('.btn-plus').classList.remove('hidden')
    }
}
document.querySelector('.btn-plus').onclick = function lengthPlus(){
    length ++;
    document.querySelector('.length-container').innerText = length;
    if(length === 18){
        document.querySelector('.btn-plus').classList.add('hidden')
    } else if(length === 4){
        document.querySelector('.btn-minus').classList.remove('hidden')
    }
}

//Получение случайного чсла
function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Задача 1
document.querySelector('.btn-run1-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        if(i % 3 === 0){
            a = getRandomInt();
            array.push(a);
        }else {
            a = array[i - 1]
            array.push(a);
        }
    }
    document.querySelector('.display1').innerText = array;
}

//Задача 2
document.querySelector('.btn-run2-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        if(i <= (length - 1) / 2){
            a = getRandomInt();
            array.push(a);
        }else {
            a = array[length - i - 1]
            array.push(a);
        }
    }
    document.querySelector('.display2').innerText = array;
}

//Задача 3
function getRandomInt3() {
    min = Math.ceil(2);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.btn-run3-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        one = 2 - array.filter(x => x==1).length;
        probability = (1 / (length - i)) * one;
        chance = Math.random();
        let a;
        if(chance < probability){
            a = 1;
            array.push(a);
        }else{
            aChance = Math.random();
            aChance < 1/9 ? a = 0 : a = getRandomInt3();
            array.push(a);
        }
        console.log(one)
    }
    document.querySelector('.display3').innerText = array;
}