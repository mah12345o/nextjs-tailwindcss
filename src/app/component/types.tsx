import { MouseEventHandler } from "react";

export interface CustumButonprops {
    title: string,
    containerStyles: string,
    handelClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"|"submit";
} 