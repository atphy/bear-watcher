import bearsArray from '../helpers/data/bearData.js'
import utils from '../helpers/utils.js'
import bearsForm from './bearsForm.js'

const bearsLoop = () => {
    let domString = '';
    
    for (let i = 0; i < bearsArray.getBears().length; i++) {
      domString +=  `<div class="bear-card">
                        <img src= "${bearsArray.getBears()[i].image}">
                       <h1 id="bearName" class="bearName">${bearsArray.getBears()[i].name}</h1>
                  </div>`;
      }
      utils.printToDom('.cards', domString)
      bearsForm.clickBear();
    }

export default { bearsLoop }
  