import React from 'react';
import { Button } from './Controls';
import { Control, useController, useForm } from 'react-hook-form';

type FormValues = {
    test: number;
};

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

            className="px-2 py-1 w-full rounded-sm" autoComplete="off" list="autocompleteOff" spellCheck="false"
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

    const oliveClasses = "bg-pink-400";
    /*
    // "tailwindCSS.experimental.classRegex": [
    //     "tw\\(['\"`]([^)]*)['\"`]\\)",
    // ],
    // "classNames\\(([^)]*)\\)",
    // settings.json
    //https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
    "tailwindCSS.experimental.classRegex": [
        ["Classes \\=([^;]*);", "'([^']*)'"],
        ["Classes \\=([^;]*);", "\"([^\"]*)\""],
        ["Classes \\=([^;]*);", "\\`([^\\`]*)\\`"]
      ],    
    */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="min-w-[400px] min-h-[540px] text-sm bg-primary-300 grid grid-rows-[auto,1fr,auto]">
                {/* Caption */}
                <div className="px-2 py-4 bg-primary-800">
                    Form Caption
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col space-y-4">
                    <Input control={control} />
                    <input className={`px-2 py-1 w-full rounded-sm ${oliveClasses}`} autoComplete="off" list="autocompleteOff" spellCheck="false" />
                    <input className="px-2 py-1 w-full rounded-sm" autoComplete="off" list="autocompleteOff" spellCheck="false" />
                </div>

                {/* Buttons */}
                <div className="p-4 border-primary-500/50 border-t flex items-center justify-end">
                    <Button>OK</Button>
                </div>
            </div>
        </form>
    );
}
