
import { useSelector } from 'react-redux';

import ContactBlock from '../ContactBlock/ContactBlock';

const ListContainer = () => {
  const contacts = useSelector(state => state.contacts.data);
  return (
    <div className='list-container'>
      {contacts?.map((contact, i) => <ContactBlock key={i} props={contact} />)}
    </div>
  );
}

export default ListContainer;
