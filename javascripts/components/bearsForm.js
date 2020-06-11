import bearData from '../helpers/data/bearData.js'
import bearDisplay from './bearDisplay.js'

const clickBear = () => {
    document.getElementById('bearSubmit').addEventListener('click', checkBear);
  }

  const checkBear = () => {
    if (document.getElementById("bearNameInput").value === '') {
      alert("Please name your bear before proceeding.");
      } else if (document.getElementById("bearImgInput").value === '') {
        alert("We left our binoculars at home. What does your bear look like?");
      } else {
      createBear()
      document.getElementById("bearNameInput").value = '';
      document.getElementById("bearImgInput").value = ''
      }
    }

  const createBear = () => {
    const enteredName = (document.getElementById("bearNameInput").value);
    const imageLink = (document.getElementById("bearImgInput").value);
    const newBear = 
      {
        name: enteredName,
        image: imageLink,
      }
    bearData.setBears(newBear);
    bearDisplay.bearsLoop();
    console.log(bearData.getBears())
  }

  export default { clickBear, createBear }