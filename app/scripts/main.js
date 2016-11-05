/**
  * wait until the doc is ready to obey orders
  * bind click handler to GUI buttons
  * bind keypress handler to the whole document
  */
document.addEventListener("DOMContentLoaded",function(e){
  var recentlyResulted=false;


  /**
    * get the GUI button's text
    * process it on top of current expression
    * and display the resulting value/expression
    */
  var clickHandler=function(event){
    var display=document.querySelector(".input");
    var expression=display.value;
    display.value=operations(expression,this.innerText);
  };

  /**
    * get handle to all buttons
    * loop through each button and bind click handler
    */
  var buttons=document.querySelectorAll("button");
  for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=clickHandler;
  }

  /**
    * stop default keypress processing (to avoid double chars)
    * pass the key pressed along with curret expression
    * display resulting value/expression
    */
  document.onkeypress=function(event){
    event.preventDefault();
    var display=document.querySelector(".input");
    var expression=display.value;
    display.value=operations(expression,event.key);
  };

  /**
    *
    */
  function operations(expression,input){
    var result=expression;


    switch(input){
      //just keep adding the numbers
      //unless the expression is a result of last evaluation
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
      //start new number if the expression is a result of last evaluation
        if(recentlyResulted) {
          result=input;
        } else {
          result=expression+input;
        }
        recentlyResulted=false;
        break;
      case '.':
        //allow floats if the expression has numbers at the end , hence $
        //look for optional operands in front of the number
        //or there are no dots yet which will give indexOf as -1
        var exp=/(\+|\*|\/|-)\d+$/;
        if(expression.indexOf('.')==-1 || exp.test(expression)){
          result=expression+input;
        }
        break;
      case '+':
      case '/':
      case '*':
        //add these operands to the result
        //as long as the last char is not one of these operands
        if(expression.indexOf('+')!=expression.length-1 &&
            expression.indexOf('-')!=expression.length-1 &&
            expression.indexOf('/')!=expression.length-1 &&
            expression.indexOf('*')!=expression.length-1 ){
          result=expression+input;
        }
        recentlyResulted=false;
        break;
      case '-':
        /**
          * special operand case
          * allow minus even if previous one was an operand
          * because the following keypress could be a number
          * and this hyphen might be a prefix to denote negative number
          * but do not allow more than two operands
          * i.e --, *-, /-, +- are allowed, ---, +-- etc are not allowed
          */
        var lastTwo=expression.substr(expression.length-2,expression.length);
        if(!(/[-\+\/\*]{2}/.test(lastTwo))) //if the last two chars are not operands
          result=expression+input;
        recentlyResulted=false;
        break;
      case 'Delete':
        result=expression.substr(0,expression.length-1);
        break;
      case 'AC':
      case 'c':
        result="";
        break;
      case '=':
      case 'Enter':
        strExpression=expression;
        result=resolveExpression(strExpression);
        /**
          * The following inputs (34 Enter . 4) resulted in 4 due to recentlyResulted being true after enter
          * validating input and output for equality will see if there was any result
          * if the expression was returned as it was due to lack of operand
          * recentlyResulted is not true - hence will be left false
          */
        if(strExpression!==result)
          recentlyResulted=true;
        break;
    }
    return result;
  };

  function resolveExpression(expression){
    var result=0;
    //var arr=expression.split(/[-\+\*\/]+/);
    var arr=expression.split(/[-\+\*\/]+/);
    var arrOperands=expression.split(/[^-\+\*\/]+/);



    if(arrOperands.shift()=='-') {
      //first number must have been negative;
      arr.shift(); //remove the first empty element
      arr[0]=parseFloat(arr[0])*-1;
    } //remove leading empty operand;
    arrOperands.pop(); //remove trailing empty operand;
    if(arrOperands.length==0) //if there are no operands
      return expression; //do nothing on the input expression
    for(var i=0;i<arrOperands.length;i++){
      var negative=1; //initially assume positive;
      if(arrOperands[i].length==2 && arrOperands[i][1]=='-'){
        //operand has two symbols and last one is minus
        //it belongs to the upcoming number
        //hence multiply by -1;
        negative=-1;
        arrOperands[i]=arrOperands[i][0];
      }

      var a=parseFloat(arr[i]);
      var b=parseFloat(arr[i+1])*negative;
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

    return Number.isInteger(result) ? result: result.toFixed(3);
  }

  function friendlyFormat(number,max_digit){

  }
});
