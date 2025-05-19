import React from "react";
const Command: React.FC<
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
        d="M14 6a4 4 0 1 1 4 4h-2v4h2a4 4 0 1 1-4 4v-2h-4v2.002a4 4 0 1 1-4-4h2V10H6a4 4 0 1 1 4-4v2h4zM8 8V6a2 2 0 1 0-2 2zm2 2v4h4v-4zm8-2h-2V6a2 2 0 1 1 2 2m-2 10v-2h2a2 2 0 1 1-2 2m-12 .002a2 2 0 0 1 2-2h2v2a2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Command;
