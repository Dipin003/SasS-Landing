import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const classes = cva('border border-white h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-950 border-lime-400',
            secondary: 'border-white text-white bg-transparent',
        },
        size: {
            sm: 'h-10'
        }
    }
});

type ButtonProps = {
    variant: "primary" | "secondary";
    size?: 'sm'
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant, size, className, ...otherProps }: ButtonProps) {
    return (
        <button
            className={clsx(classes({ variant, size }), className)}
            {...otherProps}
        />
    );
}
