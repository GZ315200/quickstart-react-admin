
/**
 * 使用上与 useEffect 完全相同，只是它忽略了首次执行，只在依赖项更新时执行。
 */

import { useLayoutEffect } from 'react';
import { createUseUpdateEffeact } from './createUseUpdateEffeact';

export default createUseUpdateEffeact(useLayoutEffect);;