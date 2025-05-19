import React from "react";
const Touch_10: React.FC<
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
        d="M12 5.25a6.25 6.25 0 0 0-6.25 6.25V21c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-9.5A6.25 6.25 0 0 0 12 5.25m0 3a3.25 3.25 0 0 0-3.25 3.25V14c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-2.5A3.25 3.25 0 0 0 12 8.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v1a1 1 0 1 1-2 0v-1a8 8 0 1 0-16 0v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touch_10;
