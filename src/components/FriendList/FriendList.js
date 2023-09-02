import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(friend => (
      <li className={styles['item']} key={friend.id}>
        <span className={`${styles['status']} ${friend.isOnline ? styles['online'] : ''}`} />
        <img className={styles['avatar']} src={friend.avatar} alt={friend.name} width="48" />
        <p className={styles['name']}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
