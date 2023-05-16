import React from 'react';

import profileImg from 'assets/images/profile.png';

const ContactBlock = ({ props }) => {
	const { senderName, textMessage } = props;
	return (
		<div className='contact-block'>
			<img className='contact-block__image' src={profileImg} alt='acc thumb' />
			<div className='contact-block__main-info'>
				<div className='contact-block__text'>
					<p className='contact-block__name'>{senderName}</p>
					<p className='contact-block__last-message'>{textMessage}</p>
				</div>
				{/* <p className='contact-block__time'></p> */}
			</div>
		</div>
	);
};

export default ContactBlock;
