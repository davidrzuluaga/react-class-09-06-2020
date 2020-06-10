import React from 'react';

const TODOitem = ({ action }) => {
  const [status, set_status] = React.useState(false);
  const [count, set_count] = React.useState(0);

  React.useEffect(() => {
    set_count(count + 1);
  }, [status]);

  return (
    <li
      onClick={() => set_status(!status)}
      className={status ? 'checked' : null}
    >
      {action + count}
    </li>
  );
};

export default TODOitem;
