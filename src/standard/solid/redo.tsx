import React from "react";
const Redo: React.FC<
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
        d="M20.587 2.004a1 1 0 0 1 .91 1.083l-.436 5a1 1 0 0 1-1.095.908l-5.064-.5a1 1 0 0 1 .196-1.99l2.981.294A8 8 0 1 0 20 12a1 1 0 1 1 2.001.001c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.97 9.97 0 0 1 7.307 3.173l.197-2.26a1 1 0 0 1 1.083-.91"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo;
