const bearsArray = [
    {
      name: 'Alvin',
      weight: 500,
      type: 'Grizzly',
    }
  ];
  
  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
  const bearsLoop = () => {
  let domString = '';
  
  for (let i = 0; i < bearsArray.length; i++) {
    domString +=  `<div class="animal-card" style="display: ${bearsArray[i].display};">
                    <header class="animal-header">
                      <img src= "${bearsArray[i].img}" alt= "${bearsArray[i].imageDescription}">
                     <h1>${bearsArray[i].name}</h1>
                    </header>
                    <div class="bodysection">
                      <div class="color">
                        <p class="typeCategory">Type: &nbsp</p>
                        <p class="animalColor">${bearsArray[i].type}</p>
                    </div>
                  </div>
                </div>`;
    }
    printToDom('.cards', domString)
  }
  
  const init = () => {
    bearsLoop();
  }
  
  init();
  