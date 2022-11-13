const nameUser = document.querySelector('name');

const fetchNames = async (names) => {
    const response = await fetch("http:/192.168.0.151:3000/");
    const data = response.json();

    return data;
}

const renderNames = async (names) => {

    const data = await fetchNames(names)

    nameUser.innerHTML = data.name;
}

renderNames()
