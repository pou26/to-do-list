import ToDoItem from "./ToDoItem";

function ToDoList({ items, onToggleComplete, onDelete, onEdit }) {
  return (
    <ul>
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;



// function ToDoList(props){

//     console.log("props",props)
//     return(
//         <>
//             <ul>
//                 {props.map((item,index)=>(
//                     <li key={index} listDetails={item}></li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// export default ToDoList;


// function ToDoList(props) {
//     console.log(props)
//     return (
//       <>
//         <ul>
//           {/* Pass list item data to ToDoItem component */}
//           {props.items.map((item) => (
//             <li key={props.id}>
//               <ToDoItem listDetails={item} />
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
  
//   export default ToDoList;
  

// function ToDoList({ items }) { // Destructure the items prop

//     console.log(items,"items")
//     return (
//       <>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>{item}</li> // Render the list items
//           ))}
//         </ul>
//       </>
//     );
//   }
  
//   export default ToDoList;
  