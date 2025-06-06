import React from "react";
const Scribd: React.FC<
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
        d="M6.54 21c0-2.594-2.354-3.554-3.54-3.554v-7.421c0-.014.011-.025.025-.025s.028.01.033.024c.89 2.52 3.918 3.806 4.26 4.09.2.167 2.564 1.141 4.407 2.442 2.32 1.967.9 3.69.2 4.444z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3h-4.5s1 .5 1.469 1.25a2.69 2.69 0 0 1-1.717 4.053C14.456 8.688 13 7.236 13 5.5c-1.833-1-6-1.828-6 1 0 2.81 3.124 3.42 6 5 3.49 1.916 6.5 5.5 4.5 9.5H21z"
      />
    </svg>
  );
};
export default Scribd;
