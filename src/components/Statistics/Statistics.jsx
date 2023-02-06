import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = (
    {
    good = "",
    neutral = "",
        bad = "",
        total = "",
    positiveFeedback = "", }
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
// console.log(StatisticCafe);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};