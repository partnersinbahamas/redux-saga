import { actionCreator } from "../../utils";

export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const increase = actionCreator(INCREASE_COUNT);
export const decrease = actionCreator(DECREASE_COUNT);
