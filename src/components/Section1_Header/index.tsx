import { appUi, useSnapshot } from "@/store-ui";
import { DarkLightSwitch } from "./DarkLight";
import { IconCiPen } from "../ui/icons/CustomIcons";

export function Section1_Header() {
    const state = useSnapshot(appUi);

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
