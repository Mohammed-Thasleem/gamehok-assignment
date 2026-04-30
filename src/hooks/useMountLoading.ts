import { useEffect, useState } from "react";

/** Returns true for the first `ms` milliseconds after mount. Used for skeleton loaders. */
export const useMountLoading = (ms = 1000) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(t);
  }, [ms]);
  return loading;
};
