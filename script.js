function clearAll()
{
    document.getElementById('display').value='';
}

function deleteOne()
{
    let display = document.getElementById('display');
    display.value = display.value.toString().slice(0,-1);
}

function calculate()
{
    let display = document.getElementById('display');
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value='Error';
    }
}