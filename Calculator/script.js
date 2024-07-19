let outputbox =document.getElementById("display-screen")

function print(numbers){
    outputbox.value +=numbers
}

function calculate(){
try{

    outputbox.value = eval(outputbox.value);
}
catch(err)
{
    alert("Invalid")
    outputbox.value="";
}
}
function All_clear()
{
    outputbox.value="";
}
function del(){
    outputbox.value = outputbox.value.slice(0,-1)
}