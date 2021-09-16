import React from "react";
import { BoxProps } from "../Box";
declare type InfoTooltip = {
    text: string;
} & BoxProps;
declare const InfoTooltip: React.FC<InfoTooltip>;
export default InfoTooltip;
