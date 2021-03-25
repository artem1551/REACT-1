
// class TableRow extends React.Component {
//   render() {
//     const list = this.props.list;

//     return (
//       <tr>
//         <td>{list.id}</td>
//         <td>{list.price}</td>
//         <td>{list.name}</td>
//       </tr>
//     );
//   }
// }

// class RenderTable extends React.Component {
  

//   render() {
//     const rows = []; 
//     let id = 0;
//     this.props.list.forEach((list) => {
//       rows.push(
//         <TableRow
//           list={list}
//           key={list.name} 
//           id={id++}/>
//       );
//     });


//     return (
//       <table border="1">
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

 
// ReactDOM.render(
//   <RenderTable list={list} />,
//   document.getElementById('root')
// );


const list = [
  { id: 'i_20', price: 2300, name: 'Example_1' }, 
  { id: 'i_21', price: 2301, name: 'Example_2' }, 
  { id: 'i_22', price: 2302, name: 'Example_3' },
  { id: 'i_23', price: 2303, name: 'Example_4' },
  { id: 'i_24', price: 2304, name: 'Example_5' },
  { id: 'i_25', price: 2305, name: 'Example_6' }
];

function MyTable() {
  const [state, setState] = React.useState(list);
  let number = 0;
  console.log(state)
  

  return (
    <table border="1">
      <tbody>
        {state.map((item) => (
          <tr key={item.id}>
            
            {Object.values(item).map((val) => (

              <td className={number++} key={number}>{val}</td>
              
            ))
             }
          </tr>
          
        ))}
      </tbody>
    </table>
    
  );
}

ReactDOM.render(
  <MyTable list={list}/>,
  document.getElementById("root")
);
