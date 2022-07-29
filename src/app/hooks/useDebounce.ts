import { useEffect, useState } from 'react';
import useDebounceFn from './useDebounceFn';
import type { DebounceOptions } from './types';

/**
 * 用来处理防抖值的 Hook。
 * 
 * @param value 
 * @param options 
 * @returns 
 */
function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;