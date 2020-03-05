import React, { ChangeEvent, useState } from 'react';

interface PayeesSearchProps {
    searchPayees: (msg: string) => void;
    label: string;       
}

const PayeesSearch = ({searchPayees, label}: PayeesSearchProps) => {

    const [payeeName, setPayeeName] = useState<string>('');

    const handleButton = () => {
        searchPayees(payeeName);
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPayeeName(event.currentTarget.value)
        searchPayees(event.currentTarget.value)
    }

    return (
        <div>
            <label htmlFor="searchPayeeName">{label}: </label>
            <input type="text" id="searchPayeeName" onChange={handleInput} value={payeeName}/>
            {/* <button type="button" onClick={handleButton}>Search!</button> */}
        </div>
    )
}

export default PayeesSearch;

