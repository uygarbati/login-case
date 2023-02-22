interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = ({
    className,
    ...props
}: InputProps) => {
    const classNames = `pr__input ${className}`;

    return (
        <input
            autoComplete="off"
            type="input"
            className={classNames}
            {...props} />
    )
}

export default Input;