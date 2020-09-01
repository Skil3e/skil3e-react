import * as React from "react";
import { TextareaHTMLAttributes } from "react";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
