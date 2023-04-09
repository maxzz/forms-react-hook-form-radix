import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export function IconCiPen({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M20.23 11.28a2.3 2.3 0 0 0-3-.14l-1.79-5.4a2.48 2.48 0 0 0-2.1-1.7l-8.58-.93a1.5 1.5 0 0 0-1.64 1.65l.93 8.58a2.48 2.48 0 0 0 1.7 2.1l5.38 1.77a2.26 2.26 0 0 0-.5 1.43 2.26 2.26 0 0 0 2.24 2.25 2.26 2.26 0 0 0 1.6-.66l5.77-5.77a2.25 2.25 0 0 0 0-3.18ZM6.05 14.5a1.5 1.5 0 0 1-1.02-1.26l-.9-8.39 4.01 4.01a1.19 1.19 0 0 0 .29 1.22 1.17 1.17 0 1 0 1.65-1.65 1.14 1.14 0 0 0-1.21-.27L4.85 4.13l8.39.9a1.48 1.48 0 0 1 1.26 1.02l1.93 5.87-4.51 4.5ZM17.77 12a1.25 1.25 0 0 1 2.13.88 1.24 1.24 0 0 1-.37.89l-5.77 5.77a1.28 1.28 0 0 1-1.77 0 1.25 1.25 0 0 1 0-1.77Z"/>
        </svg>
    );
}
