import React from "react";
const Reload: React.FC<
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
        d="m15.969 1.251.684 2.664a1 1 0 0 1-1.386 1.158A7.8 7.8 0 0 0 12 4.363c-4.293 0-7.75 3.432-7.75 7.637 0 1.473.423 2.847 1.155 4.013l-1.693 1.064A9.5 9.5 0 0 1 2.25 12c0-5.334 4.378-9.636 9.75-9.636.776 0 1.531.09 2.256.26l-.225-.875zM19.75 12a7.5 7.5 0 0 0-1.155-4.013l1.693-1.065A9.5 9.5 0 0 1 21.75 12c0 5.334-4.378 9.636-9.75 9.636a10 10 0 0 1-2.256-.26l.225.875-1.938.498-.684-2.665a1 1 0 0 1 1.386-1.157c.991.455 2.097.71 3.267.71 4.293 0 7.75-3.432 7.75-7.637"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Reload;
