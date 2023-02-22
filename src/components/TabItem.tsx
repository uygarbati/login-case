import React, { ReactElement } from "react"

type Props = {
    text: string;
    color: string;
    id: string;
    isDefault?: boolean;
    children: ReactElement;
}

const TabItem: React.FC<Props> = ({ text, color, isDefault, id, children }) => {
    return (
        <div className="tabs__tab">
            <input id={id} name="tabs-two" type="radio" defaultChecked={isDefault} />
            <label htmlFor={id} className={color}>{text}</label>
            {children}
        </div>
    )
}

export default TabItem;