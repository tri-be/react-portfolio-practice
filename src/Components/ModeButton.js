import React from 'react';

const ModeButton = props => {
	return (
		<button className={props.name} onClick={props.action}>
                <img class="nav-img" src={props.modeImage} alt={props.mode}/>
        </button>
    )
}

export default ModeButton