import React from 'react';
import NotMatch from './NotMatch';

const User = (props) => {
  const userId = Number(props.match.params.user);
  if (Number.isNaN(userId)) {
    return <NotMatch />;
  }
  return (
    <div>
      User profile page.
    </div>
  );
};

export default User;