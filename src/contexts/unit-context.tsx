import { createContext, useContext, type ReactNode, useState, type Dispatch, type SetStateAction, useEffect } from 'react';

type Unit = 'metric' | 'imperial';

const LOCAL_STORAGE_KEY = 'selectedUnits';

const UnitContext = createContext<{
    unit: Unit;
    setUnit?: Dispatch<SetStateAction<Unit>>;
}>({
    unit: 'metric',
});

export const useUnit = () => useContext(UnitContext);

interface UnitProviderProps {
    children: ReactNode;
}

export function UnitProvider({ children }: UnitProviderProps) {
    const [unit, setUnit] = useState<Unit>(() => {
        const storedUnits = localStorage.getItem(LOCAL_STORAGE_KEY);
        return (storedUnits as Unit) || 'metric';
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, unit);
    }, [unit]);

    return (
        <UnitContext.Provider value={{ unit, setUnit }}>
            {children}
        </UnitContext.Provider>
    );
}
