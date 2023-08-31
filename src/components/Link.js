function Link({ to, children, className, onClick }) {
    console.log(onClick)

    const handleClick = () => {
        onClick();
    }

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link