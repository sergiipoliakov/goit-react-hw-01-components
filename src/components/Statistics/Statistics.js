import PropTypes from 'prop-types';

import s from './Statistics.module.css';

function Statistics({ items, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title && `${title}`}</h2>
      <ul className={s.statList}>
        {items.map(item => (
          <li className={s.item} key={item.id}>
            {/* <Statistic label={item.label} percentage={item.percentage} /> */}
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
