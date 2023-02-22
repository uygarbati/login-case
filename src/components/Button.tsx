interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button = ({
    className,
    children,
    ...props
}: ButtonProps) => {
    const classNames = `pr__button ${className}`;

    return (
        <button type="button" className={classNames}  {...props} >
            {children}
        </button>
    )
}

export default Button;