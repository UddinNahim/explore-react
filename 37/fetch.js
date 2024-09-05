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
const employeeJson = JSON.stringify(employee);
// console.log(employeeJson)


const employeeObj = JSON.parse(employeeJson)

// console.log(employeeObj)


//2.fetch

// fetch('url')
//     .then (res => res.json())
//     .then(data => console.log(data))

//     //keys, values

    const keys = Object.keys(employee);
    // console.log(keys)

    const values = Object.values(employee)
    // console.log(values)

const numbers = [ 12,25,24,23,54,21]
numbers.forEach(num => console.log(num))
numbers.map(num => console.log(num * 2))