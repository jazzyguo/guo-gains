"use client"

import { useState, useEffect, type ReactNode } from 'react';
import { Loading } from '@/components/ui/loading';
import { useGetStartedStore } from '../../store';

/**
 * Blocks rendering of the form wizard until the client rehydrates the form values from zustand
 */
export const GetStartedFormWizardHydrator = ({ children }: { children: ReactNode }) => {
    const [hasHydrated, setHasHydrated] = useState<boolean>(false);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        useGetStartedStore.persist.rehydrate();
        setHasHydrated(true);
    }, [setHasHydrated]);

    if (!hasHydrated) {
        return <Loading />;
    }

    return children
}
