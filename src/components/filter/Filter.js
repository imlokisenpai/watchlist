import React from 'react';
import Select from 'react-select';

import './Filter.css';

const options = [
    {value: 'Shounen', label: 'Shounen'},
    {value: 'Sports', label: 'Sports'}
]

const Filter = () => {
    <Select options={options} />
}

export default Filter;