import React from "react";
const StepOut: React.FC<
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
        d="m18 10 1.84-1.586C20.613 7.748 21 7.414 21 7s-.387-.748-1.16-1.414L18 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v-3c0-3.771 0-5.657 1.172-6.828S16.229 7 20 7h1M3 21h6M15 21h6"
      />
    </svg>
  );
};
export default StepOut;
