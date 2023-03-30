import PropTypes from 'prop-types';
import './GlobalStates.scss';

function GlobalStates({ children }) {
    return children;
}
GlobalStates.propTypes = {
    children: PropTypes.node.isRequired,
}


export default GlobalStates;


