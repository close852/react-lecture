import {addNumber} from './utils';
it('add two number',()=>{
    console.log(`NODE_ENV= ${process.env.NODE_ENV}`,`${process.env.REACT_APP_DATA_API}`)

    const result = addNumber(1,2);
    expect(result).toBe(1);
})
// set "CI=true" && npm test