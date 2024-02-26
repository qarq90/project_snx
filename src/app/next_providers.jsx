'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextProviders({children}) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}