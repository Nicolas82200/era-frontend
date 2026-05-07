import { createContext, useContext, useState } from "react";

const ActivePeriodsContext = createContext<any>(null);

export function ActivePeriodsProvider({ children }: any) {
	const [activePeriodsId, setActivePeriodsId] = useState<number>(0);

	return (
		<ActivePeriodsContext.Provider
			value={{ activePeriodsId, setActivePeriodsId }}
		>
			{children}
		</ActivePeriodsContext.Provider>
	);
}

export function useActivePeriods() {
	return useContext(ActivePeriodsContext);
}
