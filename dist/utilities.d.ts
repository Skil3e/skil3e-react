import { BreakPoints, Pos } from "./types";
import { Dispatch, SetStateAction } from "react";
export declare type ScreenBreakpoint = {
    phone?: number;
    tablet?: number;
    laptop?: number;
    desktop?: number;
};
export declare const useCheckForScreens: (breakPoints?: ScreenBreakpoint | undefined) => [boolean, string];
export declare const useThemeChanger: () => [string, Dispatch<SetStateAction<string>>];
export declare function joinStr(name?: string): string;
export declare const joinIgnoreEmpty: (...strings: any) => any;
export declare const createLabel: (name: string, operator?: string) => string;
export declare function convertDate(date: string): string;
export declare function useInterval(callback: () => void, delay: number): void;
interface CreateSpacersProps extends Pos, BreakPoints<Pos> {
}
export declare function createSpacers(spacer?: CreateSpacersProps, prefix?: string): string;
export declare function createColumns(size?: number | BreakPoints<number>): string;
export {};
