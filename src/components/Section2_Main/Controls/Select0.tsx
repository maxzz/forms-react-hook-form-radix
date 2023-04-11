import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export function Select0<T extends FieldValues>({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<T>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}
