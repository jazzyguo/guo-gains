"use client"
import { cn } from "@/lib/utils";
import { useCallback, useState, memo } from "react";

type Props = {
    textToCopy: string;
    className?: string;
    label?: string;
    textToShow?: string;
}

export const _CopyButton = ({ textToCopy, className, label, textToShow }: Props) => {
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = useCallback(() => {
        // Create a textarea element to facilitate copying text
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 4000);
    }, [textToCopy]);

    return (
        <div
            className={cn(
                'cursor-pointer flex flex-col border gap-2 bg-gray-300 w-max p-2 rounded-lg hover:opacity-80',
                className,
            )}
            onClick={copyToClipboard}
        >
            <span className="text-sm font-bold">{copied ? 'Copied!' : label}</span>
            {textToShow &&
                <span className="bg-white rounded-full p-2 text-sm font-bold">
                    {textToShow}
                </span>
            }
        </div>
    );
}

export const CopyButton = memo(_CopyButton)

