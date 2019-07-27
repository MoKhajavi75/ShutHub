function hideWarn() {
  document.getElementsByClassName(
    'flash flash-full js-notice flash-warn'
  )[0].style.display = 'none';
}

document.addEventListener('DOMContentLoaded', hideWarn, false);
