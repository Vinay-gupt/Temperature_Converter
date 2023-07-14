const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;
    const currentname = event.target.name;
    
    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;
        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;
            
            default:
                break;
            }
            if(currentname==="Celcius" && currentValue > 35){
                document.getElementById("main").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/08/23/00/23/solar-3624954_640.jpg')";
                document.getElementById("note").innerHTML="Temperature outside is Hot"
        
            }
            else if(currentname=="Celcius" && currentValue<25){
                document.getElementById("main").style.backgroundColor = " rgba(0, 212, 255, 0.3)";
                document.getElementById("note").innerHTML="Temperature outside is cold "
                document.getElementById("main").style.backgroundImage = "url('https://media.istockphoto.com/id/494811470/photo/winter-background-snowy-landscape-with-warning-sign.jpg?b=1&s=170667a&w=0&k=20&c=IXfugTuVTxjVEw_UdMIy6etE4amA6XrIufPELuIeyQM=')";
        
        
            }
            else if(currentname=="Celcius" && (currentValue>25 && currentValue<36) ){
                document.getElementById("main").style.color = "black";
                document.getElementById("note").innerHTML="Temperature outside is pleasant"
                document.getElementById("main").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_640.jpg')";
            }
        }
        