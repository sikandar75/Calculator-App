function add(num1){
    var number = document.getElementById("num");
    number.value += num1;

}
function left(){
    var number = document.getElementById("num");
    number.value = " ";
}
function result(){
    var number = document.getElementById("num");
    number.value = eval(number.value);
}
