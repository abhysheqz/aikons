import React from "react";
const MirroringScreen: React.FC<
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
        d="M2 12a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zm0 4a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zm0 4a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7v-2h6V4H4v4H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MirroringScreen;
