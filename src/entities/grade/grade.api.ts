import { CITIZEN_API } from "constants/api";

export const URL_GRADES = `${CITIZEN_API}/grades`;
export const URL_GRADE = (id: number) => `${URL_GRADES}/${id}`;