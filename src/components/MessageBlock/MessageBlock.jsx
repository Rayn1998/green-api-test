import { useState } from 'react';
import Header from 'components/Header/Header';
import MessageSection from './components/MessageSection/MessageSection';
import MessageControl from './components/MessageControl/MessageControl';

import refreshIcon from 'assets/images/refresh-page-option.png';

import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from 'redux/slices/messagesSlice';

import api from 'utils/Api';

const MessageBlock = () => {
  const [rotation, setRotation] = useState(0);
  const number = useSelector(state => state.number.data);
  const dispatch = useDispatch();
  const handleRefresh = () => {
    api.getChatWithNumber(number)
      .then(res => {
        dispatch(setMessages(res))
      })
      .catch(err => console.log(err));
  }
  return (
    <section className='message-block' >
      <Header>
        <img 
          className='message-block__refresh-icon' 
          src={refreshIcon} 
          alt='Refresh Icon' 
          onClick={() => {
            setRotation(1)
            handleRefresh();
          }}
          onAnimationEnd={() => setRotation(0)}
          rotation={rotation}
        />
      </Header>
      <MessageSection />
      <MessageControl />
    </section>
  );
}

export default MessageBlock;
