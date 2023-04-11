import { HTMLAttributes } from "react";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

function CheckboxControl({ name, control }: UseControllerProps<FieldValues, any>) {
    const { field } = useController({ name, control });
    return (
        <input
            type="checkbox"
            {...field}
            className="
                form-checkbox
                rounded
                bg-gray-200
                border-transparent
                focus:border-transparent focus:bg-gray-200
                text-gray-700
                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                "
        />
    );
}

export function Checkbox({ children, name, control, ...rest }: UseControllerProps<FieldValues, any> & HTMLAttributes<HTMLElement>) {
    return (
        <label className="flex items-center space-x-2">
            <CheckboxControl name={name} control={control} />
            <div className="">{children}</div>
        </label>
    );
}
