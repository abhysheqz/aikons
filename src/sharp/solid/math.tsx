import React from "react";
const Math: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm10.289 5.25h5.96v-1.5h-6.5a.75.75 0 0 0-.713.513L8.935 14.32l-1.24-3.098a.75.75 0 0 0-1.112-.346l-1.5 1 .832 1.248.731-.487 1.657 4.142a.75.75 0 0 0 1.408-.042zm4.43 7.78-1.47-1.47-1.47 1.47-1.06-1.06 1.47-1.47-1.47-1.47 1.06-1.06 1.47 1.47 1.47-1.47 1.06 1.06-1.47 1.47 1.47 1.47z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Math;
