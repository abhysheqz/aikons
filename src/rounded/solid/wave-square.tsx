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
        d="M7 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12h2v-5a2 2 0 0 1 2-2h4a1 1 0 1 1 0 2h-4v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6H9v5a2 2 0 0 1-2 2H3a1 1 0 1 1 0-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveSquare;
