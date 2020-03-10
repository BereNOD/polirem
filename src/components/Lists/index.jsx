import React from "react";
import _ from 'lodash';

import "./styles.scss";

const Lists = ({
    title,
    items
}) => (
    <React.Fragment>
        <span className='list-title'>{title}</span>
        <ul>
            {_.map(items, item => <li className='list-item'>{item}</li>)}
        </ul>
    </React.Fragment>
);


export default Lists;


