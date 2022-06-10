import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({title}) => {
    const showMessage = (e) => {
        console.log('click');
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Hello' onClick={showMessage}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: "grey", 
//     backgroundColor: "black"
// }

export default Header