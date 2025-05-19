import React from "react";
const Plane: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.996 7.75c-1.805 0-3.074.776-3.951 1.926-.846 1.109-1.315 2.545-1.639 3.885-.468 1.937.126 3.451 1.324 4.427 1.14.927 2.742 1.306 4.266 1.258 1.524.048 3.127-.33 4.265-1.258 1.199-.976 1.793-2.49 1.325-4.427-.324-1.34-.793-2.776-1.64-3.885-.877-1.15-2.146-1.926-3.95-1.926m0 4.75a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM2.996 20.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M18.996 20.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 15.571 6.996 13l-.003 2.428-5 2zm20.757 1.857-5-2V13l5.743 2.571zM12.996 2.5v6h-2v-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.996 16v2.5h-2V16zM20.746 16v2.5h-1.5V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plane;
