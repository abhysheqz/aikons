import React from "react";
const WaveSquare: React.FC<
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
        d="M7 4h6v14h2v-7h7v2h-5v7h-6V6H9v7H2v-2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveSquare;
