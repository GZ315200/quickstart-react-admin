
/**
 * 将 state 存储在 localStorage 中
 * 
 */


import { createUseStorageState } from "./createUseStorageState";
import { isBrowser } from "utils"

const useLocalStorageState = createUseStorageState(() => (isBrowser ? localStorage : undefined));
export default useLocalStorageState;

