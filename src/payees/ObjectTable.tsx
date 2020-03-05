import React from 'react'
import { ColumnConfig } from './payees-types';
import * as lodash from 'lodash'
import ObjectTableHeader from './ObjectTableHeader';
import ObjectTableRow from './ObjectTableRow';

/* Assumes an Object ID is in place */

interface ListProps<T> {
    columns: ColumnConfig<T>[];
    content: T[];
    selectObject?: (object: T) => void;
    selectHeader?: (column: ColumnConfig<T>) => void;
}

const ObjectTable = <T extends any>({columns, content, selectObject, selectHeader}: ListProps<T>) => {

    return (
        <table className="table is-striped is-hoverable is-fullwidth">
            <ObjectTableHeader columns={columns} selectHeader={selectHeader}/>
            <tbody>
                {content.map(object => <ObjectTableRow object={object} columns={columns} selectObject={selectObject}/>)}
            </tbody>
        </table>
    )
}

export default ObjectTable;
