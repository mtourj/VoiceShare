import React, {useEffect} from 'react';

const Redirect = ({to, history}) => {

  const init = () => {
    history.push(to);
  }

  useEffect(init, []);

  return (
    <div className='redirect'>
      Redirecting to '{to}'...
    </div>
  );
};

export default Redirect;