import React from 'react'
import { ColumnConfig } from './payees-types'
import * as lodash from 'lodash'

interface ObjectTableRowProps<T> {
    columns: ColumnConfig<T>[];
    object: T;
    selectObject?: (object: T) => void;
}

const ObjectTableRow = <T extends any>({columns, object, selectObject}: ObjectTableRowProps<T>) => {

    const objectColumnData = (object: T) => ({field}: ColumnConfig<T>) => 
        <td key={field}>{lodash.get(object, field)?.toString()}</td>
    
    return <tr key={object.id} onClick={() => selectObject && selectObject(object)}>{columns.map(objectColumnData(object))}</tr>
}

export default ObjectTableRow
