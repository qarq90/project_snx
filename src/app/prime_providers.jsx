'use client'

import {PrimeReactProvider} from 'primereact/api'
import 'primereact/resources/themes/lara-dark-teal/theme.css'
import 'primeicons/primeicons.css'

export function PrimeProviders({children}) {
    return (
        <PrimeReactProvider>
            {children}
        </PrimeReactProvider>
    )
}