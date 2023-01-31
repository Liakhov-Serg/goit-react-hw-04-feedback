import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticCafe = (
    {
    good = 0,
    neutral = 0,
        bad = 0,
        total = 0,
    positiveFeedback = 0 }
) => {
    return (
        <ul>
            <li>
                Good: <span>{good}</span>
            </li>
            <li>
                Neutral: <span>{neutral}</span>
            </li>
            <li>
                Bad: <span>{bad}</span>
            </li>
            <li>
                Total: <span>{total}</span>
            </li>
            <li className={css.positiv}>
                Positive Feedback: <span>{positiveFeedback}%</span>
            </li>
        </ul>
    )
}
console.log(StatisticCafe);

StatisticCafe.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};