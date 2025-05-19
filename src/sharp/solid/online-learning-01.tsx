import React from "react";
const OnlineLearning_01: React.FC<
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
        d="M3.202 5.958a.75.75 0 0 0-.952.722v13.07l9 2.5V8.205zM12.75 8.205V22.25l9-2.5V6.68a.75.75 0 0 0-.952-.722z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.047 2.934a7.04 7.04 0 0 1 7.83.01l-.832 1.248a5.545 5.545 0 0 0-6.17-.008zm1.909 2.413a3.89 3.89 0 0 1 4.015.01l-.775 1.285a2.39 2.39 0 0 0-2.472-.007z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OnlineLearning_01;
