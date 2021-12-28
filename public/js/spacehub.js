"use strict";

(function frontEndSetUp() {
    // Background
    (function setUpBackground() {
        let background = document.querySelector('.background--image');
        if (background) {
            function randInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }
            background.style.backgroundImage = `url('../images/backgrounds/background_${randInt(1, 21)}.jpg')`;
        }
    }());

    // Navbar
    (function setUpNavBar() {
        let navBarItems = document.querySelector('.spacehub--navbar-wrapper');
        if (navBarItems) {
            ['mouseenter', 'mouseleave'].forEach((mouseEvent) => {
                navBarItems.addEventListener(mouseEvent, (menu) => {
                    let menuItems = menu.target.querySelector('.spacehub--navbar-items');
                    if (menuItems) {
                        if(mouseEvent === 'mouseenter') removeTransform(menuItems);
                        else addTransform(menuItems);
                    }
                })
            })
        }
    }());


    ( function setUpPicOfDay() {
      let picOfDayDate = document.querySelector('#picOfDayDate');
      let picOfDayTodayBtn = document.querySelector('#picOfDayToday');
      let titleEl = document.querySelector('#picOfDayTitle');
      let dateEl = document.querySelector('#picOfDayDateText');
      let explanationEl = document.querySelector('#picOfDayExplanation');
      let copyrightEl = document.querySelector('#picOfDayCopyright');

      let screen = document.querySelector('#picOfDayScreen');
      let loading = document.querySelector('#picOfDayLoading');

      let imageEl = document.querySelectorAll('.picOfDayImage');
      let videoEl = document.querySelector('#picOfDayVideo');

      let hideTodayBTN = false;

      // Create Missing value todo: improve this. this is because is not created with template ejs
      // in case some data comes without.. hence we need to manually add it...
      let figcaption = document.querySelector('.spacehub--figure-caption');
      if (!copyrightEl && figcaption) {
          let copyrightWrapper = document.createElement('small');
          copyrightEl = document.createElement('small');
          copyrightEl.setAttribute("id", "picOfDayCopyright");
          copyrightWrapper.textContent = '©';
          copyrightWrapper.appendChild(copyrightEl);
          figcaption.appendChild(copyrightWrapper);
      }

      if (picOfDayTodayBtn) {
          picOfDayTodayBtn.addEventListener('click', (btn => {
              hideTodayBTN = true;
              // -----------------------
              //    Images Handle
              // -----------------------
              screen.classList.add('content--loading');
              showEl(loading);

              getpicOfDay(null, true)
                  .then(data => {
                      if (!data) return null;
                      const { title, date, explanation, copyright, media_type, hdurl, url } = data.data;

                      titleEl.textContent = title;
                      dateEl.textContent = date;
                      explanationEl.textContent = explanation;
                      copyrightEl.textContent = copyright;

                      // Resolving media type
                      if (media_type === 'image') {
                          imageEl.src = hdurl;
                          showEl(imageEl);
                          videoEl.src = '';
                          hideEl(videoEl);

                      }
                      else if (media_type === 'video') {
                            videoEl.src = url;
                            showEl(videoEl);
                            imageEl.src = '';
                            hideEl(imageEl);
                      }
                      else console.error(`Error while getting Nasa POD for ${value} | Data Received:\n ${data}`);

                  })
                  .catch(err => console.error(err));
          }))
      }

      if (picOfDayDate) {
          picOfDayDate.addEventListener('change', (el) => {
              let target = el.target;
              let value = target.value;
              if (!value) return; // in Firefox you can 'remove' the selected date, I just ignore that change and move on..

              // -----------------------
              //    Images Handle
              // -----------------------
              screen.classList.add('content--loading');
              showEl(loading);

              getpicOfDay(value, false)
                  .then(data => {
                      if (!data) return null;
                      const { title, date, explanation, copyright, media_type, hdurl, url } = data.data;
                      titleEl.textContent = title;
                      dateEl.textContent = date;
                      explanationEl.textContent = explanation;
                      copyrightEl.textContent = copyright;

                      // Expose the Button in order to show the Picture of the day.
                      // showEl(picOfDayToday)
                      showEl(picOfDayTodayBtn);

                      // Resolving media type
                      if (media_type === 'image') {
                          imageEl.src = hdurl;
                          showEl(imageEl);
                          videoEl.src = '';
                          hideEl(videoEl);

                      }
                      else if (media_type === 'video') {
                            videoEl.src = url;
                            showEl(videoEl);
                            imageEl.src = '';
                            hideEl(imageEl);
                      }

                      else console.error(`Error while getting Nasa POD for ${value} | Data Received:\n ${data}`);

                  })
                  .catch(err => console.error(err));
          })
      }
      if(imageEl) {
          imageEl.forEach((el) => {
              if (el.complete && el.naturalWidth) {
                  let screenLoading = el.parentElement;
                   if (screen) screen.classList.remove('content--loading');
                      else screenLoading.classList.remove('content--loading');

                      if (loading) hideEl(loading);
                      else {
                          let loadingEl = screenLoading.querySelector('.picOfDayLoadings');
                          if (loadingEl) {
                              hideEl(loadingEl);
                          }
                      }
              }
              else {
                  el.addEventListener('load', function (event) {
                  console.log("Loaded")
                  let screenLoading = this.parentElement;
                  let imageLoaded = this.complete;
                  let naturalWidth = this.naturalWidth;
                  if (imageLoaded && naturalWidth) {
                      if (screen) screen.classList.remove('content--loading');
                      else screenLoading.classList.remove('content--loading');

                      if (loading) hideEl(loading);
                      else {
                          let loadingEl = screenLoading.querySelector('.picOfDayLoadings');
                          if (loadingEl) {
                              hideEl(loadingEl);
                          }
                      }

                  }

                  if (picOfDayTodayBtn) {
                      if (hideTodayBTN) {
                          hideEl(picOfDayTodayBtn);
                          hideTodayBTN = false;
                      } else {
                          showEl(picOfDayTodayBtn);
                      }
                  }



              });

                  el.addEventListener('error', (event) => {
                      let screenLoading = this.parentElement;
                      console.error("Error while Rendering the request image.. Event", event);
                       if (screen) screen.classList.remove('content--loading');
                       else screenLoading.classList.remove('content--loading');

                       if (loading) hideEl(loading);
                  });
              }
          })


      }

    }());


}());

// Front-end API
async function postData(url, data = {}) {
    const options = {
        method: 'POST',
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'same-origin',
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options);
    return response.json();

}

const HOST = "http://127.0.0.1:5000";
async function getpicOfDay(date, is_today) {
    const [err, data] = await promiseHandle(postData(HOST + '/api/v1/pod', { date: date , is_today: is_today}));
    if (err || !data) { // if not data returned than we treat it as an error
        if (err) return Promise.reject(`[ERR_01] Picture Not found for date ${date} | Error : ${err}`);
        return Promise.reject(`[ERR_02] Picture Not found for date ${date}`);
    }
    return Promise.resolve(data);

}
