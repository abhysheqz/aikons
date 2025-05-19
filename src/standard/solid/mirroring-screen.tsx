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
        d="M2 12a9 9 0 0 1 9 9 1 1 0 1 0 2 0c0-6.075-4.925-11-11-11a1 1 0 1 0 0 2m0 4a5 5 0 0 1 5 5 1 1 0 1 0 2 0 7 7 0 0 0-7-7 1 1 0 1 0 0 2m0 4a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3 1 1 0 1 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 6a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-3.706a1 1 0 1 1 0-2H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MirroringScreen;
