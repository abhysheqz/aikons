import React from "react";
const OnlineLearning_02: React.FC<
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
        strokeWidth={1.5}
        d="M18.49 21.995H7.518c-2.397.076-3.708-.686-4-2.86m14.974 2.86h1.98m-1.98 0V15.99m0 0h2.005V2H6.398c-1.913.214-3.053 1.292-2.881 4.153v10.282c-.033.765 0 1.832 0 2.7M18.49 15.99l-11.005-.01c-2.902-.121-3.89 1.239-3.97 3.156"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.969 7.34c1.006-.669 2.607-1.455 4.021-1.35 1.406 0 3.004.675 4.013 1.35m-1.83 2.383c-.478-.289-1.356-.6-2.183-.6-.753 0-1.632.274-2.17.6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 12.003.008-.002"
      />
    </svg>
  );
};
export default OnlineLearning_02;
