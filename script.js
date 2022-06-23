let dateBtn = document.querySelector('.date-btn').classList;
let logoName = document.querySelector('.name').classList;
let dates = document.querySelector('.dates').classList;
let logo = document.getElementById('logo').classList;
let requirements = document.querySelector('.requirements').classList;

function toggleDate(){
    if(dateBtn.contains('shrink')){
        dateBtn.remove('shrink')
        logoName.remove('small');
        dates.add('shrink1');
        logo.remove('big');
        requirements.add('hide');
    }
    else{
        dateBtn.add('shrink');
        logoName.add('small');
        dates.remove('shrink1');
        logo.add('big');
        requirements.remove('hide');
    }
}