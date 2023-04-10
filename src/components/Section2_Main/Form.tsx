import React, { AllHTMLAttributes, HTMLAttributes, useEffect, useState } from 'react';
import { Button } from './Controls';
import { Control, Controller, UseControllerProps, useController, useForm } from 'react-hook-form';
import { classNames } from '@/utils';

type ThisFormValues = {
    // test: number;
    inputState: string;
    // submit: boolean;
};

const inputClasses = "px-2 py-1 w-full rounded-sm bg-primary-200 dark:bg-primary-800";
const turnOffAutoComplete: AllHTMLAttributes<HTMLElement> = { autoComplete: "new-password", list: "autocompleteOff", spellCheck: "false", };

function Checkbox({children, ...rest}: UseControllerProps<ThisFormValues, any> & HTMLAttributes<HTMLElement>) {
    const { field } = useController(rest);
    return (
        <label className="flex items-center space-x-2">
            <input type="checkbox" {...field} className="
                form-checkbox
                rounded
                bg-gray-200
                border-transparent
                focus:border-transparent focus:bg-gray-200
                text-gray-700
                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500            
            " />
            <div className="">{children}</div>
        </label>
    );
}

export function Form() {
    const { control, handleSubmit, reset } = useForm<ThisFormValues>({
        defaultValues: {
            // test: 0,
            inputState: 'now',
            // submit: true,
        }
    });

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
