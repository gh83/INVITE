const header = document.querySelector('.header-bar');
const scroller = document.getElementById('scroll-down');
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    header.classList.add('header-bar_fixed');
    scroller.style.display = 'none';
    // if (window.pageYOffset > document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.clientHeight / 2) {
    //   scroller.style.display = 'none'
    // } else {
    //   scroller.style.display = 'flex'
    // }
  } else {
    header.classList.remove('header-bar_fixed');
    scroller.style.display = 'flex';
  }

};

const labels = (Array.from(document.getElementsByClassName('scroll-label')) || []).map(label => ({
  el: label,
  rect: label.getBoundingClientRect()
}));

scroller.onclick = () => {
  window.scrollTo(0, labels[0].rect.top)
};

// scroller.onclick = function () {
//   const fullOffset = window.pageYOffset + document.documentElement.clientHeight;
//   let newScrollPosition = undefined;
//   labels.forEach(label => {
//     if (newScrollPosition === undefined && label.rect.top > fullOffset)
//       newScrollPosition = label.rect.top - 0;
//   });
//
//   if (newScrollPosition !== undefined)
//     window.scrollTo(0, newScrollPosition);
// };