

import css from './FriendsListItem.module.css';

import PropTypes from 'prop-types';

function FriendsListItem  ({avatar,name,isOnline}) {
    return (
         <li className={css.item}>
      <span className={`${isOnline ? css.online : css.offline}`} />
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
    )
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;