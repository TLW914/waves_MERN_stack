import React from 'react';
import UserLayout from '../hoc/UserLayout';
import Button from '../util_components/Button';

const UserDashboard = () => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>name</span>
            <span>lastname</span>
            <span>email</span>
          </div>
          <Button
            type="default"
            title="Edit Account Info"
            linkTo="/user/user_profile"
          />
        </div>
        <div className="user_nfo_panel">
          <h1>Purchase History</h1>
          <div className="user_product_block_wrapper">history</div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
