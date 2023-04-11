import { HTMLAttributes } from "react";
import { Control, FieldValues, UseControllerProps, useController } from "react-hook-form";

const checkboxClasses = `
form-checkbox 
text-primary-700 bg-primary-800 ring-1 focus:ring-1 focus:ring-offset-primary-800 ring-primary-600 focus:ring-primary-400 
rounded border-none cursor-pointer transition-all
`;

function CheckboxControl<T extends FieldValues>({ name, control }: UseControllerProps<T, any>) {
    const { field } = useController({ name, control });
    return (
        <input
            type="checkbox"
            {...field}
            checked={field.value}
            className="
                form-checkbox
                text-gray-700 bg-gray-200
                border-transparent
                focus:border-transparent focus:bg-gray-200
                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                rounded
                "
        />
    );
}

export function Checkbox<T extends FieldValues>({ children, name, control, ...rest }: { name: string; control: Control<T, any>; } & HTMLAttributes<HTMLElement>) {
    return (
        <label className="flex items-center space-x-2">
            <CheckboxControl name={name} control={control} />

            <div className="">
                {children}
            </div>
        </label>
    );
}
