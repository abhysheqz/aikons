import React from "react";
const BalanceScale: React.FC<
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
        d="M22.75 14v-.15L20 7.25h-2l-2.75 6.6V14a3.75 3.75 0 1 0 7.5 0m-5.625-.75L19 8.75l1.875 4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 5.75v14h5v2H6v-2h5v-14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 4h8v2H3zm10 0h8v2h-8zM8.75 14v-.15L6 7.25H4l-2.75 6.6V14a3.75 3.75 0 1 0 7.5 0m-5.625-.75L5 8.75l1.875 4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BalanceScale;
