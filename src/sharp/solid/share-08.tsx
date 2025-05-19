import React from "react";
const Share_08: React.FC<
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
        d="M14.25 6.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M14.25 17.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.648 8.659-6.5 3-.838-1.817 6.5-3zm-6.5 3.684 6.5 3-.838 1.815-6.5-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Share_08;
