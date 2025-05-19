import React from "react";
const Flag_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.025 21c.019-1.736.019-3.446.012-5.08m0 0c-.024-5.459-.124-10.058.158-11.877.366-2.364 4.198-.213 8.775 1.555l2.063.89c1.518.653 3.686 1.816 2.733 3.173-.392.559-1.206 1.199-2.708 1.906z"
      />
    </svg>
  );
};
export default Flag_01;
