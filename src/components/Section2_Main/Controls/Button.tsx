import { HTMLAttributes } from "react";
import { classNames } from "@/utils";

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
