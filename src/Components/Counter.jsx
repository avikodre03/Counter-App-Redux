
import './Counter.css';
import { connect } from 'react-redux';
import { decrementCount, incrementCount, resetCount } from '../Redux/action';


const Counter = ({ count, incrementCount, decrementCount, resetCount }) => {
  return (
    <div className='Counter'>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
