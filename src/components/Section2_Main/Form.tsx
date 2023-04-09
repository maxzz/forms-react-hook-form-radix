import React from 'react';
import { Button } from './Controls';
import { Control, useController, useForm } from 'react-hook-form';

type FormValues = {
    test: number;
};

const inputClasses = "px-2 py-1 w-full rounded-sm bg-primary-200 dark:bg-primary-800";

function Input({ control }: { control: Control<FormValues>; }) {
    const { field } = useController({
        control,
        name: "test"
    });
    const [value, setValue] = React.useState(String(field.value));

    React.useEffect(() => {
        setValue(String(field.value));
    }, [field.value, setValue]);

    return (
        <input
            ref={field.ref}
            value={value}
            type="number"
            onChange={(e) => {
                field.onChange(parseInt(e.target.value, 10) || 0); // send data to hook form
                setValue(e.target.value);
            }}
            onBlur={field.onBlur}

            //https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password
            className={inputClasses} autoComplete="new-password" list="autocompleteOff" spellCheck="false"
            // className={inputClasses} autoComplete="off" list="autocompleteOff" spellCheck="false"
        />
    );
}

export function Form() {

    const { control, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            test: 0
        }
    });
    function onSubmit(data: FormValues) {
        return console.log('submit data', data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="min-w-[400px] min-h-[540px] text-sm bg-primary-300 dark:bg-primary-900 grid grid-rows-[auto,1fr,auto]">
                {/* Caption */}
                <div className="px-2 py-4 bg-primary-800">
                    Form Caption
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col space-y-4">
                    <Input control={control} />
                    <input className={inputClasses} autoComplete="off" list="autocompleteOff" spellCheck="false" />
                    <input className={inputClasses} autoComplete="off" list="autocompleteOff" spellCheck="false" />
                </div>

                {/* Buttons */}
                <div className="p-4 border-primary-500/50 border-t flex items-center justify-end">
                    <Button>OK</Button>
                </div>
            </div>
        </form>
    );
}
