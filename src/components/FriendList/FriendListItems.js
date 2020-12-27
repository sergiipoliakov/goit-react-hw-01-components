import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span className={s.statusGreen}></span>
      ) : (
        <span className={s.statusRed}></span>
      )}

      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

export default FriendListItem;
