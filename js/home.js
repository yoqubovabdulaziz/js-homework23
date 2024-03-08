const API = "https://dummyjson.com/users";
const workersRow = document.querySelector(".workers__row");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => getProduct(res.users))
    .catch((err) => console.log(err + " Malumotlar yo'q"));
}

fetchData(API);

function getProduct(data) {
  data.forEach(
    ({
      firstName,
      lastName,
      age,
      gender,
      email,
      phone,
      username,
      birthDate,
      image,
      address,
      university,
      company,
      id,
    }) => {
      let card = document.createElement("div");
      card.className = "workers__card";
      card.innerHTML = `
        <div id=${id} class="workers__card__frame">
        <a id${id} href="pages/single.html">
          <img
          id=${id}
          src=${image}
          alt="workers picture"
          class="workers__card__img"/>
        </a>
        </div>
        <div class="workers__card__content">
            <h3 class="workers__name">${firstName} ${lastName}</h3>
            <h4 class="workers__position">${company.name.substring(0, 10)}</h4>
            <p class="workers__description">${phone}</p>
            <div class="workers__card__buttons">
                <a id=${id} class="workers__card__btn" href="pages/single.html">Show More</a>
            </div>
        </div>
      `;
      workersRow.appendChild(card);
    }
  );
}

function getSingleCard(id) {}

workersRow.addEventListener("click", (e) => {
  let singleID = e.target.id;
  if (singleID) {
    localStorage.setItem("id", singleID);
  }
});
