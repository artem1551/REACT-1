var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// class RenderTable extends React.Component {
//     constructor(props){
//         super(props);

//         // randomProperty = function (obj) {
//         //     let item = obj[Math.floor(Math.random()*obj.length)];
//         //     let keys = Object.keys(item)
//         //     let randomObj = item[keys[ keys.length * Math.random() << 0]];
//         //     return randomObj
//         // };

//         this.state = {
//             localTable: [...this.props.table]
//         }

//         // setInterval(() => {

//         //     // console.log(deleteArrIndex)
//         //     this.setState({
//         //         localTable: props.table
//         //     });
//         //     const randomArrIndex = Math.floor(Math.random() * this.state.length);
//         //     // props.table[randomArrIndex].selected = true;
//         //     let deleteArrIndex = delete this.state[randomArrIndex]
//         //     console.log(deleteArrIndex)
//         // }, 2000);

//     };

//     makeColumns(row) { 
//       // console.log(row)
//       return <td>{row.id} {row.price} {row.name}</td>
//       // let itemTemplate = row.map(item => {
//       //   console.log(item)
//       //   return <td>{item}</td>
//       // });

//       // for(let item in row){
//       //   return <td>{row[item]}</td>
//       // }

//     }


//     render() {
//       const tableTemplate = list.map((row, i) => {
//         return <tr key={i}>
//           {this.makeColumns(row)}
//           </tr>
//       });

//       return (
//         <table>
//           <tbody>
//             {tableTemplate}
//           </tbody>
//         </table>
//       );

//     };
// };

// const root = <RenderTable table={list}/>

// ReactDOM.render(
//     root,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////////


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


var list = [{ id: 'i_20', price: 2300, name: 'Example_1' }, { id: 'i_21', price: 2301, name: 'Example_2' }, { id: 'i_22', price: 2302, name: 'Example_3' }, { id: 'i_23', price: 2303, name: 'Example_4' }, { id: 'i_24', price: 2304, name: 'Example_5' }, { id: 'i_25', price: 2305, name: 'Example_6' }];

function MyTable() {
  var _React$useState = React.useState(list),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      values = _React$useState4[0],
      setValuse = _React$useState4[1];

  var number = 0;
  console.log(state);

  return React.createElement(
    'table',
    { border: '1' },
    React.createElement(
      'tbody',
      null,
      state.map(function (item) {
        return React.createElement(
          'tr',
          { key: item.id },
          Object.values(item).map(function (val) {
            return React.createElement(
              'td',
              { className: number++, key: number },
              val
            );
          })
        );
      })
    )
  );
}

ReactDOM.render(React.createElement(MyTable, { list: list }), document.getElementById("root"));