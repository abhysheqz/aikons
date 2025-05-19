import React from "react";
const NeuralNetwork: React.FC<
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
        d="M21.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM13.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10.5 19.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 5 4 5m-3 5.5-4 3m-2.5-1-3-8m1.313-2.846L10.5 4.5m2 7 4.005.344M12 5.5 11 10"
      />
    </svg>
  );
};
export default NeuralNetwork;
