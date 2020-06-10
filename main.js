const bearsArray = [
    {
      name: Alvin,
      img: ,
      weight: Marcus,
      type: Davey,
    }
  ];
  
  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
  const bearsLoop = () => {
  let domString = '';
  
  for (let i = 0; i < petsArray.length; i++) {
    domString +=  `<div class="animal-card" style="display: ${petsArray[i].display};">
                    <header class="animal-header">
                      <img src= "${petsArray[i].imageLink}" alt= "${petsArray[i].imageDescription}">
                     <h1>${petsArray[i].name}</h1>
                    </header>
                    <div class="bodysection">
                      <div class="color">
                        <p class="colorCategory">Color: &nbsp</p>
                        <p class="animalColor">${petsArray[i].color}</p>
                    </div>
                    <div class="skill">
                      <p class="skillCategory">Special Skill: &nbsp</p>
                      <p class="specialSkill">${petsArray[i].skill}</p>
                    </div>
                    <div class="type">
                      <p class="typeCategory">Type of Pet: &nbsp</p>
                      <p class="petType" value='${petsArray[i].category}'>${petsArray[i].type}</p>
                    </div>
                  </div>
                </div>`;
    }
    printToDom('.cards', domString)
  }
  
  const filterButton = (filterCategory) => {
    for (let i=0; i < petsArray.length; i++) {
      if (petsArray[i].category != filterCategory) {
        petsArray[i].display = 'none'
      } else {
        petsArray[i].display = ''
      }
    }
    console.log(petsArray)
    petLoop()
  }
  
  const noFilter = () => {
    for (let i=0; i < petsArray.length; i++) {
      petsArray[i].display = ''
    }
    petLoop()
  }
  
  const init = () => {
    petLoop();
  }
  
  init();
  