import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustonHooks } from '../03-examples/MultipleCustonHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustonHooks />}

            <button
                className="btn btn-primay mt-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
