console.log("index.js connect");

var arr = [];

function showArray(arr) {
    document.getElementById("showArr").innerHTML = arr;
}

function showResult(result,divName){
    document.getElementById(divName).innerHTML = result;
}

function themSo() {

    if(document.getElementById("soN").value === ''){
        alert("Vui lòng nhập vào một số")
        return;
    }

    var value = +document.getElementById("soN").value;
    arr.push(value);
    showArray(arr);
}

function truSo() {
    arr.pop();
    showArray(arr);
}

function xoaSo() {
    arr = [];
    showArray(arr);
}

// Bai 1

function tongSoDuong() {
    var result = 0;

    arr.forEach(function(n,i) {
        if(n >= 0){
            result += n;
        }
    })
    
    showResult(result,"showBai1");
}

// Bai 2

function demSoDuong() {
    var count = 0;
    
    arr.forEach(function(n,i) {
        if(n >= 0){
            count++;
        }
    })

    showResult(count,"showBai2");
}

// Bai 3

function timSoNhoNhat() {
    var soNhoNhat = Number.MAX_VALUE;

    arr.forEach(function(n) {
        if(n < soNhoNhat){
            soNhoNhat = n;
        }
    })

    showResult(soNhoNhat,"showBai3")
}

// Bai 4

function timSoDuongNhoNhat(){
    var soNhoNhat = Number.MAX_VALUE;

    arr.forEach(function(n) {
        if(n >= 0 && n < soNhoNhat){
            soNhoNhat = n;
        }
    })

    showResult(soNhoNhat,"showBai4")
}

// Bai 5

function soChanCuoiCung() {
    var result = -1;

    arr.forEach(function(n){
        if(n % 2 == 0){
            result = n;
        }
    })

    showResult(result,"showBai5")

}

// Bai 6

function doiHaiViTri() {

    var viTriMot = +document.getElementById("viTri1").value;

    var viTriHai = +document.getElementById("viTri2").value;

    if(viTriMot > arr.length || viTriHai > arr.length || viTriMot < 0 || viTriHai < 0) {
        alert("Điền vào vị trí khác")
    }else {
        viTriHai--;
        viTriMot--;
        var temp = arr[viTriMot];
        arr[viTriMot] = arr[viTriHai];
        arr[viTriHai] = temp;
    }
    
    document.getElementById("showBai6").innerHTML = arr;
}

function compareNumbers(a,b){
    return a - b;
}

// Bai 7

function sortArray(){
    arr.sort(compareNumbers)

    document.getElementById("showBai7").innerHTML = arr;
}

// Bai 8
function isPrime(n){
    var isPrime = true;
    if (n < 2) {
        isPrime = false;
        return isPrime;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                return isPrime;
            }
        }
    }
    return isPrime;
}

function coPrimeKo() {
    var index = -1;

    for(var i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])){
            console.log(arr[i] + " prime : " + isPrime(arr[i]));
            index = i;
            break;
        }
    }

    showResult(index,"showBai8");
}

// Bai 9

var arr2 = [];

function themSoK() {

    if(document.getElementById("soK").value === ''){
        alert("Vui lòng nhập vào một số")
        return;
    }

    var value = +document.getElementById("soK").value;
    arr2.push(value);
    document.getElementById("showBai9Arr").innerHTML = arr2;
}


function demSoNguyen(){

    var count = 0;

    arr2.forEach(function(n) {
        if(Number.isInteger(n)){
            count++;
        }
    })

    showResult(count,"showBai9");

}

// Bai 10

//Compare ount between positive and negative numbers.

function compareCount(){

    var countP = 0;
    var countN = 0;
    var result = "Số dương = Số âm"

    arr.forEach(function(n) {
        if(n > 0){
            countP++;
        }else if(n < 0){
            countN++;
        }
    })

    if(countP > countN){
        result = "Số dương > Số âm"
    }else if(countN > countP){
        result = "Số dương < Số âm" 
    }

    showResult(result,"showBai10");

}