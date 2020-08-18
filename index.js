/*
const fibo=(num,a1=0,a2=1,firstOp=true)=>{
    if(a1+a2<num){
        if(a1===0){
            if(firstOp){
                console.log(a1);
                firstOp=false;
                fibo(num, a1,a1+a2,firstOp)
            }else{
                console.log(a2);
                fibo(num, a2,a1+a2,firstOp)
            }
        }else {
            if (a1===a2) {
                console.log(a1);
            }else{
                console.log(a1+a2);
            }
            fibo(num, a2,a1+a2,firstOp)
        }
    }else {
        return num;
    }
}

fibo(23);*/


/*const fibonacci = num => {
    // Если num равно 0 или 1, возвращаем num
    if(num < 2) {
        return num
    }
    // Рекурсия здесь
    return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(13);*/

/*const fact=num=>{
    console.log(num);
    if(num===1){
        return num;
    }
    return num*fact(num-1);
}

const n=fact(5);

console.log(n);*/
/*const red=(acc,currentValue)=>{
    if(currentValue%2!==0) {
        console.log(currentValue);
        acc = 21;
    }
    return acc;
}

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

const arrNew=arr.reduce(red);

console.log(arrNew);*/






const button=document.getElementById('create');

button.addEventListener('click',()=>{
    const obj={
        pace:document.getElementById('pace').value,
        shooting:document.getElementById('shooting').value,
        passing:document.getElementById('passing').value,
        dibbling:document.getElementById('dribbling').value,
        defence:document.getElementById('defence').value,
        physics:document.getElementById('physics').value,
    }

    let rate=0;

    const position=document.getElementById('position')
    const pos=position.getElementsByTagName('input');
    let positionChecked='';
    for(let el in pos){

        if (pos[el].checked){
            positionChecked=pos[el].id
        }
    }

    let positionCoefficients={
        pace:0,
        shooting:0,
        passing:0,
        dibbling:0,
        defence:0,
        physics:0,
    }

    switch (positionChecked){
        case "LB": positionCoefficients={
            pace:0.20,
            shooting:0.10,
            passing:0.15,
            dibbling:0.15,
            defence:0.20,
            physics:0.20,
        };break;
        case "RB": positionCoefficients={
            pace:0.20,
            shooting:0.10,
            passing:0.15,
            dibbling:0.15,
            defence:0.20,
            physics:0.20,
        };break;
        case "CB": positionCoefficients={
            pace:0.04,
            shooting:0.01,
            passing:0.05,
            dibbling:0.05,
            defence:0.45,
            physics:0.40,
        };break;
        case "LM": positionCoefficients={
            pace:0.35,
            shooting:0.10,
            passing:0.15,
            dibbling:0.30,
            defence:0.03,
            physics:0.07,
        };break;
        case "RM": positionCoefficients={
            pace:0.35,
            shooting:0.10,
            passing:0.15,
            dibbling:0.30,
            defence:0.03,
            physics:0.07,
        };break;
        case "CDM": positionCoefficients={
            pace:0.05,
            shooting:0.04,
            passing:0.25,
            dibbling:0.14,
            defence:0.26,
            physics:0.26,
        };break;
        case "CAM": positionCoefficients={
            pace:0.06,
            shooting:0.10,
            passing:0.34,
            dibbling:0.40,
            defence:0.03,
            physics:0.05,
        };break;
        case "CM": positionCoefficients={
            pace:0.10,
            shooting:0.15,
            passing:0.30,
            dibbling:0.20,
            defence:0.10,
            physics:0.15,
        };break;
        case "RW": positionCoefficients={
            pace:0.40,
            shooting:0.10,
            passing:0.10,
            dibbling:0.35,
            defence:0.01,
            physics:0.04,
        };break;
        case "LW": positionCoefficients={
            pace:0.40,
            shooting:0.10,
            passing:0.10,
            dibbling:0.35,
            defence:0.01,
            physics:0.04,
        };break;
        case "CF": positionCoefficients={
            pace:0.11,
            shooting:0.35,
            passing:0.17,
            dibbling:0.26,
            defence:0.01,
            physics:0.10,
        };break;
        case "ST": positionCoefficients={
            pace:0.08,
            shooting:0.52,
            passing:0.11,
            dibbling:0.14,
            defence:0.01,
            physics:0.14,
        };break;
    }

    for(let field in obj){
        rate+= (parseInt(obj[field]))*positionCoefficients[field];
        console.log(rate);
    }

    console.log(document.getElementById('player').value);

    const cart=document.getElementById('cart');
    const cartRate=document.getElementById('cartRate');
    const cartPosition=document.getElementById('cartPosition');
    const playerName=document.getElementById('playerName');

    const imgLink=document.getElementById('imgLink').value;
    const playerImg=document.getElementById('playerImg');
    console.log(imgLink);
    playerImg.innerHTML=`<img src=${imgLink} height="100%" width="100%"/>`;

    console.log(playerImg.textContent);

    document.getElementById('PAC').textContent=obj.pace+' PAC';
    document.getElementById('SHO').textContent=obj.shooting+' SHO';
    document.getElementById('PAS').textContent=obj.passing+' PAS';
    document.getElementById('DRI').textContent=obj.dibbling+' DRI';
    document.getElementById('DEF').textContent=obj.defence+' DEF';
    document.getElementById('PHY').textContent=obj.physics+' PHY';

    const resultRate=Math.round(rate);
    cartRate.textContent=`${resultRate}`;
    cartPosition.textContent=`${positionChecked}`;
    playerName.textContent=document.getElementById('player').value;
    if (resultRate<65) {
        cart.className='res bronze';
    }else if(resultRate<75){
        cart.className='res silver';
    }else {
        cart.className='res gold';

    }
    console.log(cart,cartRate,cartPosition);
})

/*
const clubs= {
    "borussia Dortmund" : {
        goalsScoredPerGame:2.85,
        goalsLeftPerGame:1.45,
        rate: 83,
    },
    "barcelona" : {
        goalsScoredPerGame:2.21,
        goalsLeftPerGame:1.15,
        rate: 88,
    },
    "bauern Munich" : {
        goalsScoredPerGame:3.15,
        goalsLeftPerGame:1.45,
        rate: 93,
    },
    "man city":{
        goalsScoredPerGame:2.85,
        goalsLeftPerGame:1.45,
        rate: 83,
    },
    "man utd":{
        goalsScoredPerGame:2.85,
        goalsLeftPerGame:1.45,
        rate: 83,
    },
    "juventus":{
        goalsScoredPerGame:2.85,
        goalsLeftPerGame:1.45,
        rate: 83,
    },
    "atletico Madrid":{
        goalsScoredPerGame:2.85,
        goalsLeftPerGame:1.45,
        rate: 83,
    }
}

const teamsForAdding=document.getElementById('teamsForAdding');
const teamsForCompetition=document.getElementById('teamsForCompetition');
let i=0;
let teamsForAddingArr=[];
let teamsForCompetitionArr=[];
for (let club in clubs ){
    teamsForAddingArr[i]=club;

}*/

/*const matchEvents=[
    `<div class="card red"></div>`,
    `<div class="card yellow"></div>`,
    `<div class="change"></div>`,
    `<div class="goal"></div>`,
]*/






