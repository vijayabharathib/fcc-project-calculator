document.addEventListener("DOMContentLoaded",function(e){
  var recentlyResulted=false;
  console.log("content ready");
  var buttons=document.querySelectorAll("button");
  var clickHandler=function(event){
    operations(this.innerText);
  };
  for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=clickHandler;
  }
  document.onkeypress=function(event){
    event.preventDefault();
    operations(event.key);
  };
  //#TODO:1 34enter.4 results in 4 not 34.4 (due to recentlyResulted flag)
  function operations(input){
    console.log("incoming:" + input);
    var display=document.querySelector(".input");
    console.log("existing:" + display.value);
    if(display.value=="NaN")
      display.value='';
    switch(input){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        console.log("number input, recent result? "+ recentlyResulted);
        if(recentlyResulted) {
          display.value=input;
        } else {
          display.value=display.value+input;
        }
        recentlyResulted=false;
        break;
      case '.':
        var exp=/(\+|\*|\/|-)\d+$/;
        console.log(exp.test(display.value));
        if(display.value.indexOf('.')==-1 || exp.test(display.value)){
          display.value=display.value+input;
        }
        break;
      case '+':
      case '/':
      case '*':
      case '-':
        if(display.value.indexOf('+')!=display.value.length-1 &&
            display.value.indexOf('-')!=display.value.length-1 &&
            display.value.indexOf('/')!=display.value.length-1 &&
            display.value.indexOf('*')!=display.value.length-1 ){
          display.value=display.value+input;
        }
        recentlyResulted=false;
        break;
      case 'Delete':
        display.value=display.value.substr(0,display.value.length-1);
        break;
      case 'AC':
      case 'c':
        display.value="";
        break;
      case '=':
      case 'Enter':
        strExpression=display.value;
        display.value=resolveExpression(strExpression);
        /**
          * 34 Enter . 4 resulted in 4 due to recentlyResulted being true after enter
          * validating input and output for equality will see if there was any result
          * if the expression was returned as it was due to lack of operand
          * recentlyResulted is not true - hence will be left false
          */
        if(strExpression!==display.value)
          recentlyResulted=true;
          
        console.log('resolved');
        break;
    }
  };
  function resolveExpression(expression){
    var result=0;
    var arr=expression.split(/[-\+\*\/]+/);
    console.log(arr);
    var arrOperands=expression.split(/[^-\+\*\/]+/);
    console.log(arrOperands);
    arrOperands.shift(); //remove leading empty operand;
    arrOperands.pop(); //remove trailing empty operand;
    if(arrOperands.length==0) //if there are no operands
      return expression; //do nothing on the input expression
    for(var i=0;i<arrOperands.length;i++){
      var a=parseFloat(arr[i]);
      var b=parseFloat(arr[i+1]);
      switch (arrOperands[i]) {
        case '+':
          result=a+b;
          break;
        case '-':
          result=a-b;
          break;
        case '*':
          result=a*b;
          break;
        case '/':
          result=a/b;
          break;
      }
      arr[i+1]=result;
    }
    console.log("result: "+result);
    return Number.isInteger(result) ? result: result.toFixed(3);
  }

  function friendlyFormat(number,max_digit){

  }
});
