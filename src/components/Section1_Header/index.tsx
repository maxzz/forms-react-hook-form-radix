import { useEffect, useState } from "react";
import { DarkLightSwitch } from "./DarkLight";
import { IconCiPen } from "../ui/icons/CustomIcons";
import { appUi, useSnapshot } from "@/store-ui";

const checkboxClasses = `
form-checkbox 
text-primary-700 bg-primary-800 ring-1 focus:ring-1 focus:ring-offset-primary-800 ring-primary-600 focus:ring-primary-400 
rounded border-none cursor-pointer transition-all
`;

export function Section1_Header() {
    const state = useSnapshot(appUi);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        state.dark && body.classList.add('dark');
     }, []);

    function changeMode() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('dark');
        appUi.dark = body.classList.contains('dark');
    }

    return (
        <div className="px-4 py-3 flex items-center justify-between">
            <IconCiPen className="w-6 h-6 stroke-none fill-current -rotate-90" title="App logo" />

            {/* Darlk mode switch */}

            <button className="p-1" title={state.dark ? 'Set light mode' : 'Set dark mode'} onClick={changeMode}>
                <DarkLightSwitch isDark={!state.dark} />
            </button>
        </div>
    );
}
