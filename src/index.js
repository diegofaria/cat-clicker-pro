import React from 'react';
import ReactDOM from 'react-dom';
import { cube } from './math';
import styles from './index.scss';

console.log(styles);

const Shu = () => (
    <div>
        <div className={styles.cool}>{cube(25)}</div>
    </div>
)

ReactDOM.render(<Shu />, document.getElementById('react-root'));
