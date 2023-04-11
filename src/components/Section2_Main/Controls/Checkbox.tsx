import { HTMLAttributes } from "react";
import { Control, FieldValues, UseControllerProps, useController } from "react-hook-form";

function CheckboxControl({ name, control }: UseControllerProps<FieldValues, any>) {
    const { field } = useController({ name, control });
    return (
        <input
            type="checkbox"
            {...field}
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

export function Checkbox({ children, name, control, ...rest }: { name: string; control: Control<FieldValues, any>; } & HTMLAttributes<HTMLElement>) {
    return (
        <label className="flex items-center space-x-2">
            <CheckboxControl name={name} control={control} />

            <div className="">
                {children}
            </div>
        </label>
    );
}