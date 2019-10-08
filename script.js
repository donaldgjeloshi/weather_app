new Vue({
    el: "#vue_app",
    data: {
        temp: 0,
        format: 'C',
        time: new Date(),
        phase: 'fa-adjust'
    },
    methods: {
        setTime: function(){
            var timeAtLoad = this.time;
            return timeAtLoad.toLocaleTimeString('it-IT');
        },
        setPhase: function() {
            var timeOfDayUTC = new Date().getUTCHours();
            var timeOfDay = timeOfDayUTC + 8;
            
            if (timeOfDay > 6 && timeOfDay < 18) {
                return 'fa-sun'
            } else {
                return 'fa-moon'
            }
        }
    }


});