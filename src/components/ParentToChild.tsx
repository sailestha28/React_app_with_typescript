import React from 'react'

type ParentToChildProps = {
    children: React.ReactNode
}

const ParentToChild = (props: ParentToChildProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}
export default ParentToChild;
