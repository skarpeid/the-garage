/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type SizeValue = "_default" | "sm" | "lg" | "icon";
export const SizeContext = React.createContext<SizeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useSize() {
  return React.useContext(SizeContext);
}

export default SizeContext;
/* prettier-ignore-end */
