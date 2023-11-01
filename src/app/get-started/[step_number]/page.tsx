"use client"
import { useState, useEffect } from "react";
import { type NextPage } from "next";
import { GetStartedFormWizard } from '@/features/get-started';
import { UnitProvider } from "@/contexts/unit-context";
import { useGetStartedStore } from "@/features/get-started";
import { Loading } from '@/components/ui/loading';

interface PageParams {
    step_number: string;
}

const GetStartedPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;
    const [hasHydrated, setHasHydrated] = useState<boolean>(false);

    const currentStep = parseInt(step_number);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        useGetStartedStore.persist.rehydrate();
        setHasHydrated(true);
    }, [setHasHydrated]);

    if (!hasHydrated) {
        return <Loading />;
    }

    return (
        <UnitProvider>
            <GetStartedFormWizard currentStep={currentStep} />
        </UnitProvider>
    )
};

export default GetStartedPage;
