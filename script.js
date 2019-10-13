const OWMBaseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const ApiKey = "c44375da74fcad4a7a252ad4e831ec43";


function buildUrl(city) {
    return OWMBaseUrl + city + "&units=metric&lang=de&appid=" + ApiKey;
}

new Vue({
    el: "#weatherApp",
    data: {
        format: 'C',
        time: new Date(),
        phase: 'fa-adjust',
        apiResults: '',
        location: '',
        cityName: '',
        temp: 0,
        geoCoordinates: '',
        cloud: '',
        humidity: ''
        

    },
    methods: {
        setTime: function () {
            var timeAtLoad = this.time;
            return timeAtLoad.toLocaleTimeString('it-IT');
        },
        setPhase: function () {
            var timeOfDayUTC = new Date().getUTCHours();
            var timeOfDay = timeOfDayUTC + 8;

            if (timeOfDay > 6 && timeOfDay < 18) {
                return 'fa-sun'
            } else {
                return 'fa-moon'
            }
        },
        getWeather(city) {
            let url = buildUrl(city);
            axios
                .get(url)
                .then(response => {
                    this.apiResults = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getData() {
            this.getWeather(this.location);
            
            this.cloud = "Bewölkung: " + this.apiResults.clouds.all + " " + this.apiResults.weather[0].description;
            this.temp = this.apiResults.main.temp;
            this.humidity = "Luftfeuchtigkeit: " + this.apiResults.main.humidity + "%";
            this.geoCoordinates = "Coordinates: [" + this.apiResults.coord.lat + ", " + this.apiResults.coord.lon + "]";
        },
        onSubmit() {
            this.getData();


        }
    }
});