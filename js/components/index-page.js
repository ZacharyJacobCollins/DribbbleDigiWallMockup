new Vue({
  el: '#index-page',
  data: {
    
  }, 
  components: {
      navicon: {
          props: ['icon'],
          template: '<div class="nav-icon-container valign-wrapper"><i class="material-icons valign">{{ icon }}</i></div>'
      }
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
      }
  }
});