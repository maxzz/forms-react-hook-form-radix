import { useState } from "react";
import { DarkLightSwitch } from "./DarkLight";
import { IconCiPen } from "../ui/icons/CustomIcons";

const checkboxClasses = `
form-checkbox 
text-primary-700 bg-primary-800 ring-1 focus:ring-1 focus:ring-offset-primary-800 ring-primary-600 focus:ring-primary-400 
rounded border-none cursor-pointer transition-all
`;

export function Section1_Header() {
    const [isDark, setIsDark] = useState(false);

    function changeMode() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('dark');
        setIsDark(body.classList.contains('dark'));
    }

    return (
        <div className="px-4 py-3 flex items-center justify-between">
            <IconCiPen className="w-6 h-6 stroke-none fill-current -rotate-90" title="App logo"/>

            {/* Darlk mode switch */}

            <button className="p-1" title={isDark ? 'Set light mode' : 'Set dark mode'} onClick={changeMode}>
                <DarkLightSwitch isDark={!isDark} />
            </button>
        </div>
    );
}
