// import React from 'react';
// import ReactDOM from 'react-dom';
// import { cube } from './math';
// import styles from './index.scss';
//
// console.log(styles);
//
// const Shu = () => (
//     <div>
//         <div className={styles.cool}>{cube(25)}</div>
//     </div>
// )
//
// ReactDOM.render(<Shu />, document.getElementById('react-root'));

console.log('executou index.js');
function shu() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        return _.join(['Hello', 'webpack'], ' ');
    });
}

shu().then(text => {
    console.log(text);
})
