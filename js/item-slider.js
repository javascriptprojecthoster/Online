
  const mainPhoto = document.querySelector('.product__photo-main')
  const photos = document.querySelectorAll('.product__photo')
  const left = document.querySelector('.photo__left')
  const right = document.querySelector('.photo__right')
  let currentNumberPhoto = +document.querySelector('.outline__photo').dataset.photo

  right.addEventListener('click', function() {
    if(photos.length == currentNumberPhoto){
      currentNumberPhoto = 1
    } else {
      currentNumberPhoto += 1
    }
    const nextPhoto = document.querySelector(`[data-photo="${currentNumberPhoto}"]`)
    mainPhoto.firstElementChild.remove()
    img = document.createElement('img');
    img.src = nextPhoto.firstChild.dataset.src;
    mainPhoto.prepend(img);

    for (const j of photos) {
      j.classList.remove('outline__photo')
    }
    nextPhoto.classList.add('outline__photo')
  })

  
  left.addEventListener('click', function() {
    if(currentNumberPhoto == 1){
      currentNumberPhoto = photos.length
    } else {
      currentNumberPhoto -= 1
    }
    const nextPhoto = document.querySelector(`[data-photo="${currentNumberPhoto}"]`)
    mainPhoto.firstElementChild.remove()
    img = document.createElement('img');
    img.src = nextPhoto.firstChild.dataset.src;
    mainPhoto.prepend(img);

    for (const j of photos) {
      j.classList.remove('outline__photo')
    }
    nextPhoto.classList.add('outline__photo')
  })

  for (const i of photos) {
    i.addEventListener('click', function(){
      currentNumberPhoto = i.dataset.photo

      const nextPhoto = document.querySelector(`[data-photo="${currentNumberPhoto}"]`)
      mainPhoto.firstElementChild.remove()
      img = document.createElement('img');
      img.src = nextPhoto.firstChild.dataset.src;
      mainPhoto.prepend(img);

      for (const j of photos) {
        j.classList.remove('outline__photo')
      }

      i.classList.add('outline__photo')
    })
  }