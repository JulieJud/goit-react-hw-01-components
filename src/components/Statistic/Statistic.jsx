
import css from './Statistic.module.css';

import PropTypes from 'prop-types';

function Statistic({ title, stats }) {
    function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
  }
    return (
        <section className={css.statistics}>
           {title && <h2 className={css.title}>{title}</h2>}

             <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export default Statistic