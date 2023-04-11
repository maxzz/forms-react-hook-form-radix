import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export const select0Options: SelectOption[] = [
    { label: 'Ask - Reuse', value: '0' },
    { label: 'Ask - Confirm', value: '1' },
    { label: 'Ask Always', value: '2' },
];

export function Select0<T extends FieldValues>({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<T>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}

// <Select0 registered={register('value')} options={select0Options} />
