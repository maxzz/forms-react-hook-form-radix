import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export * from './Checkbox';
export * from './Select';
export * from './Dropdown';

const checkboxClasses = `
form-checkbox 
text-primary-700 bg-primary-800 ring-1 focus:ring-1 focus:ring-offset-primary-800 ring-primary-600 focus:ring-primary-400 
rounded border-none cursor-pointer transition-all
`;

export function Button({ className, children, ...rest }: HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(
                "px-2 py-1 min-w-[8ch] text-primary-900 bg-primary-400 dark:text-primary-400 dark:bg-primary-950 border-primary-500/50 border rounded shadow active:scale-y-95",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
