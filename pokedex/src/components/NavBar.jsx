import { useState } from 'react';
import PropTypes from 'prop-types';

function NavBar ({onPreviousClick, onNextClick,showPrevious,showNext}) {
      
    return (
        <header>
            <nav>    
           {showPrevious && <button onClick={onPreviousClick}>Précédent</button>}
            {showNext && <button onClick={onNextClick}>Suivant</button>}
            
            </nav>
        </header>
    )
}

NavBar.PropTypes = {
    onPreviousClick:PropTypes.func,
    onNextClick:PropTypes.func,
    showPrevious:PropTypes.bool,
    showNext: PropTypes.bool,
}

export default NavBar;