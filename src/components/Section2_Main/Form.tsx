import React, { AllHTMLAttributes, HTMLAttributes, useEffect, useState } from 'react';
import { Button, Checkbox, Dropdown } from './Controls';
import { Control, Controller, FieldErrors, FieldValues, UseControllerProps, UseFormRegisterReturn, useController, useForm } from 'react-hook-form';
import { classNames } from '@/utils';

const inputClasses = "px-2 py-1 w-full rounded-sm bg-primary-200 dark:bg-primary-800";
const turnOffAutoComplete: AllHTMLAttributes<HTMLElement> = { autoComplete: "new-password", list: "autocompleteOff", spellCheck: "false", };

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export function Select<T extends FieldValues>({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<T>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}

export const select2Options: string[] = [
    'Ask - Reuse',
    'Ask - Confirm',
    'Ask Always',
];

export function Select2({ options, name, control }: UseControllerProps<ThisFormValues, any> & { options: string[]; }) {
    const { field } = useController({ name, control, });


    return (<>
        <Dropdown
            items={options}
            selectedIndex={field.value === undefined ? 0 : field.value}
            onSetIndex={(idx: number) => {
                console.log('selected', idx);
                field.onChange(idx);
            }}
        />
        <div className=""></div>
    </>);
}


export const selectOptions: SelectOption[] = [
    { label: 'Ask - Reuse', value: '0' },
    { label: 'Ask - Confirm', value: '1' },
    { label: 'Ask Always', value: '2' },
];

interface ThisFormValues extends FieldValues {
    // test: number;
    //inputState: string;
    value: string;
    submit: boolean;
    valueAs: number;
};

const defaultValues: ThisFormValues = {
    // test: 0,
    //inputState: 'now',
    value: '0',
    submit: true,
    valueAs: 0,
};

export function Form() {
    const formInstance = useForm({ defaultValues, });

    const { register, formState: { errors }, control, handleSubmit, reset } = formInstance;

    function onSubmit(data: ThisFormValues) {
        return console.log('submit data', data);
    }

    return (
        <div className="shadow dark:shadow-primary-500/20">
            <div className="min-w-[400px] min-h-[540px] text-sm bg-primary-300 dark:bg-primary-900 grid grid-rows-[auto,1fr,auto]">

                {/* Caption */}
                <div className="px-2 py-4 text-primary-800 dark:text-primary-400 bg-primary-400 dark:bg-primary-950">
                    Form Caption
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col space-y-4">
                    {/* <InputWithOwnState control={control} /> */}
                    {/* <input className={inputClasses} {...turnOffAutoComplete} /> */}

                    {/* <InputWithController name="inputState" control={control} rules={{ required: true }} /> */}

                    {/* <input className={inputClasses} {...turnOffAutoComplete} />
                    <input className={inputClasses} {...turnOffAutoComplete} /> */}

                    <Select registered={register('value')} options={selectOptions} />

                    <Select2 name="valueAs" control={control} options={select2Options} />

                    <Checkbox name="submit" control={control}>
                        Submit now
                    </Checkbox>
                </div>

                {/* Buttons */}
                <div className="p-4 border-primary-500/50 border-t flex items-center justify-end">
                    <Button onClick={handleSubmit(onSubmit)}>OK</Button>
                </div>
            </div>
        </div>
    );
}
