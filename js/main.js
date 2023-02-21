let myChart = document.getElementById('myChart');

// Filter the Transaction form to show.
let getFilter = document.getElementById('getFilter');
let getFilter2 = document.getElementById('getFilter2');
let angleDown = document.getElementById('angle-down');
let getMenu = document.getElementById('get-menu');

let filterForm = document.querySelector('.filter-form');
let userNav = document.querySelector('.user-nav');
let mainNav = document.querySelector('.navbar');

let bankForm = document.getElementById('bank-form');
let bankForm2 = document.getElementById('bank-form2');
let openBankForm = document.getElementById('open-bank-form');
let closeBankForm = document.getElementById('close-bank-form');
let closeBankForm2 = document.getElementById('close-bank-form2');



// show  the filter form
if (getFilter) {
  getFilter.addEventListener('click', () => {
    filterForm.classList.toggle('toggle-filter');
  });
}

if(getFilter2){
  getFilter2.addEventListener('click', () => {
  bankForm2.style.display = 'block'
   });
}
// make dropdown clickable
if (userNav) {
  angleDown.addEventListener('click', () => userNav.classList.toggle('toggle-filter'));
}

// Slide in the MainNav
getMenu.addEventListener('click', () => {
  mainNav.classList.toggle('toggle-filter-active');
})

if (openBankForm) {
  openBankForm.addEventListener('click', () => bankForm.style.display = 'block');
}

if(closeBankForm2) {
 closeBankForm2.addEventListener('click', () => bankForm2.style.display = 'none');
}

if(closeBankForm) {
  closeBankForm.addEventListener('click', () => {
    bankForm.style.display = 'none';
    bankForm2.style.display = 'none';

  });
}


if (myChart) {
  anychart.onDocumentReady(function () {
    // set the data
    let data = {
      header: ['Trading view'],
      rows: [
        ['Jan', 200],
        ['Feb', 500],
        ['Mar', 650],
        ['Apr', 300],
        ['May', 1000],
        ['Jun', 50],
        ['Jul', 415],
        ['Aug', 430],
        ['Sep', 130],
        ['Oct', 950],
        ['Nov', 432],
        ['Dec', 200],
      ]
    };
    // create the chart
    let chart = anychart.area();

    // add the data
    chart.data(data);

    chart.container('myChart');
    chart.draw();
  });

}


// myChart.innerText = 'Rammy'
// let tradeChart = new Chart(myChart, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//             label: 'Trading',
//             data: [
//                 100,
//                 200,
//                 30,
//                 40,
//                 200,
//                 200,
//                 20,
//                 600,
//                 550,
//                 350,
//                 300,
//                 100,

//             ]
//         }]
//     },
//     options: {
//         backgroundColor: 'green'
//     },
//     axisX: {

//     },
//     axisY: {
//         suffix: 'k',
//         includeZero: false,
//     }

// })


// Area chart on dashboard


