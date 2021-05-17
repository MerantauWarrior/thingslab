$( document ).ready(function() {
  console.log('ready');
  $('.js-control').click(function (e) {
    e.preventDefault();
    var cId = $(this).attr('href');
    $('.box__item').css('display', 'none');
    $('.box__item'+cId).css('display', 'flex');
  });
  $('.switch__link').click(function (e) {
    e.preventDefault();
    var tabId = $(this).attr('href');
    $('.switch__link').removeClass('switch__link_active');
    $(this).addClass('switch__link_active');
    $('.config__tab').removeClass('config__tab_active');
    $('.config__tab'+tabId).addClass('config__tab_active');
  });
  $('.password__show').click(function () {
    var showText = $(this).text() === 'show' ? 'hide' : 'show';
    $(this).text(showText);
    var inpType = $(this).closest('.password').find('input.inp').attr('type').toString() === 'password'? 'text': 'password';
    $(this).closest('.password').find('input.inp').attr('type', inpType);
    console.log(inpType)
  });
  $('.network-list__item').click(function () {
    $('.modal').show();
  })
  $('.modal__form-btn-cancel').click(function (e) {
    e.preventDefault();
    $('.modal').hide();
  })
});