import { useEffect, useState } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import type { DebounceOptions } from './types';
import useDebounceFn from './useDebounceFn';
import useUpdateEffect from './useUpdateEffect';
/**
 * 为 useEffect 增加防抖的能力。
 * 
 * @param effect 
 * @param deps 
 * @param options 
 */
function useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: DebounceOptions,
) {
  const [flag, setFlag] = useState({});

  const { run } = useDebounceFn(() => {
    setFlag({});
  }, options);

  useEffect(() => {
    return run();
  }, deps);

  useUpdateEffect(effect, [flag]);
}

export default useDebounceEffect;