//api key a300a7a9db8bfc85777c8db570674ef3

window.addEventListener('load',()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(`.temperature-description`);
    let temperatureDegree = document.querySelector(`.temperature-degree`);
    let locationTimezone = document.querySelector(`.location-timezone`);
    
    
    //using this it pulls up current location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
    
            //changed set long and lat at end of link from website
    const proxy = `https://cors-anywhere.herokuapp.com/`   
    const api = `${proxy}https://api.darksky.net/forecast/a300a7a9db8bfc85777c8db570674ef3/${lat},${long}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(date => {
                //it says there is a promise error here that I don't see 
                console.log(data);
                const {temperature, summary } = data.currently;
                //set DOM elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
            });
        
        });
    }
    });