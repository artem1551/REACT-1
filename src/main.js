const list = [
{ id: 'i_20', price: 2300, name: 'Example_1' }, 
{ id: 'i_21', price: 2301, name: 'Example_2' }, 
{ id: 'i_22', price: 2302, name: 'Example_3' },
{ id: 'i_23', price: 2303, name: 'Example_4' },
{ id: 'i_24', price: 2304, name: 'Example_5' },
{ id: 'i_25', price: 2305, name: 'Example_6' }
]


class RenderTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            localTable: [...props.table]
        };

        randomProperty = function (obj) {
            let item = obj[Math.floor(Math.random()*obj.length)];
            let keys = Object.keys(item)
            let randomObj = item[keys[ keys.length * Math.random() << 0]];
            return randomObj
        };

        setTimeout(() => {
            this.setState({
                localTable: this.state.localTable
            });
            console.log(randomProperty(this.state.localTable))
            console.log(this.state.localTable)

        }, 1000);
        
    };

    render() {
      function makeColumns(row) { 
        return <td>{row.id} {row.price} {row.name}</td>
      }
  
      const tableTemplate = list.map((row, i) => {
        return <tr key={i}>{makeColumns(row)}</tr>
      })
  
      return (
        <table>
          <tbody>
            {tableTemplate}
          </tbody>
        </table>
      );
      
    };
};

const root = <RenderTable table={list}/>

ReactDOM.render(
    root,
    document.getElementById('root')
);