import localFont from 'next/font/local';

export const roboto = localFont({
    src: [{
        path: './Roboto-VariableFont.woff2',
        weight: '100 900',
        style: 'normal'
    },
    {
        path: './Roboto-VariableFont.woff',
        weight: '100 900',
        style: 'normal'
    },
    {
        path: './Roboto-VariableFont.ttf',
        weight: '100 900',
        style: 'normal'
    },
    ],
    display: 'swap',
    variable: '--font-roboto'
})

export const exo2 = localFont({
    src: [{
        path: './Exo2-VariableFont.woff2',
        weight: '100 900',
        style: 'normal'
    },
    {
        path: './Exo2-VariableFont.woff',
        weight: '100 900',
        style: 'normal'
    },
    {
        path: './Exo2-VariableFont.ttf',
        weight: '100 900',
        style: 'normal'
    },
    ],
    display: 'swap',
    variable: '--font-exo2'
})