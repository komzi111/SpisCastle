
 const changeView = $("#changeViewPage");
 changeView.on('click', function(){
        $('#dark').css({background: "black", color:"green" })
 });


 function vypis(udaje){
    console.log(udaje);
  }


  $.getJSON("http://api.openweathermap.org/data/2.5/weather?&lat=49&lon=20.75&units=metric&APPID=8641355d0bdfa52a49f4e9a42560adf0",spracuj);

             function spracuj(udaje){
                const wheatherText = `
                <h1>Aktuálne počasie</h1>
                <div class="box-wheather">
                <div class="container">
                    <div class="row">
                        <h1 class="text-danger">${udaje.name}</h1>  
                        <ul>
                            <li>&nbsp;<i class="fas fa-thermometer-three-quarters"></i> &nbsp;Teplota:  ${udaje.main.temp}°C</li>
                            <li><i class="fas fa-cloud"></i> Oblačnosť: ${udaje.clouds.all}%</li>
                            <li><i class="fas fa-wind"></i> &nbsp;Vietor: ${udaje.wind.speed}m/s </li>
                        </ul>
                    </div>
                </div>
                </div>
               `;
                
               $("#wheather").html(wheatherText);
               }

               
               


