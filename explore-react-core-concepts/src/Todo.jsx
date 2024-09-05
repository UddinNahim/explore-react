// export default function Todo ({props}){

//     return (
//         <li>Task: {task} </li>
//     )
// }
// export default function Todo ({task, isDone}){
//     if(isDone === true){
//         return <li>Finisshed : {task}</li>
//     }
//     else{
//         return <li>Work  on:{task}</li>
//     }
// }
// export default function Todo ({task, isDone}){
//     return (
//         <li>{ isDone ? 'Finished' : 'work on'}: {task}</li>
//     )
// }
export default function Todo ({task, isDone}){
    return (
        <li>{task} {isDone || ': Do it'}</li>
    ) 
}