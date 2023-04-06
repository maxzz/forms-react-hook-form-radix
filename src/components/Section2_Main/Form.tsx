import React from 'react';
import { Button } from './Controls';

export function Form() {
    return (
        <div className="min-w-[400px] min-h-[540px] text-sm bg-primary-300 grid grid-rows-[auto,1fr,auto]">
            {/* Caption */}
            <div className="px-2 py-4 bg-primary-800">
                Form Caption
            </div>

            {/* Body */}
            <div className="px-4 py-4">
                <input className="px-2 py-1 w-full" />
            </div>

            {/* Buttons */}
            <div className="px-2 py-4 border-primary-500/50 border-t flex items-center justify-end">
                <Button />
            </div>
        </div>
    );
}
