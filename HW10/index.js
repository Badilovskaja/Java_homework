import { dataIn } from "./data.js";

const content = document.querySelector('.content');

const data = JSON.parse(dataIn);
// ...вытягиваем свойства от обьекта
data.forEach(({ quote_id, quote, author, series, img }) => {//прописываем с чем будем работать
    const div = document.createElement('div');
    div.classList.add('.card');
    content.appendChild(div);//передаем в файл


    const idParam = document.createElement('p');
    idParam.classList.add('card-item');
    idParam.textContent = `ID ${quote_id}`;
    div.appendChild(idParam);//передаем в файл

    const title = document.createElement('h3');
    title.classList.add('quot-slog');
    title.textContent = quote;
    div.appendChild(title);

    const subtitle = document.createElement('h4');
    subtitle.classList.add('card-aut');
    subtitle.textContent = author;
    div.appendChild(subtitle);


    const seri = document.createElement('h6');
    seri.classList.add('seri');
    seri.textContent = series;
    div.appendChild(seri);

    const img = document.createElement('img');
    img.classList.add('card_img');
    img.src = url;
    img.width = 300;
    img.height = 300;
    div.appendChild(img);



});
