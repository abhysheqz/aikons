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
        d="M7 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13h2v-6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-4v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6H9v6a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveSquare;
