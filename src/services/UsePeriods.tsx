import { useEffect, useState } from "react";
import type { periodsTypeArray } from "../types/periodsType";

const UsePeriods = () => {
	const [periods, setPeriods] = useState<periodsTypeArray>();
	useEffect(() => {
		fetch("http://localhost:3310/periods")
			.then((res) => res.json())
			.then((data) => setPeriods(data));
	}, []);
	return periods;
};
export default UsePeriods;
