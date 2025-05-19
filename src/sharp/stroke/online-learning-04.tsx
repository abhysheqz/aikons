import React from "react";
const OnlineLearning_04: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.065 5.983H3.078v15.933h11.948v-6.97"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.043 18.929h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.027 3.62.03 8.448m0 0 6.017-1.695.008-8.423q-.001-.007-.008-.006l-6.047 1.51-6.048-1.54q-.007-.003-.008.005v8.454z"
      />
    </svg>
  );
};
export default OnlineLearning_04;
