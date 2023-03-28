import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const { loading, users, error } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {loading && <h2>loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {!loading &&
        users.length > 0 &&
        users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
    </div>
  );
};
