const Message = ({ props }) => {
	return (
		<div className='message' style={{alignSelf: props.type === 'outgoing' && 'end'}}>
			<p className="message__text">{props.textMessage}</p>
		</div>
	);
};

export default Message;
