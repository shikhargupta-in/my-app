import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../css/Table.css'
import axios from 'axios'

const USER_SERVICE_URL = 'https://assessment.api.vweb.app/products';

function rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.state.users} trClassName={rowClassNameFormat}>
                    <TableHeaderColumn isKey dataField='product_id'></TableHeaderColumn>
                    <TableHeaderColumn dataField='name'></TableHeaderColumn>
                    <TableHeaderColumn dataField='stock'></TableHeaderColumn>
                    <TableHeaderColumn dataField='selling_price'></TableHeaderColumn>
                </BootstrapTable>
                <p>{this.state.isFetching ? 'Fetching products...' : ''}</p>
            </div>
        )
    }

    componentDidMount() {
        this.fetchUsers();
        this.timer = setInterval(() => this.fetchUsers(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    async fetchUsersAsync() {
        try {
            this.setState({...this.state, isFetching: true});
            const response = await axios.get(USER_SERVICE_URL);
            this.setState({users: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    };

    fetchUsers = this.fetchUsersAsync;
}

export default Products
