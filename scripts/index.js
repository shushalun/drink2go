var o=document.querySelector(".main-nav"),g=o.querySelector(".main-nav__toggle"),d=o.querySelector(".main-nav__list");o.classList.add("main-nav--closed");d.style.display="none";var f=()=>{o.classList.contains("main-nav--closed")?(o.classList.remove("main-nav--closed"),o.classList.add("main-nav--opened"),d.style.display="flex"):(o.classList.add("main-nav--closed"),o.classList.remove("main-nav--opened"),d.style.display="none")};g.addEventListener("click",f);var L=()=>{window.innerWidth>=767?d.style.display="flex":o.classList.contains("main-nav--opened")||(d.style.display="none")};window.addEventListener("resize",L);L();document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".pagination__link--prev"),a=document.querySelector(".pagination__link--next"),t=document.querySelectorAll(".pagination__item:not(:first-child):not(:last-child)"),n=2,l=()=>{t.forEach(i=>{i.querySelector("a").classList.remove("pagination__link--current")}),t[n-1].querySelector("a").classList.add("pagination__link--current"),n===1?e.classList.add("pagination__link--hidden"):e.classList.remove("pagination__link--hidden"),n===t.length?a.classList.add("pagination__link--hidden"):a.classList.remove("pagination__link--hidden")};e.addEventListener("click",i=>{i.preventDefault(),n>1&&(n--,l())}),a.addEventListener("click",i=>{i.preventDefault(),n<t.length&&(n++,l())}),t.forEach((i,p)=>{i.addEventListener("click",u=>{u.preventDefault(),n=p+1,l()})}),l()});var c=document.querySelector(".range__bar"),v=document.querySelector(".value-from"),m=document.querySelector(".value-to");v.value=0;m.value=900;noUiSlider.create(c,{start:[0,900],range:{min:[0],max:[1e3]},connect:!0,step:1,format:{to:function(e){return Number.isInteger(e),e.toFixed(0)},from:function(e){return parseFloat(e)}}});c.noUiSlider.on("update",e=>{v.value=e[0],m.value=e[1]});v.addEventListener("change",()=>{let e=Math.max(Number(v.value),c.noUiSlider.options.range.min[0]);c.noUiSlider.set([e,null])});m.addEventListener("change",()=>{let e=Math.min(Number(m.value),c.noUiSlider.options.range.max[0]);c.noUiSlider.set([null,e])});document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".hero"),a=document.querySelectorAll(".hero > .wrapper > div"),t=0,n=document.querySelector(".hero__slider-button--prev"),l=document.querySelector(".hero__slider-button--next"),i=document.querySelectorAll(".hero__slider-pagination-button"),p=r=>{e.classList.remove("hero--flat-white","hero--lavender","hero--espresso");let s=a[r];s.classList.contains("hero__flat-white")?e.classList.add("hero--flat-white"):s.classList.contains("hero__lavender")?e.classList.add("hero--lavender"):s.classList.contains("hero__espresso")&&e.classList.add("hero--espresso")},u=()=>{a.forEach((r,s)=>{let _=s===t;r.classList.toggle("active-slide",_),i[s].classList.toggle("hero__slider-pagination-button--current",_)}),p(t),n.disabled=t===0,l.disabled=t===a.length-1},h=r=>{t=r,u()};n.addEventListener("click",()=>{h(t-1)}),l.addEventListener("click",()=>{h(t+1)}),i.forEach((r,s)=>{r.addEventListener("click",()=>{h(s)})}),u()});
