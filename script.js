const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainerElem = document.getElementById('team-container');

const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const { name, role, email, img } = teamMembers[i];
    const card = ` 
    <div class="col-12 col-sm-4 col-md-4 mb-4">
        <div class="card">
            <div class="d-flex align-items-center">
                <img src="${img}" class="card-img-left me-3" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="card-body">
                    <h3 class="card-title">${name}</h3>
                    <p class="card-text">${role}</p>
                    <p>${email}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    items += card;
  }
  teamContainerElem.innerHTML = items;
}

renderTeam();
