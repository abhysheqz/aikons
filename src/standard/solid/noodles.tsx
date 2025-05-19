import React from "react";
const Noodles: React.FC<
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
        d="M21.479 1.793a1 1 0 0 1-.771 1.185l-6.5 1.38a1 1 0 1 1-.415-1.957l6.5-1.379a1 1 0 0 1 1.186.77M7.478 4.758a1 1 0 0 1-.766 1.19l-2.5.542a1 1 0 1 1-.424-1.955l2.5-.542a1 1 0 0 1 1.19.765m14.518 1.154a1 1 0 0 1-.908 1.084l-7 .618a1 1 0 0 1-.176-1.992l7-.618a1 1 0 0 1 1.084.908M7.461 7.001a1 1 0 0 1-.682 1.239l-2.5.726a1 1 0 1 1-.558-1.92l2.5-.727a1 1 0 0 1 1.24.682M12.5 11.5a3.5 3.5 0 1 1 7 0h-2a1.5 1.5 0 1 0-3 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1a1 1 0 0 1 1 1v5.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M9 1.5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1m-2.5 1a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V3.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.466 11.473A.75.75 0 0 1 3 11.25h18a.75.75 0 0 1 .75.76c-.06 4.347-3.096 6.511-4.82 7.386l.355 1.035a1.75 1.75 0 0 1-1.655 2.319H8.38a1.75 1.75 0 0 1-1.657-2.31l.351-1.042C5.35 18.524 2.311 16.36 2.25 12.01a.75.75 0 0 1 .216-.537"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Noodles;
