import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, useHistory} from 'react-router-dom';
import PayeesSearch from './PayeesSearch'
import {dao} from './payees-dao';
import ObjectTable from './ObjectTable';
import { Payee, ColumnConfig } from './payees-types';
import * as lodash from 'lodash';

// type SortOrder = 'asc' | 'desc'

interface SortOrder {
    field: string;
    order: 'asc' | 'desc';
}

interface PayeesManagerProps {
    searchColumn: ColumnConfig<Payee>;
    displayColumns: ColumnConfig<Payee>[];
}

const PayeesManager = ({searchColumn, displayColumns}: PayeesManagerProps) => {

    const [payees, setPayees] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>({field: '', order: 'asc'});
    const history = useHistory();

    useEffect(() => {
        dao.get('http://localhost:8000/api/v1/banking/payees').then(payees => setPayees(payees))},
        []);

    const handleSearchPayees = (msg: string) => {
        setSearch(msg);
    }

    const filterBySearchCriteria = () => {
        console.log("Sorting with: ", sortOrder)
        return lodash.orderBy(payees.filter((payee: any) => lodash.get(payee, searchColumn.field)?.toString()
            .toLowerCase().includes(search.toLowerCase())),[sortOrder.field], [sortOrder.order])
    }

    const updateSortCriteria = <T extends any>(column: ColumnConfig<T>) => {
        setSortOrder(
            (column.field === sortOrder.field) 
                ? {field: column.field, order: sortOrder.order === 'asc' ? 'desc' : 'asc'}
                : {field: column.field, order: 'asc'}
        )
    }

    const getClickedObject = <T extends any>(object: T) => {
        console.log(object.id)
        history.push('/people')
    }

    return (
        <div>
            <h2>Payees</h2>
            <Switch>
                <Route path="/payees/search">
                    <p>Placeholder</p>
                </Route>
                <Route path="/payees/list">
                    <PayeesSearch searchPayees={handleSearchPayees} label={searchColumn.label}/>
                    <ObjectTable 
                        columns={displayColumns} 
                        content={filterBySearchCriteria()} 
                        selectHeader={updateSortCriteria} 
                        selectObject={getClickedObject}
                    />
                </Route>
                <Route path="/payees">
                    <Redirect to="/payees/list"/>
                </Route>
            </Switch>
        </div>
    )
}

export default PayeesManager;
