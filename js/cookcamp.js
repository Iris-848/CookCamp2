$('.carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.show').modaal();

const share_alert = (share, recipe)=>{
    $(share).on('click', ()=>{
    alert(recipe + 'のレシピをシェアしました♪');
    $('.show').modaal('close');
    });
};
share_alert('#share1', 'イタリアン');
share_alert('#share2', 'フレンチ');
share_alert('#share3', 'ダイエット');
share_alert('#share4', 'エスニック');
