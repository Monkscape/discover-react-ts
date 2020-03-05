import React from 'react'
import { ColumnConfig } from './payees-types'

interface ObjectHeaderTableProps<T> {
    columns: ColumnConfig<T>[];
    selectHeader?: (column: ColumnConfig<T>) => void;
}

const ObjectTableHeader = <T extends any>({columns, selectHeader}: ObjectHeaderTableProps<T>) => {

    // if select header is present, then invoke it
    const labelColumnData = ({field, label}: ColumnConfig<T>) => 
        <th key={field} onClick={() => selectHeader && selectHeader({field,label})}>{label}</th>

    const labelRow = (columns: ColumnConfig<T>[]) => <tr>{columns.map(labelColumnData)}</tr>

    return <thead>{labelRow(columns)}</thead>
}

export default ObjectTableHeader
