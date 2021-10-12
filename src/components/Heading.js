import React from 'react'

export default function Heading({title,description}) {
    return (
        <div className="heading">
            <div className="heading__title">
                {title}
            </div>
            <div className="heading__description">
                {description}
            </div>
        </div>
    )
}
