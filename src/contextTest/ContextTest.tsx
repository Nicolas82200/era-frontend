import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { eraIndexToCssClass } from "../utils/eraMapping";

type Period = {
  id: number;
  name: string;
  index_name: string;
  time_start: string;
  time_end: string;
  introduction: string;
  description: string;
};

type EraContextType = {
  periods: Period[] | undefined;
  currentEraId: number;
  setCurrentEraId: (id: number) => void;
  getCurrentEra: () => Period | undefined;
  getCurrentCssClass: () => string;
};

const EraContext = createContext<EraContextType | undefined>(undefined);

export function EraProvider({ children }: { children: ReactNode }) {
  const [periods, setPeriods] = useState<Period[]>();
  const [currentEraId, setCurrentEraId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3310/periods")
      .then((res) => res.json())
      .then((data) => setPeriods(data));
  }, []);

  const getCurrentEra = () => {
    return periods?.find((p) => p.id === currentEraId);
  };

  const getCurrentCssClass = () => {
    const era = getCurrentEra();
    if (!era) return "before-prehistory";
    return eraIndexToCssClass[era.index_name] || "before-prehistory";
  };

  return (
    <EraContext.Provider
      value={{
        periods,
        currentEraId,
        setCurrentEraId,
        getCurrentEra,
        getCurrentCssClass,
      }}
    >
      {children}
    </EraContext.Provider>
  );
}

export function useEra() {
  const context = useContext(EraContext);
  if (!context) throw new Error("useEra doit être utilisé dans EraProvider");
  return context;
}
