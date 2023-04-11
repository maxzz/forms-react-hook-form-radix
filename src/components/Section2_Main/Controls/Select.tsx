import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import { Dropdown } from "./Dropdown";

export function Select({ options, name, control }: UseControllerProps<FieldValues, any> & { options: string[]; }) {
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
