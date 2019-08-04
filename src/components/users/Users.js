import React from "react";
import UserItem from "./UserItem";
import Spinner from "../navbar/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading, repos }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div className="grid-3">
      {users.map(user => (
        <UserItem key={user.id} user={user} repos={repos} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
