import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const submitForm = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');
const fulfInput = document.querySelector('.fulf-input');
const rejInput = document.querySelector('.rej-input');

const executor = (resolve, reject) => { 
    const inputValve = parseInt(delayInput.value);
    const fulfCheck = fulfInput.checked;
    const rejCheck = rejInput.checked;
    setTimeout(() => { 
        if (fulfCheck) {
            resolve(inputValve);

        } else if (rejCheck) {

            reject(inputValve);

        }}, inputValve);
}


const getResult = event => {
    event.preventDefault();
    const promise = new Promise(executor);
    promise.then(result => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${result}ms`,
                color: 'green',
                position: 'topRight',
            } )
    
    }).catch(err => {
        
            iziToast.show({
                message: `❌ Rejected promise in ${err}ms`,
                color: 'red',
                position: 'topRight'
            });
    })
};
submitForm.addEventListener('submit', getResult);