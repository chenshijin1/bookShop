// 改变商品数量
// window.onload = function(){
//     var changeNumDivs = document.getElementsByClassName("changeNum");
//     for (var i = 0; i < changeNumDivs.length; i++) {
//         var changeNumDiv = changeNumDivs[i];
//         changeNum(changeNumDiv);
//     }
// }

/*
value-商品数量
通过视图层的value来改变逻辑层的value
*/
// var setValues=function () {
//     var changeNumDivs = document.getElementsByClassName("changeNum");
//     for (var i = 0; i < changeNumDivs.length; i++) {
//         var changeNumDiv = changeNumDivs[i];
//         setValue(changeNumDiv);
//     }
//     // oInput.setAttribute("value") = value;
// }
/*只能改变一件商品
通过用户输入增减商品数量
改变商品数量*/
var setValue=function () {
    console.log("setValue");
    var changeNumDivs = document.getElementsByClassName("changeNum");
    var changeNumDiv = changeNumDivs[0];
    // var  oStrong = changeNumDiv.getElementsByTagName('strong');
    var oInputAmount = changeNumDiv.getElementsByClassName('amount');
    var oInputChange = changeNumDiv.getElementsByClassName('count');
    // var value = Number(oStrong[0].innerText);


    // oInputAmount.count.value.innerHTML = value;
    oInputChange.value = 0;
    // restrictInput();

}

/*改变多件商品数量
通过用户输入增减商品数量
改变商品数量*/


// 判断小计不能为负值和零值
/*如果不合法
则把oInputChange[0].value设置为0*/
// todo
var restrictInput=function () {
    console.log("restrictInput");
    var changeNumDivs = document.getElementsByClassName("changeNum");
    var changeNumDiv = changeNumDivs[0];
    var  oStrong = changeNumDiv.getElementsByTagName('strong');
    var oInputAmount = changeNumDiv.getElementsByClassName('amount');
    var oInputChange = changeNumDiv.getElementsByClassName('count');
    // var value = Number(oStrong[0].innerText);
    var oldnum=Number(oInputAmount[0].value) ;
    var change = Number(oInputChange[0].value);
    var num = oldnum + change;
    console.log("restrictInput num", num);

    if (num < 0) {
        alert("请输入合法数量");
        oInputChange[0].value = 0;
    }

    // oInputAmount.count.value.innerHTML = 1;
    // oInputChange[0].value = 0;
}



// console.log("value", getValue());

/*var changeNum=function (changeNumDiv) {

    var  oStrong = changeNumDiv.getElementsByTagName('strong');


    var sum = 0;
    var emMax = 0;

    fn1(changeNumDiv);



    function fn1(changeNumDiv){
        var oBtn = changeNumDiv.getElementsByTagName('input');
        console.log("oBtn", oBtn);
        var	oStrong = changeNumDiv.getElementsByTagName('strong')[0];

        var n1 = Number(oStrong.innerHTML);


        oBtn[0].onclick = function(){
            n1--;
            if(n1<0){
                n1 = 0;
            }
            oStrong.innerHTML = n1;
            // oSpan.innerHTML = n1*n2+'元';
        };
        oBtn[1].onclick = function(){
            n1++;
            oStrong.innerHTML = n1;
            // oSpan.innerHTML = n1*n2+'元';
        };
    }
}*/
