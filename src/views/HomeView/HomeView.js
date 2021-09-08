import { useSelector } from 'react-redux';
import { getAuthStatus } from 'redux/auth/auth-selector';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { ContactPhone } from '@material-ui/icons';

import s from 'views/HomeView/HomeView.module.css';

const HomeView = () => {
  const isLoggedIn = useSelector(state => getAuthStatus(state));
  const history = useHistory();

  const handleClick = () => {
    history.push(isLoggedIn ? '/contacts' : '/login');
  };

  return (
    <>
      <div className={s.logoSidex}>
        <div className={s.logoBackground}>
          <ContactPhone className={s.logo} style={{ fontSize: 120 }} />
          <p className={s.logotext}>PhoneBook</p>
        </div>
      </div>
      <div className={s.sloganSide}>
        <h1 className={s.mainTitle}>My PhoneBook</h1>
        <h2 className={s.slogan}>Your phone numbers in safe hands</h2>
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleClick}
        >
          Get started
        </Button>
      </div>
    </>
  );
};

export default HomeView;
