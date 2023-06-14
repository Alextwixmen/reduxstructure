import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filter-selector';
import { setFilter } from '../store/filters/filters-actions';
const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <div>
      <button
        // dispatch({type: SET_FILTER, filter: all})
        onClick={() => dispatch(setFilter('all'))}
        style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
      >
        all
      </button>
      <button
        // dispatch({type: SET_FILTER, filter: active})
        onClick={() => dispatch(setFilter('active'))}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        active
      </button>
      <button
        // dispatch({type: SET_FILTER, filter: completed})
        onClick={() => dispatch(setFilter('completed'))}
        style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
      >
        completed
      </button>
    </div>
  );
};
export { Filters };
