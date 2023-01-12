const state = document.querySelector("#state");

const typeRoofs = ["Cerâmica", "Concreto", "Embutido", "Verde", "Ardósia", "Cobertura Translúcida", "Policarbonato", "Vidro", "Fibrocimento"];
for (type of typeRoofs) {
    let id = 0
    createOption(id, type, "roof")
    id++
}

function createOption(id, name, idSelect){
    const option = document.createElement("option");
    const selection = document.querySelector(`#${idSelect}`);

    option.value = id;
    option.innerText = name;

    selection.appendChild(option);
}


fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++){
            createOption(data[i].id , data[i].nome, "state")
        }
    })
    .catch(err => console.log(err))

const getCity = (e) => {
   const uf = state.options[state.selectedIndex].value;

   fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .then(response => response.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++){
            createOption(data[i].id , data[i].nome, "city")
        }
    })
    .catch(err => console.log(err))

}

state.addEventListener("change", getCity)