import React from "react";
const Fork: React.FC<
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
        d="m19.5 4.5-4 4m-2-2 4 4M22 6.687l-4.203 4.203a4.42 4.42 0 0 1-3.056 1.294H13.5l-8.728 9.308a1.602 1.602 0 1 1-2.264-2.263l9.308-8.729V9.259a4.42 4.42 0 0 1 1.294-3.057L17.312 2"
      />
    </svg>
  );
};
export default Fork;
