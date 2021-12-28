function promiseHandle(promise) {
  return promise
          .then(data => [null, data])
          .catch(err => [err]);
}

function toggleHide(el) {
    el.classList.toggle('spacehub--hide');
}

function hideEl(el) {
    if (!el.classList.contains('spacehub--hide')) el.classList.add('spacehub--hide');
}

function showEl(el) {
    if (el && el.classList && el.classList.contains('spacehub--hide')) el.classList.remove('spacehub--hide');
}

function toggleTransform(el) {
    el.classList.toggle('spacehub--transform');
}

function addTransform(el) {
     el.classList.add('spacehub--transform');
}

function removeTransform(el) {
     el.classList.remove('spacehub--transform');
}

function toggleBTN(el) {
    el.classList.toggle('spacehub-btn-active');
}
