import * as React from "react";
import { Intents } from "../types";
import { HTMLAttributes } from "react";
export interface MenuToggleProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    intent?: Intents;
}
declare const MenuToggle: React.ForwardRefExoticComponent<MenuToggleProps & React.RefAttributes<HTMLDivElement>>;
export default MenuToggle;
