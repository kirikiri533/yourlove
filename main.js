'use strict';

{
  let isDevMode = true;
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');

buttonElement.addEventListener('touchstart',()=>{
  if(confirm('あなたは妻だけを愛してますか??')){
    if(isDevMode){
      pElement.textContent = '気持ち隠しきれてない';
      window.location.href='https://www.8p82.jp/';
      isDevMode = false;

    }else {
      pElement.textContent = 'Dev Mode is On';
      isDevMode = true;
    }
  }
});



}