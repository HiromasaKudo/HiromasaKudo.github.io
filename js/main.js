'use strict'
{
  document.querySelectorAll('.TodayDate')[0].textContent = (new Date().getMonth() + 1) + ' / ' + (new Date().getDate());
  document.querySelectorAll('.TodayDate')[1].textContent = (new Date().getHours()) + ' 時 ' + (new Date().getMinutes() + ' 分 ')
}