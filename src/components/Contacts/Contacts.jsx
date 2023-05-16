import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header/Header';
import Search from './components/Search/Search';
import ListContainer from './components/ListContainer/ListContainer';

import accLogo from 'assets/images/acc_logo.png';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/slices/contactsSlice';
import { unSetUser } from 'redux/slices/userSlice';
import { setMessages } from 'redux/slices/messagesSlice';
import { changeNumber } from 'redux/slices/numberSlice';
import api from 'utils/Api';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState('');

  const handlePlusClick = () => {
    setIsOpen(!isOpen);
  };

  const handleAddClick = useCallback(() => {
    api.getChatWithNumber(number)
      .then(res => {
        const contact = res.find(item => item.type === 'incoming');
        dispatch(addContact(contact));
        dispatch(setMessages(res));
        dispatch(changeNumber(number));
      })
      .catch(err => console.log(err));
    setNumber('');
    setIsOpen(false);
  }, [number]);

  const handleLogOut = () => {
    dispatch(unSetUser());
    localStorage.removeItem('userData');
    navigate('/sign-in');
  };

  return (
    <section className='contacts'>
      <Header>
        <div className='contacts__header'>
          <img className='account-logo' src={accLogo} alt='account logo' />
          <div className='contacts__add-number' onClick={handlePlusClick} ></div>
          <div className='contacts__logout' onClick={handleLogOut}></div>
          <div className='contacts__add-number-popup'  style={{
            visibility: isOpen ? 'visible' : 'hidden',
            opacity: isOpen ? 1 : 0,
          }} >
            <input className='contacts__add-number-input' value={number} onChange={e => setNumber(e.target.value)} />
            <button className='contacts__add-number-btn' onClick={handleAddClick}>ADD</button>
          </div>
        </div>
      </Header>
      <Search />
      <ListContainer />
    </section>
  );
}

export default Contacts;
