import React from 'react';

const Spinner = (Loader) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{Loader.message}</div>
        </div>
    )
}

Spinner.defaultProps = {
    message: 'Loading'
}

export default Spinner;