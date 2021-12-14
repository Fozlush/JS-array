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
document.querySelector('.btn-run1').onclick = function(){
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
document.querySelector('.btn-run2').onclick = function(){
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
document.querySelector('.btn-run3').onclick = function(){
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

//Задача 4
document.querySelector('.btn-run4-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display4-1').innerText = array;
    document.querySelector('.display4-2').innerText = '';
}
document.querySelector('.btn-run4-2').onclick = function(){
    let result = 0;
    array.forEach(function(element, index){
        if(index % 2 === 1){
            result = result + element;
        }
    })
    document.querySelector('.display4-2').innerText = result;
}

//Задача 5
document.querySelector('.btn-run5-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display5-1').innerText = array;
    document.querySelector('.display5-2').innerText = '';
}
document.querySelector('.btn-run5-2').onclick = function(){
    let result = -1;
    let max = 0;
    array.forEach(function(element){
        if(element - max > 0){
            max = element;
        }
    })
    array.forEach(function(element){
        if(max - element < 3){
            result++;
        }
    })
    document.querySelector('.display5-2').innerText = result;
}

//Задача 6
document.querySelector('.btn-run6-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display6-1').innerText = array;
    document.querySelector('.display6-2').innerText = '';
}
document.querySelector('.btn-run6-2').onclick = function(){
    let up = 0;
    let down = 0;
    let result = 'Массив не упорядочен';
    array.forEach(function(element, index){
        if(element - array[index - 1] > 0){
            up++;
        }else if(element - array[index - 1] < 0){
            down++;
        }
    })
    if(up === 0){
        result = 'Массив убывает';
    }else if(down === 0){
        result = 'Массив возрастает';
    }
    document.querySelector('.display6-2').innerText = result;
}

//Задача 7
document.querySelector('.btn-run7-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display7-1').innerText = array;
    document.querySelector('.display7-2').innerText = '';
}
document.querySelector('.btn-run7-2').onclick = function(){
    let reps = array.reduce((accum, item) => {
        let newCount = (accum[item] || 0) + 1;
        return { ...accum, [item]: newCount };
        }, {});
    let maxTimes = Math.max.apply(null, Object.values(reps));
    let [recordItem] = Object.entries(reps).find(([, val]) => val === maxTimes);
    document.querySelector('.display7-2').innerText = recordItem;
}

//Задача 8
document.querySelector('.btn-run8-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display8-1').innerText = array;
    document.querySelector('.display8-2').innerText = '';
}
document.querySelector('.btn-run8-2').onclick = function(){
    let result = 0;
    array.forEach(function(element, index){
        if(element - array[index - 1] > 0 && element - array[index + 1] > 0){
            result++;
        }
    })
    document.querySelector('.display8-2').innerText = result;
}

//Задача 9 ---НЕ ГОТОВО
document.querySelector('.btn-run9-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display9-1').innerText = array;
    document.querySelector('.display9-2').innerText = '';
}
document.querySelector('.btn-run9-2').onclick = function(){
    
    document.querySelector('.display9-2').innerText = result;
}

//Задача 10
document.querySelector('.btn-run10-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display10-1').innerText = array;
    document.querySelector('.display10-2').innerText = '';
}
document.querySelector('.btn-run10-2').onclick = function(){
    let max = 0;
    let min = 9;
    let maxi;
    let mini;
    let result = array.slice();
    array.forEach(function(element, index){
        if(element - max > 0){
            max = element;
            maxi = index;
        }
        if(min - element > 0){
            min = element;
            mini = index;
        }
    })
    console.log(maxi)
    console.log(mini)
    result.forEach(function(element, index){
        if(index === maxi){
            result.splice(maxi, 1, min)
        }
        if(index === mini){
            result.splice(mini, 1, max)
        }
    })
    document.querySelector('.display10-2').innerText = result;
}

//Задача 11
document.querySelector('.btn-run11-1').onclick = function(){
    array = [];
    for(i = 0; i < length; i++){
        let a;
        a = getRandomInt();
        array.push(a);
    }
    document.querySelector('.display11-1').innerText = array;
    document.querySelector('.display11-2').innerText = '';
}
document.querySelector('.btn-run11-2').onclick = function del11(){
    let result = {};
    let del = [];
    for (let i = 0; i < array.length; ++i)
    {
        let a = array[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (let key in result)
    if(result[key] > 2){
        del = key;
        array = array.filter(item => !del.includes(item));
        del11();
    }
    document.querySelector('.display11-2').innerText = array;
}

//Задача 12
let intCount = 3;
document.querySelector('.n-minus').onclick = function intCountMinus(){
    intCount --;
    document.querySelector('.n-container').innerText = intCount;
    if(intCount === 2){
        document.querySelector('.n-minus').classList.add('hidden')
    } else if(intCount === 4){
        document.querySelector('.n-plus').classList.remove('hidden')
    }
}
document.querySelector('.n-plus').onclick = function intCountPlus(){
    intCount ++;
    document.querySelector('.n-container').innerText = intCount;
    if(intCount === 5){
        document.querySelector('.n-plus').classList.add('hidden')
    } else if(intCount === 3){
        document.querySelector('.n-minus').classList.remove('hidden')
    }
}
function getRandomInt12(min, max) {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.btn-run12-1').onclick = function(){
    array = [];
    for(i = 0; i < intCount; i++){
        let a;
        let b;
        a = getRandomInt12();
        b = getRandomInt12();
        if(a > b){
            let c = a;
            a = b;
            b = c;
        }
        array.push(a, ' - ', b, ' , ');
    }
    array.splice(-1, 1);
    document.querySelector('.display12-1').innerText = array.join('');
    array.forEach(function(element, index){
        if(element === ' - ' || element === ' , '){
            array.splice(index, 1)
        }
    })
    document.querySelector('.display12-2').innerText = '';
}
document.querySelector('.btn-run12-2').onclick = function(){
    let arrcopy = array.slice();
    let result;
    let start = 99;
    let finish;
    arrcopy.forEach(function(element, index){
        if(index % 2 === 0 && element - start < 0){
            start = element;
            startI = index;
            finish = arrcopy[index + 1];
            arrcopy.splice(index, 2)
        }
    })
    for(i = 0; i < intCount - 1; i++){
        arrcopy.forEach(function(element, index){
            if(index % 2 === 0 && element <= finish){
                if(finish < arrcopy[index + 1]){
                    finish = arrcopy[index + 1];
                }
                arrcopy.splice(index, 2)
                result = 'Образует';
            }else{
                result = 'Не образует';
            }
        })
    }
    
    document.querySelector('.display12-2').innerText = result;
}