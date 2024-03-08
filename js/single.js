let singleId = localStorage.getItem("id");
const API = "https://dummyjson.com/users";
const singleInformation = document.querySelector(".single__right__box");
const singleImage = document.querySelector(".single__left");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => getSingleCard(res.users))
    .catch((err) => console.log(err + " Malumotlar yo'q"));
}

fetchData(API);

function getSingleCard(api) {
  let result = api.filter((user) => user.id == singleId);
  result.map((user) => {
    singleImage.innerHTML = `
      <img src=${user.image} alt="" />
    `;
    singleInformation.innerHTML = `
    <h1 class="single__firstname">Firsname: ${user.firstName}</h1>
    <h1 class="single__lastname">Lastname: ${user.lastName}</h1>
    <h3 class="single__age">Age: ${user.age}</h3>
    <h3 class="single__gender">Gender: ${user.gender}</h3>
    <h3 class="single__bithdate">Birth-Date: ${user.birthDate}</h3>
    <h3 class="single__university">University: ${user.university}</h3>
    <div class="full__inform__box about__company">
      <p class="full_address">About company</p>
      <div class="own__information">
        <h3 class="single__address">Company address: ${user.company.address.address}, ${user.company.address.city}</h3>
        <h3 class="single__address">Company department: ${user.company.department}</h3>
        <h3 class="single__address">Company name: ${user.company.name}</h3>
        <h3 class="single__address">Company title: ${user.company.title}</h3>
    </div>
    </div>
    <h3 class="single__phone">Phone number: ${user.phone}</h3>
    <h3 class="single__email">Email: ${user.email}</h3>
    <h3 class="single__username">User name: ${user.username}</h3>
    <div class="full__inform__box">
      <p class="full_address">Full Address</p>
      <div class="own__information">
        <h3 class="single__address">Address: ${user.address.address}</h3>
        <h3 class="single__address">City: ${user.address.city}</h3>
        <h3 class="single__address">Postal code: ${user.address.postalCode}</h3>
        <h3 class="single__address">State: ${user.address.state}</h3>
    </div>
    </div>
    `;
  });
}
