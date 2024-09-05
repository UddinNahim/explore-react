const employee = {
    ide : 'Vs code',
    designation : 'developer',
    machine : 'mac',
    languages:['html', 'css' , 'js'],
    speciation : {
        height : 66 ,
        weight : 67,
        address : 'Kumarkhali',
        drink : 'water',
        watch: {
            color : 'black',
            price : 500,
            brand : 'germain'
        }
    }

}

const {machine, ide} = employee;
const {weight,address} = employee.speciation;
const {brand} = employee.speciation.watch
