import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  }
  return (
    <div className='page-not-found'>
      <p className='page-not-found__number' >404</p>
      <button className='back-button' onClick={handleBackClick} >Go back</button>
    </div>
  );
}

export default PageNotFound;
