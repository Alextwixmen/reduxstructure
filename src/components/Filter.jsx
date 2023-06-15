import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
const Filters = () => {
  // const activeFilter = useSelector(selectActiveFilter);
  const { filter: activeFilter = 'all' } = useParams();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <Link
        // dispatch({type: SET_FILTER, filter: all})
        to={'/all'}
        style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
      >
        all
      </Link>
      <Link
        // dispatch({type: SET_FILTER, filter: active})
        to={'/active'}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        active
      </Link>
      <Link
        // dispatch({type: SET_FILTER, filter: completed})
        to={'/completed'}
        style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
      >
        completed
      </Link>
      <Link
        // dispatch({type: SET_FILTER, filter: morethanfive})
        to={'/morethanfive'}
        style={{ color: activeFilter === 'morethanfive' ? 'red' : 'black' }}
      >
        morethanfive
      </Link>
    </div>
  );
};
export { Filters };
