import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from 'redux/slices/messagesSlice';
import api from 'utils/Api';
 
const MessageControl = () => {
  const number = useSelector(state => state.number.data);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    api.sendMessage(number, message)
      .then(() => {
        api.getChatWithNumber(number)
          .then(res => {
            dispatch(setMessages(res));
          })
          .catch(err => console.log(err));
        setMessage('');
      })
      .catch(err => console.log(err));
  };
  return (
    <div className='message-control'>
      <form className='message-control__form' onSubmit={handleSubmit}>
        <input 
          className='message-control__form-input' 
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className='message-control__form-send' type='submit' />
      </form>
    </div>
  );
}

export default MessageControl;
