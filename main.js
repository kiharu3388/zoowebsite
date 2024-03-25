(function () {

    var bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector('#background_video'),
  
      // Container element
      container: document.querySelector('body'),
  
      // Resize
      resize: true,
  
      // autoplay: false,
  
      isMobile: window.matchMedia('(max-width: 768px)').matches,
  
      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          src: 'animals.mp4',
          type: 'video/mp4'
        }
      ],
  
      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('#video_cover').style.display = 'none';
      }
    });
  }());

  $(function() {
    $('.nav-link').hover(
      function(){
      $('.nav-link').css('border','16px solid #00c9e8');
        $('.nav-link').css('transition','0.5s');
      $('.nav-link').css('color','#FCF16E');
        $('.nav-link').css('transition','0.5s');
      },
      function(){
      $('.nav-link').css('border','16px solid #FFFFFF');
      $('.nav-link').css('color','#FFFFFF');
    }
   );
   });