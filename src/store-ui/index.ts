import { proxy, subscribe } from "valtio";
export { useSnapshot } from 'valtio';
import { mergeDefaultAndLoaded } from "@/utils";

const STORAGE_KEY = 'forms-react-hook-form-radix-ui';
const STORAGE_VER = 'v1';

type AppUi = {
    dark: boolean;
};

const initialAppUi: AppUi = {
    dark: false,
};

export const appUi = proxy<AppUi>(loadStorageAppUi());

// Local storage

function loadStorageAppUi(): AppUi {
    const storage = localStorage.getItem(STORAGE_KEY);
    if (storage) {
        try {
            const state = mergeDefaultAndLoaded(JSON.parse(storage)?.[STORAGE_VER], initialAppUi);
            return state;
        } catch (error) {
        }
    }
    return initialAppUi;
}

subscribe(appUi, () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ [STORAGE_VER]: appUi }));
});
