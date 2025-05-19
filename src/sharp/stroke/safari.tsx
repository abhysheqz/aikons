import React from "react";
const Safari: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 2v2.5M12 22v-2.5M22 12h-2.5M2 12h2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.515 10.55 2.933 2.913m-3.257-3.235 5.801-2.23a.01.01 0 0 1 .013.014l-2.222 5.783-5.777 2.224a.01.01 0 0 1-.013-.013z"
      />
    </svg>
  );
};
export default Safari;
