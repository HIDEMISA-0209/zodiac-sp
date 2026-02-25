


// とりまGSAPって神だからこれからはアニメーションとかこっち使うようにして！（特に無限ループ）
// https://ics.media/entry/220822/



// 純粋なjsじゃなくてjQuery（ジェイクエリー）使ってる！
$(function () {
  const $menuBtn = $('#menu-btn');
  const $info = $('#info');
  const $overlay = $('#overlay');
  const $scards = $('#scards');


  // ハンバーガーメニューたち
  $menuBtn.on('click', function () {
    $(this).toggleClass('active'); // プラスボタンの部分
    $info.toggleClass('active');   // メニュー表示する
    $overlay.toggleClass('active');  //オーバーレイ表示する
  });


  // メニューのリンク押したらスクロール＆自動で閉じる
  $('#info a').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 500);
    }

    $menuBtn.removeClass('active');
    $info.removeClass('active');
    $overlay.removeClass('active');
  });




  // 星座ボタン押したらカード表示される
  $('.s-list li button').on('click', function () {
    const sign = $(this).closest('li').data('sign'); // ariesとかpiscesとかのヤツ

    $('.s-card').removeClass('active'); // いったん全部非表示にする
    $('#card' + sign).addClass('active'); // 対応するカードだけ表示

    // オーバーレイの表示
    $scards.addClass('active');
    $overlay.addClass('active');
  });


  // カードの中の戻るボタン
  $('.s-card button').on('click', function () {
    $scards.removeClass('active');
    $overlay.removeClass('active');
  });


  // 戻るでオーバーレイなくなる
  $overlay.on('click', function () {
    $menuBtn.removeClass('active');
    $info.removeClass('active');
    $scards.removeClass('active');
    $('#fsns').removeClass('active');
    $overlay.removeClass('active');
  });




  // 購入ボタン押したら中身出てくるよ〜んの部分
  $('#product button').on('click', function () {
    $('#pbtn').addClass('active');
    $('#overlay').addClass('active');
  });

  // 購入の戻るボタン
  $('#pbtn button').on('click', function () {
    $('#pbtn').removeClass('active');
    $('#overlay').removeClass('active');
  });




  // FAQの部分
  $('.js-faq').on('click', function () {
    const $dt = $(this);
    const $dd = $dt.next('dd');

    // プラスボタン動かしてる
    $dt.toggleClass('faq-open');
    $dd.toggleClass('faq-open');
  });




  // フッターSNS押したら中身出てくるよ〜んの部分
  $('footer .sns button').on('click', function () {
    $('#fsns').addClass('active');
    $('#overlay').addClass('active');
  });

  // フッターの戻るボタン
  $('#fsns button').on('click', function () {
    $('#fsns').removeClass('active');
    $('#overlay').removeClass('active');
  });




  // こっからScrollReveal！
  ScrollReveal().reveal(
    'h2, .grid-bg, .c-txt, .p-imginfo, .s-list li, .faq-box, footer h3, footer li, footer p',
    {
      reset: false,      // スクロール戻しても再実行しない!
      distance: '60px',  // 下からどれくらい動くか
      duration: 1000,     // ふわっとする長さ
      easing: 'ease-out',
      origin: 'bottom',
      opacity: 0
    });


  ScrollReveal().reveal(
    'h1, #top .inner, .mv-inner',
    {
      duration: 500,
      opacity: 0,
      distance: '0px',
      easing: 'ease-out',
      interval: 200
    }
  );


  ScrollReveal().reveal(
    '#product .inner, #faq .inner',
    {
      duration: 1000,
      opacity: 0,
      distance: '0px',
      easing: 'ease-out',
      interval: 200
    }
  );
});