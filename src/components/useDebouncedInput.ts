import { useEffect, useState } from "react";

export function useDebouncedInput<T>(inputValue: T, delay: number) {
  const [debouncedInputValue, setDebouncedInputValue] = useState<T | null>(
    null,
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, delay]);
  return [debouncedInputValue] as const;
}
