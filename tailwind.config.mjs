//const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{tsx,ts}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: colors.slate,
                ui: {
                    bg: colors.slate[100],
                    text: '#5a3543',
                },
            },
            ...require('./tailwind/tailwind-extra-animations').extraAnimations,
        },
    },
    plugins: [
        require('./tailwind/tailwnid-plugin-debug-styles'),
        require('./tailwind/tailwind-plugin-debug-screens'),
        require('./tailwind/tailwind-plugin-colors-bridge')([
            { prefix: '--tm-', groupName: 'primary' },
            { prefix: '--tm-', groupName: 'ui', groupNameOut: 'ui' },
        ]),
        require('./tailwind/tailwind-plugin-overflow-overlay'),
        require('./tailwind/tailwind-plugin-data-state'),
        require('tailwindcss-radix')(),
        require('@tailwindcss/forms')({strategy: 'class'}),
    ],
}
