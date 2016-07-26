new Vue({
    el: '#index-page',
    data: {
        currentTime: '',
        tabs: [
            {
              title: 'title', 
              info: 'alert'
            },
            {
              title: 'title', 
              info: 'alert'
            },
            {
              title: 'title', 
              info: 'alert'
            },
            {
              title: 'title', 
              info: 'alert'
            },
            {
              title: 'title', 
              info: 'alert'
            },
            {
              title: 'title', 
              info: 'alert'
            },
        ]
    }, 
    ready: function() {
        this.startTime();
    },
    components: {
        navicon: {
            props: ['icon'],
            template: '<div class="nav-icon-container valign-wrapper"><i class="material-icons valign">{{ icon }}</i></div>'
        }, 
    },
    methods: { 
        fullscreen: function() {
            //make body go fullscreen
            var elem = document.body;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        }, 
        startTime: function() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = this.checkTime(m);
            this.currentTime = h + ":" + m;
            var t = setTimeout(this.startTime, 500);
        },
        checkTime: function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }
    }
});