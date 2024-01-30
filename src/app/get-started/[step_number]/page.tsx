import { type NextPage } from "next";
import { UnitProvider } from "@/contexts/unit-context";
import { HydratedGetStartedFormWizard } from "@/features/get-started";

interface PageParams {
    step_number: string;
}

const GetStartedPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;

    const currentStep = parseInt(step_number);

    return (
        <UnitProvider>
            <HydratedGetStartedFormWizard currentStep={currentStep} />
        </UnitProvider>
    )
};

export default GetStartedPage;
