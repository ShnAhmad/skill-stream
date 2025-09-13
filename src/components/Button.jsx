import React from "react";

 const Button =({
    children,
    className = "",
    ...props
}) =>{
    return (
        <button className={`px-4 py-2 rounded-lg bg-[var(--color-primary)] cursor-pointer font-secondary ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;