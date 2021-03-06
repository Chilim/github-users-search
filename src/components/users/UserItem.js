import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        style={{ width: '70px' }}
        alt="user_image"
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          View Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
