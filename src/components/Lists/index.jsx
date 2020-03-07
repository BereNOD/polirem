import React from "react";
import _ from 'lodash';

import "./styles.scss";

const Lists = ({
    title,
    items
}) => (
    <React.Fragment>
        <span className='list-inner'>{title}</span>
        <ul className='list-item'>
            {_.map(items, item => <li className=''>{item}</li>)}
        </ul>
    </React.Fragment>
);


export default Lists;
