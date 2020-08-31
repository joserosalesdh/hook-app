import React from 'react'

export const Small = React.memo(({ value }) => {
    return (
        <small>
            {value}
        </small>
    )
})

// El memo es para memorizar algo y solo si sus props cambian entonces va a volver a renderizar