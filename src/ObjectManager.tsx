import React, {useEffect, useState} from 'react'
import { ColumnConfig } from './payees/payees-types'
import { dao } from './payees/payees-dao';
import ObjectTable from './payees/ObjectTable';

interface ObjectManagerProps<T> {
    displayColumns: ColumnConfig<T>[];
    url: string;
}

const ObjectManager = <T extends any>({displayColumns, url}: ObjectManagerProps<T>) => {

    const [objects,setObjects] = useState([])

    useEffect(() => {
        dao.get(url).then(objects => setObjects(objects))},
        [url]);

    return (
        <div>
            <ObjectTable
                columns={displayColumns} 
                content={objects} 
            />
        </div>
    )
}

export default ObjectManager
