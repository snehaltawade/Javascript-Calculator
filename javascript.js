//Displays entered input
var flag=0;
function display(val){
   
    if(val.toString().match(/^[-+*/]$/))
        flag=0;
    if(flag==1){
        clearfun();
        flag=0;
    }
    document.getElementById("display").value+=val;
}

//Clears value
function clearfun(){
    document.getElementById("display").value='';
}
function clearLast(){
    let expression=document.getElementById("display").value;
    document.getElementById("display").value=expression.substr(0,expression.length-1);;
}
//Evaluates the expression
function compute(e){
    let expression=document.getElementById("display").value;
    let computedvalue=0;
    computedvalue=eval(expression);
    document.getElementById("display").value=computedvalue?computedvalue:'';
    flag=1;
    e?.preventDefault()
    
}
//To handle keyboard input
addEventListener("keypress",function(event){
    console.log(event)
    if(event.key=='Enter'){
       
        compute(event);
        event.preventDefault;
    }
    if(event.key.match(/^[0-9-+*/]$/)){
        document.getElementById("display").value+=event.key;

    }
})

function power(){
   
    let expression=document.getElementById("display").value
    var splitArray=expression.split(/[-+*/]/);
    computedvalue=Math.pow(parseInt(splitArray[splitArray.length-1]),2)
    var str=splitArray.slice(0,splitArray.length-2).join();
    var exp=str.concat(computedvalue);
    document.getElementById("display").value=eval(exp);
}

function fraction(){
   
    let expression=document.getElementById("display").value
    var splitArray=expression.split(/[-+*/]/);
    computedvalue=1/(parseInt(splitArray[splitArray.length-1]))
    var str=splitArray.slice(0,splitArray.length-2).join();
    var exp=str.concat(computedvalue);
    document.getElementById("display").value=eval(exp);
}
