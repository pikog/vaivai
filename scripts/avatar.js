$(document).ready(function () {

  function goAvatar() {
    var idAvatar = $('input[type=radio]:checked').val();
    var text = $('input[type=text]').val();
    var canvas = $('#canvasAvatar')[0].getContext('2d');
    var fond = $('img#fondCanvas')[0];
    var avatar = $('img#imgAvatar' + idAvatar)[0];
    var bulle = $('img#bulle')[0];
    canvas.clearRect(0, 0, 500, 300);
    canvas.drawImage(fond, 0, 0);
    canvas.drawImage(avatar, 0, 0, 512, 512, 0, 100, 200, 200);
    canvas.drawImage(bulle, 0, 0);

    canvas.font = "50px vaivai";
    $.each(splitText(text), function (index, value) {
      if (index < 4) {
        canvas.fillText(value, 160, 40 + index * 30, 320);
      } else {
        return false;
      }
    });

    $('a#linkImgCanvas').attr("href", $('#canvasAvatar')[0].toDataURL());
  }

  function splitText(text) {
    return text.match(/.{1,40}/g)
  }

  goAvatar();

  $('input[type=radio]').change(function () {
    goAvatar();
  });

  $('#update').click(function (e) {
    e.preventDefault();
    goAvatar();
  });

});
