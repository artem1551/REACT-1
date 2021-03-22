var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = [{ id: 'i_20', price: 2300, name: 'Example_1' }, { id: 'i_21', price: 2301, name: 'Example_2' }, { id: 'i_22', price: 2302, name: 'Example_3' }, { id: 'i_23', price: 2303, name: 'Example_4' }, { id: 'i_24', price: 2304, name: 'Example_5' }, { id: 'i_25', price: 2305, name: 'Example_6' }];

var RenderTable = function (_React$Component) {
    _inherits(RenderTable, _React$Component);

    function RenderTable(props) {
        _classCallCheck(this, RenderTable);

        var _this = _possibleConstructorReturn(this, (RenderTable.__proto__ || Object.getPrototypeOf(RenderTable)).call(this, props));

        _this.state = {
            localTable: [].concat(_toConsumableArray(props.table))
        };

        randomProperty = function randomProperty(obj) {
            var item = obj[Math.floor(Math.random() * obj.length)];
            var keys = Object.keys(item);
            var randomObj = item[keys[keys.length * Math.random() << 0]];
            return randomObj;
        };

        setTimeout(function () {
            _this.setState({
                localTable: _this.state.localTable
            });
            console.log(randomProperty(_this.state.localTable));
            console.log(_this.state.localTable);
        }, 2000);

        return _this;
    }

    _createClass(RenderTable, [{
        key: 'render',
        value: function render() {
            function makeColumns(row) {
                return React.createElement(
                    'td',
                    null,
                    row.id,
                    ' ',
                    row.price,
                    ' ',
                    row.name
                );
            }

            var tableTemplate = list.map(function (row, i) {
                return React.createElement(
                    'tr',
                    { key: i },
                    makeColumns(row)
                );
            });

            return React.createElement(
                'table',
                null,
                React.createElement(
                    'tbody',
                    null,
                    tableTemplate
                )
            );
        }
    }]);

    return RenderTable;
}(React.Component);

;

var root = React.createElement(RenderTable, { table: list });

ReactDOM.render(root, document.getElementById('root'));