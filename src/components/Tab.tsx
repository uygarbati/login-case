import React, { ReactElement } from "react"

type Props = {
    children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {

    return (
        <div className="tabs">
            {children}
        </div>
    )
}

export default Tabs;