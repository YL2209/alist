

//Butterfly主题自带样式提示弹窗
// function SnackbarIMGES(text, time) {
//   const { position, bgLight, bgDark } = GLOBAL_CONFIG.Snackbar
//   const bg = document.documentElement.getAttribute('data-theme') === 'light' ? bgLight : bgDark
//   Snackbar.show({
//     text: '✨ ' + text + ' ✨',
//     backgroundColor: bg,
//     pos: position,
//     actionText: '🍭🔮🎨🎊🍬',
//     duration: time,
//     // showAction: false,
//     // onActionClick: function(e) {
//     // location.reload()
//     // },
//   });
// };




//动图背景切换
var fruItsIMGes = [
  "https://img.zcool.cn/community/012dfd5ecefc97a8012066216406ca.gif",
  "https://img.zcool.cn/community/0141af608011ad11013e3b7d148380.gif",
  "https://img.zcool.cn/community/01ba835acab6f5a801212573c70956.gif",
  "https://img.zcool.cn/community/01930f5acab717a80121257389449d.gif",
  "https://img.zcool.cn/community/014dea5acab731a801212573876fdc.gif",
  "https://img.zcool.cn/community/0147015acab724a8012062e339de1b.gif",
  "https://img.zcool.cn/community/01cf2a5acab726a8012062e39c7a6b.gif",
  "https://img.zcool.cn/community/014c8f5acab701a801212573a1515a.gif",
  "https://img.zcool.cn/community/01fa806100b8e211013f4720d1793b.gif",
  "https://img.zcool.cn/community/016f146100b8ea11013eaf7055e47b.gif",
  "https://img.zcool.cn/community/0100036100b8ea11013eaf701a9fc1.gif",
  "https://img.zcool.cn/community/018bdc6100b92f11013eaf70ff523d.gif",
  "https://img.zcool.cn/community/0104d16100b8ea11013f47208ce63e.gif",
  "https://img.zcool.cn/community/0130245d3e38cea80120695cbd5c36.gif",
  "https://img.zcool.cn/community/01dfbb5d3e38d0a8012187f46d3d9c.gif",
  "https://img.zcool.cn/community/014ab75d3e38d0a80120695c137b17.gif",
  "https://img.zcool.cn/community/0170145d3e38cba80120695ccc4669.gif",
  "https://img.zcool.cn/community/018b865d3e38c9a8012187f44eb478.gif",
  "https://img.zcool.cn/community/014b715d3e38c8a80120695c1c82d6.gif",
  "https://img.zcool.cn/community/019f835d3e38cba8012187f4d0b9bc.gif",
  "https://img.zcool.cn/community/01d71c5d3e38c8a8012187f4b5acc5.gif"
];
//动图背景切换
var openImag3 = 0;
var openIMAgesQU = 0;
var iMAgesQU = 1;
function openImageGif() {
  document.body.style.backgroundImage = "url(" + fruItsIMGes[openImag3] + ")";
  openIMAgesQU = fruItsIMGes.length;
  if (openImag3 >= openIMAgesQU - 1) {
    openImag3 = 0;
    iMAgesQU = 1;
  } else {
    openImag3++;
    iMAgesQU++;
  }
}


//简约背景切换
var fruItsIMGes2 = [
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/2y/wallhaven-2ye18x.jpg?w=2560&h=1440&fmt=webp",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-8o6rmo.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-28xgd6.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1k6ljv.jpg?w=2560&h=1440&fmt=webp",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-72qokv.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-dpzww3.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-l3geq2.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-l3oeyl.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-o3wel5.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-q2qpl7.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-wq37kp.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-x8gkpo.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/pk/wallhaven-pkr6mp.png?w=2560&h=1440&fmt=webp",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-x82oov.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/q2/wallhaven-q213e5.png?w=2560&h=1440&fmt=webp",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-y8o51x.jfif",
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-z82evv.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/vq/wallhaven-vqxgql.png?w=2560&h=1440&fmt=webp"
];
///简约背景切换
var openImag31 = 0;
var openIMAgesQU2 = 0;
var iMAgesQU2 = 1;
function openImageApi() {
  document.body.style.backgroundImage = "url(" + fruItsIMGes2[openImag31] + ")";
  openIMAgesQU2 = fruItsIMGes2.length;
  if (openImag31 >= openIMAgesQU2 - 1) {
    openImag31 = 0;
    iMAgesQU2 = 1;
  } else {
    openImag31++;
    iMAgesQU2++;
  }
}




//动漫背景切换
var fruItsIMGes3 = [
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-3z7vzy2.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/e7/wallhaven-e7pwdw.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/8o/wallhaven-8o6rmo.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kmk39.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9m/wallhaven-9m7kwd.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9m/wallhaven-9mex11.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kl36v.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kmg19.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/3z/wallhaven-3zj6q3.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/o3/wallhaven-o3edql.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/z8/wallhaven-z865pw.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/e7/wallhaven-e71v2l.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/v9/wallhaven-v92r2m.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/57/wallhaven-57q6r5.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/pk/wallhaven-pkxwwe.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/g7/wallhaven-g7kzjl.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/y8/wallhaven-y8l89d.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/72/wallhaven-72o6ze.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/28/wallhaven-28mkg9.jpg"
];
///动漫背景切换
var openImag33 = 0;
var openIMAgesQU3 = 0;
var iMAgesQU3 = 1;
function openImage() {
  document.body.style.backgroundImage = "url(" + fruItsIMGes3[openImag33] + ")";
  openIMAgesQU3 = fruItsIMGes3.length;
  if (openImag33 >= openIMAgesQU3 - 1) {
    openImag33 = 0;
    iMAgesQU3 = 1;
  } else {
    openImag33++;
    iMAgesQU3++;
  }
}
