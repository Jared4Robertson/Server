
            function setup(){
                noCanvas();
                const video = createCapture(VIDEO);
                video.size(320, 240);



                let lat, lon;
                const button = document.getElementById('submit');
                button.addEventListener('click', async event =>{
                        video.loadPixels();
                        const image64 = video.canvas.toDataURL();
                        const data = {lat, lon, image64};

                        const options = {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers:{
                                'Content-Type': 'application/json'
                            }
                        };
                        const response = await fetch('/api', options);
                        const json = await response.json();
                        console.log(json);
    
                })
    
    
    
                if('geolocation' in navigator){
                    console.log("geolocation available");
                    navigator.geolocation.getCurrentPosition(async position => {
                        console.log(position);
                        lat = position.coords.latitude;
                        document.getElementById("latitude").textContent = lat;
                        lon = position.coords.longitude;
                        document.getElementById("longitude").textContent = lon;
                    })
                        
                }

            }