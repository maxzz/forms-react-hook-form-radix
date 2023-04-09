import React, { AllHTMLAttributes, HTMLAttributes, useEffect, useState } from 'react';
import { Button } from './Controls';
import { Control, Controller, UseControllerProps, useController, useForm } from 'react-hook-form';
import { classNames } from '@/utils';

type FormValues = {
    test: number;
    inputState: string;
};

const inputClasses = "px-2 py-1 w-full rounded-sm bg-primary-200 dark:bg-primary-800";
const turnOffAutoComplete: AllHTMLAttributes<HTMLElement> = { autoComplete: "new-password", list: "autocompleteOff", spellCheck: "false", };

function InputWithOwnState({ control }: { control: Control<FormValues>; }) {
    const { field } = useController({ control, name: "test", });

    const [value, setValue] = useState(String(field.value));

    useEffect(() => {
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

            className={inputClasses}

            {...turnOffAutoComplete}
        />
    );
}

// function InputWithController({ control }: { control: Control<FormValues>; }) {
//     return (
//     );
// }

function InputWithController(props: UseControllerProps<FormValues>) {
    const { field, fieldState } = useController(props);
    return (
        <div>
            <input {...field} placeholder={props.name} {...turnOffAutoComplete} className={inputClasses} />
            <div className="flex text-[.65rem] space-x-2">
                <div className="">{fieldState.isTouched && "touched"}</div>
                <div className={classNames(fieldState.isDirty && 'text-yellow-500')}>{fieldState.isDirty && "dirty"}</div>
                <div className={classNames(fieldState.invalid && 'text-red-500')}>{fieldState.invalid ? "invalid" : "valid"}{fieldState.error && <span className=""> {fieldState.error.message}</span> }</div>
                <div className="">value: '{field.value}'</div>
            </div>
        </div>
    );
}

// function InputWithController({ control }: { control: Control<FormValues>; }) {
//     return (
//         <Controller
//             name="inputState"
//             control={control}
//             render={({field}) => <input placeholder="inputState" {...field} />}
//             rules={{
//                 validate: () => {
//                     return getValues("firstName") === "bill";
//                 }
//             }}
//             defaultValue=""
//         />
//     );
// }

export function Form() {
    const { control, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            test: 0,
            inputState: 'now'
        }
    });

    function onSubmit(data: FormValues) {
        return console.log('submit data', data);
    }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow dark:shadow-primary-500/20">
            <div className="min-w-[400px] min-h-[540px] text-sm bg-primary-300 dark:bg-primary-900 grid grid-rows-[auto,1fr,auto]">
                {/* Caption */}
                <div className="px-2 py-4 text-primary-800 dark:text-primary-400 bg-primary-400 dark:bg-primary-950">
                    Form Caption
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col space-y-4">
                    <InputWithOwnState control={control} />
                    {/* <InputWithController name="inputState" control={control} rules={{ required: true }} /> */}
                    <InputWithController name="inputState" control={control} rules={{
                        validate: (value) => value === '1' || 'ERROR MESSAGE'
                    }} />

                    <input className={inputClasses} {...turnOffAutoComplete} />
                    <input className={inputClasses} {...turnOffAutoComplete} />
                </div>

                {/* Buttons */}
                <div className="p-4 border-primary-500/50 border-t flex items-center justify-end">
                    <Button onClick={handleSubmit(onSubmit)}>OK</Button>
                </div>
            </div>
        </div>
    );
}
