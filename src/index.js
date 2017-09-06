import React from 'react';
import ReactDOM from 'react-dom';
import { cube } from './math';

const Shu = () => (
    <div>
        <div>{cube(5)}</div>
    </div>
)

ReactDOM.render(<Shu />, document.getElementById('react-root'));
