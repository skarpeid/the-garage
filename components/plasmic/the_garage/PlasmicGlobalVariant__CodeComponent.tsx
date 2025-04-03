/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type CodeComponentValue =
  | "_default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
export const CodeComponentContext = React.createContext<
  CodeComponentValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useCodeComponent() {
  return React.useContext(CodeComponentContext);
}

export default CodeComponentContext;
/* prettier-ignore-end */
