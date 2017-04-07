import numeral from 'numeral';
import './index.css';

const courseVal = numeral(13000).format('$0,0.00');
alert(courseVal);
//console.log(`I would  pay ${courseVal} for this awesome course!`);