import { AllHTMLAttributes } from 'react';
import { Button, Checkbox, Select } from './Controls';
import { Control, Controller, FieldErrors, FieldValues, UseControllerProps, UseFormRegister, UseFormRegisterReturn, useController, useForm } from 'react-hook-form';
import { classNames } from '@/utils';

const inputClasses = "px-2 py-1 w-full rounded-sm bg-primary-200 dark:bg-primary-800";
const turnOffAutoComplete: AllHTMLAttributes<HTMLElement> = { autoComplete: "new-password", list: "autocompleteOff", spellCheck: "false", };

export const select2Options: string[] = [
    'Ask - Reuse',
    'Ask - Confirm',
    'Ask Always',
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
    valueAs: 2,
};

export function Form() {
    const formInstance = useForm({ defaultValues, });

    const { register, formState: { errors }, control, handleSubmit, reset } = formInstance;

    function onSubmit(data: FieldValues) {
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

                    <Select name="valueAs" control={control} options={select2Options} />

                    <Checkbox<ThisFormValues> name="submit" control={control}>
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
