import { Form } from "./Form";

export function Section2_Main() {
    const lightClasses = "bg-primary-200 bg-gradient-to-b from-primary-400/40 to-primary-600/40 via-80% via-primary-400/40";
    const darkClasses = "dark:bg-primary-900 dark:bg-gradient-to-b dark:from-primary-700/40 dark:to-primary-800/20 dark:via-80% dark:via-primary-700/40";
    const allClasses = `${lightClasses} ${darkClasses} grid place-content-center`;

    return (
        <div className={allClasses}>
            <Form />
        </div>
    );
}
