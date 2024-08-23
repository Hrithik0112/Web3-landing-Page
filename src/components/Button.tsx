import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
    outline?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({
    children,
    outline = false,
    className = "",
    type,
    ...props
}: Props) {
    return (
        <button
            {...props}
            type={type ?? "button"}
            className={`rounded-full py-4 px-6 font-sans  ${
                outline
                    ? "border-2 border-white bg-transparent hover:bg-gray-50/10 hover:shadow-md hover:shadow-blue-600 duration-150"
                    : "bg-[#4326f3] hover:bg-[#3b1dff] hover:shadow-md hover:shadow-white duration-150"
            } ${className}`}
        >
            {children}
        </button>
    );
}
