import { BreakPoints, Pos } from "./types";
export declare const useCheckForScreens: () => (string | boolean)[];
export declare const useThemeChanger: () => (string | import("react").Dispatch<import("react").SetStateAction<string>>)[];
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
