import { useEffect } from "react";

const noop = ()=>{}

const useDismissOverflow = (
  dismiss = noop,
  ref = null,
  isOpen = false,
  deps = []
) => {
  useEffect(() => {
    const node = ref?.current;

    if (!node || !isOpen) return;

    const handleClick = e => {
      const { target } = e;
      if (!node.contains(target)) dismiss(e);
    };

    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("touchstart", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("touchstart", handleClick, {
        capture: true
      });
    };
  }, [ref, isOpen, ...deps]);

  return ref;
};

export default useDismissOverflow;