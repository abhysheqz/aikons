import React from "react";
const Comet_02: React.FC<
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
        d="M15.707 1.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0m-3.5 3.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0M18.056 10.056a2.75 2.75 0 1 1 3.889 3.888 2.75 2.75 0 0 1-3.89-3.889M6.705 10.31a.75.75 0 0 1 .865.202l2.528 2.95 1.934-1.548a.75.75 0 0 1 1.124.222l2.5 4.5a.75.75 0 0 1 .04.643l-1 2.5a.75.75 0 0 1-.427.421l-6.5 2.5a.75.75 0 0 1-.71-.093l-5.5-4a.75.75 0 0 1-.282-.804l1.5-5.5a.75.75 0 0 1 .428-.492zM22.707 1.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comet_02;
