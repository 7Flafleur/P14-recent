import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalBackgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(253, 225, 172, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalContentStyle = {
  position: 'relative',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '50px 70px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(253, 225, 172, 0.3)'
};




export default function Modal({ children, isOpen, onClose, textContent }) {

      if (!isOpen) return null

      return ReactDOM.createPortal(
        <div style={modalBackgroundStyle}>
          <div style={modalContentStyle}>
            <p>{textContent}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.body
      )
    }


    Modal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
      textContent: PropTypes.string.isRequired,
      children: PropTypes.node
    };