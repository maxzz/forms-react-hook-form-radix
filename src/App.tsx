import { useEffect } from "react";
import { FocusGuards } from "@radix-ui/react-focus-guards";
import { Section1_Header } from "./components/Section1_Header";
import { Section2_Main } from "./components/Section2_Main";
import { Section3_Footer } from "./components/Section3_Footer";
import { UIToaster } from "./components/ui/UIToaster";
import { UISymbolDefs } from "./components/ui/icons/UIIconSymbols";

export function App() {
    useEffect(() => {
        const guards = [...document.querySelectorAll('[data-radix-focus-guard]')] as HTMLSpanElement[];
        guards.forEach((guard) => { guard.dataset['ariaHidden'] = 'true'; guard.setAttribute('aria-hidden', 'true'); });
    }, []);

    return (
        <FocusGuards>
            <UIToaster />
            <UISymbolDefs />

            <div className="h-screen p-8">
                <div className="h-full text-primary-400 bg-primary-900 grid grid-rows-[auto,1fr,auto]">
                    <Section1_Header />
                    <Section2_Main />
                    <Section3_Footer />
                </div>
            </div>
        </FocusGuards>
    );
}
