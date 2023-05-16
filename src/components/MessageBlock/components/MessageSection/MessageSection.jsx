import { useSelector } from "react-redux";

import Message from "../Message/Message";

const MessageSection = () => {
  const messages = useSelector(state => state.messages.data);
  return ( 
    <div className='message-section'>
      {messages?.map((message, i) => <Message key={i} props={message} /> )}
    </div>
  );
}

export default MessageSection;
