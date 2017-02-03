$(document).ready(function () {
  //Function avatar generation 
  function goAvatar() {
    var idAvatar = $('input[type=radio]:checked').val();
    var text = $('input[type=text]').val();
    var canvas = $('#canvasAvatar')[0].getContext('2d');
    var fond = $('img#fondCanvas')[0];
    var avatar = $('img#imgAvatar' + idAvatar)[0];
    var bulle = $('img#bulle')[0];
    //Reset canvas
    canvas.clearRect(0, 0, 500, 300);
    //Draw image element
    canvas.drawImage(fond, 0, 0);
    canvas.drawImage(avatar, 0, 0, 512, 512, 0, 100, 200, 200);
    canvas.drawImage(bulle, 0, 0);

    //Write text
    canvas.font = "50px vaivai";
    
    //Eeach line contains 40 chars
    $.each(splitText(text), function (index, value) {
      if (index < 4) {
        canvas.fillText(value, 160, 40 + index * 30, 320);
      } else {
        return false;
      }
    });

    //Set link for download image in Base64
    $('a#linkImgCanvas').attr("href", $('#canvasAvatar')[0].toDataURL());
  }

  //Function to split text every 40 chars
  function splitText(text) {
    return text.match(/.{1,40}/g)
  }
  
  //When background img is ready launch generation
  $('img#fondCanvas').ready(function () {
      goAvatar();
  });

  //Update canvas when avatar change
  $('input[type=radio]').change(function () {
    goAvatar();
  });

  //Update canvas when click on button
  $('#update').click(function (e) {
    e.preventDefault();
    goAvatar();
  });

});
