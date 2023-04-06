import { Section1_Header } from "./components/Section1_Header";
import { Section2_Main } from "./components/Section2_Main";
import { Section3_Footer } from "./components/Section3_Footer";

export function App() {
    return (
        <div className="h-screen">
            <div className="h-full text-primary-400 bg-primary-900 grid grid-rows-[auto,1fr,auto]">
                <Section1_Header />

                <div className="bg-primary-700 grid place-content-center">
                    <Section2_Main />
                </div>

                <Section3_Footer />
            </div>
        </div>
    );
}
