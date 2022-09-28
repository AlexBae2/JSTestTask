"use strict"

const randomNumber = (min, max) => {
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

const fillArray = ([...arr]) => {
    for(let i = 0; i < 100; i++){
        arr[i] = randomNumber(-100, 100)
    }
    return arr
}

const fillTwoDimensionalArray = ([...arr]) => {
    let counter = 0
    for(let i = 0; i < 10; i++){
        arr[i] = []
        for(let j = 0; j < 10; j++){
            arr[i][j] = randomArr[counter++]
        }
    }
    return arr
}

const checkRepeatSign = ([...arr]) => {
    let counter = 1
    let countReplacement = 0
    for(let j = 1; j < 10; j++){
        arr[j-1]*arr[j] > 0 ? counter++ : counter = 1;
        if (counter == 3){
            countReplacement++;
            counter = 1;
            j++
        }
    }
    return countReplacement
}


let randomArr = []
let arr = []
randomArr = fillArray(randomArr)
arr = fillTwoDimensionalArray(arr)

let totalMin = arr[0][0]
let lineWithTotalMinValue = 0
let minPerLine = []
let countReplacePerLine = []

for(let i = 0; i < 10;i++){
    minPerLine[i] = Math.min(...arr[i])
    countReplacePerLine[i] = checkRepeatSign(arr[i])
    if(totalMin > Math.min(...arr[i])){
        totalMin = Math.min(...arr[i])
        lineWithTotalMinValue = i
    }
}

for(let i = 0; i < 10; i++){
    console.log(arr[i], `minValueInLine: ${minPerLine[i]}`, `countReplaceInLine:${countReplacePerLine[i]}`, `${lineWithTotalMinValue === i ? '*' : ''}`)
}