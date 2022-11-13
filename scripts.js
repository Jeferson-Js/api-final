const nameUser = document.querySelector('name');

const fetchNames = async (names) => {
const response = await fetch(`https://api-names.netlify.app/${name}`);
    const data = response.json();

    return data;
}

const renderNames = async (names) => {

    const data = await fetchNames(names)

    nameUser.innerHTML = data.name;
}

