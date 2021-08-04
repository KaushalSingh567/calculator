function cal()
{
    var x=document.getElementById("operator").value;
    var b=parseInt(document.getElementById("num1").value);
    var c=parseInt(document.getElementById("num2").value);
    var d=document.getElementById("num3");

switch (x)
{
case "select":
    d.value;
    case "+":
        d.value=b+c;
        
       break;        
       case "-":
        d.value=b-c;
    
       break;
       case "*":
        d.value=b*c;
       
       break;
       case "/":
        d.value=b/c;
    
       break;
       case "%":
        d.value=b**b;
        
       break;
       case "":
        d.value=b*b*b;
    
       break;


}

}