import PropTypes from 'prop-types';

import { calcTime, convertMoney } from '../../helpers';

import { Wrapper, Content } from './MovieInfoBar.styles';

export default function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className='column'>
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div className='column'>
          <p>Budget: {budget ? convertMoney(budget) : '(Not available)'}</p>
        </div>
        <div className='column'>
          <p>Revenue: {revenue ? convertMoney(revenue) : '(Not available)'}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};
