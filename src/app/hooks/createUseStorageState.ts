
import { useState, useEffect } from 'react';
import { isFunction, isUndef } from 'utils';
import useMemoizedFn from './useMemoizedFn';


export interface IFuncUpdater<T> {
    (previousState?: T): T;
}

export interface IFuncStorage {
    (): Storage;
}

export interface Options<T> {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    defaultValue?: T | IFuncUpdater<T>;
}

export const createUseStorageState = (getStorage: () => Storage | undefined) => {

    function useStorageState<T>(key: string, options?: Options<T>) {
        let storage: Storage | undefined;
        try {
            storage = getStorage();
          } catch (err) {
            console.error(err);
          }

          const serializer = (value: T) => {
            if (options?.serializer) {
              return options?.serializer(value);
            }
            return JSON.stringify(value);
          };
      
          const deserializer = (value: string) => {
            if (options?.deserializer) {
              return options?.deserializer(value);
            }
            return JSON.parse(value);
          };

          function getStoredValue() {
            try {
              const raw = storage?.getItem(key);
              if (raw) {
                return deserializer(raw);
              }
            } catch (e) {
              console.error(e);
            }
            if (isFunction(options?.defaultValue)) {
              return options?.defaultValue();
            }
            return options?.defaultValue;
          }

          const [state, setState] = useState<T>(() => getStoredValue());
          
          useEffect(() => {
            setState(getStoredValue());
          }, [key]);

          const updateState = (value: T | IFuncUpdater<T>) => {
            const currentState = isFunction(value) ? value(state) : value;
            setState(currentState);
      
            if (isUndef(currentState)) {
              storage?.removeItem(key);
            } else {
              try {
                storage?.setItem(key, serializer(currentState));
              } catch (e) {
                console.error(e);
              }
            }
          };

          return [state, useMemoizedFn(updateState)] as const;
    }
    return useStorageState;
}