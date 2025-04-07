// CONTENITORE DOVE INSERIRE LE CARD
const gallery = document.querySelector(`.gallery`);

// EFFETTUO LA CHIAMATA ALL'API UTILIZZANDO AXIOS
axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
    const photos = response.data;
    console.log(response);

    // CREO LA STRUTTURA DELLE CARD
    photos.forEach(photo => {
        const card = document.createElement(`div`);
        card.classList.add(`photo-card`);

        const img = document.createElement(`img`);
        img.src = photo.url;
        img.alt = photo.title;

        const info = document.createElement(`div`);
        info.classList.add(`info`);

        const date = document.createElement(`p`);
        date.classList.add(`date`);
        date.textContent = photo.date;

        const title = document.createElement(`p`);
        title.classList.add(`title`);
        title.textContent = photo.title;

        // INSERISCO TUTTO NELLA CARD
        info.appendChild(date);
        info.appendChild(title);
        card.appendChild(img);
        card.appendChild(info);
        gallery.appendChild(card);
    })
})