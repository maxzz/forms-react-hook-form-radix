import { Section1_Header } from "./components/Section1_Header";
import { Section2_Main } from "./components/Section2_Main";
import { Section3_Footer } from "./components/Section3_Footer";

export function App() {
    return (
        <div className="h-screen">
            <div className="h-full bg-yellow-500 grid place-content-center">
                <Section1_Header />

                <div className="min-w-[400px] min-h-[540px] bg-yellow-700">
                    <Section2_Main />
                </div>
                
                <Section3_Footer />
            </div>
        </div>
    );
}
