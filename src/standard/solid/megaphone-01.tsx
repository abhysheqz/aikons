import React from "react";
const Megaphone_01: React.FC<
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
        d="M6.801 14.591a.75.75 0 0 1 .703-.07l1.047.43a.75.75 0 0 1 .288.21l.58.69c.303.36.653.676 1.04.943.81.557 2.123 1.46 2.167 1.493a.853.853 0 0 1 .128 1.25l-2.45 2.748a.827.827 0 0 1-1.289-.064l-1.25-1.713A6.75 6.75 0 0 1 6.47 16.53v-1.316a.75.75 0 0 1 .332-.623M19.49 2.362c-.748-.954-2.02-1.137-3.03-.704L8.25 5.177v8.275l8.21 3.518c1.01.433 2.282.25 3.03-.704 1.242-1.585 2.26-3.782 2.26-6.952s-1.018-5.367-2.26-6.952M6.75 13.064v-7.5H5a2.75 2.75 0 0 0-2.75 2.75v2A2.75 2.75 0 0 0 5 13.064z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Megaphone_01;
