import s from './FriendList.module.css';
import PropTypes, { bool } from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={s.statusGreen}></span>
          ) : (
            <span className={s.statusRed}></span>
          )}

          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
