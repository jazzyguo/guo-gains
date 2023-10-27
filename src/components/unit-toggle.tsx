import { useUnit, type Unit } from '@/contexts/unit-context';
import { Button } from './ui/button';

type Props = {
    onToggle: (newUnit: Unit) => void;
    className?: string;
}

export const UnitToggle = ({ onToggle, className }: Props) => {
    const { unit, setUnit } = useUnit()

    const handleToggle = () => {
        if (setUnit) {
            const newUnit = unit === 'metric' ? 'imperial' : 'metric'
            setUnit(newUnit);
            onToggle(newUnit)
        }
    };

    return (
        <div className={`${className} flex justify-center`}>
            <Button
                type="button"
                className={`
                    ${unit === 'metric'
                        ? 'bg-primary-accent/70 border-primary-accent'
                        : 'bg-gray-300 border-gray-400'
                    } 
                    border border-r-0 text-white font-semibold px-4 py-2 rounded-l-lg rounded-r-none`
                }
                onClick={handleToggle}
            >
                kg/cm
            </Button>
            <Button
                type="button"
                className={`
                    ${unit === 'imperial'
                        ? 'bg-primary-accent/70 border-primary-accent'
                        : 'bg-gray-300 border-gray-400'
                    } 
                    border border-l-0 text-white font-semibold px-4 py-2 rounded-r-lg rounded-l-none`
                }
                onClick={handleToggle}
            >
                ft&apos;in/lbs
            </Button>
        </div>
    );
};
