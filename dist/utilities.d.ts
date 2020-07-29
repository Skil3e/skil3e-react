import { BreakPoints, Pos } from "./types";
export declare const joinIgnoreEmpty: (...strings: any) => any;
export declare const createLabel: (name: string, operator?: string) => string;
interface CreateSpacersProps extends Pos, BreakPoints<Pos> {
}
export declare function createSpacers(spacer?: CreateSpacersProps, prefix?: string): string;
export declare function createColumns(size?: number | BreakPoints<number>): string;
export {};
