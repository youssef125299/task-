const phonesContainer = document.getElementById("phones");

const phones = [
    {
        name: "vivo 32",
        brand: "vivo",
        image: "images/iphone17.jpg"
    },

    {
        name: "vivo y 29",
        brand: "vivo",
        image: "images/iphone17pro.jpg"
    },

    {
        name: "Galaxy S25 Ultra",
        brand: "Samsung",
        image: "images/s25ultra.jpg"
    },

    {
        name: "Galaxy S25",
        brand: "Samsung",
        image: "images/s25.jpg"
    }
];


phones.forEach(function (phone) {

    phonesContainer.innerHTML += `
    
        <div class="phone-card">

            <img
                src="${phone.image}"
                alt="${phone.name}"
                class="phone-img"
            >

            <div class="phone-info">

                <h2 class="phone-name">
                    ${phone.name}
                </h2>

                <p class="phone-brand">
                    ${phone.brand}
                </p>

                <button class="view-button">
                    View Phone
                </button>

            </div>

        </div>

    `;
});