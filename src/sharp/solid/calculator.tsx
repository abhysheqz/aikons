import React from "react";
const Calculator: React.FC<
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
        d="M4.5 4.5V3h2v1.5H8v2H6.5V8h-2V6.5H3v-2zM6 19.414l1.293 1.293 1.414-1.414L7.414 18l1.293-1.293-1.414-1.414L6 16.586l-1.293-1.293-1.414 1.414L4.586 18l-1.293 1.293 1.414 1.414zM16 5h4v2h-4zM16 14.5h4v2h-4zm0 3h4v2h-4zM2 11h20v2H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2v20h-2V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calculator;
