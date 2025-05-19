import React from "react";
const Vimeo: React.FC<
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
        d="M21.346 4.654c-2.309-1.833-5.885.99-6.75 2.473 1.301.305 3.904.416 1.404 4.9-1 1.662-3.3 3.788-4.5-.996C10 5.051 10 .567 2 7.543c.476.948 1.766 1.045 2.741.627.887-.38 1.802-.229 2.259 1.367 1 3.487 1.5 10.45 5 10.45 3.634.494 12.461-12.86 9.346-15.333"
      />
    </svg>
  );
};
export default Vimeo;
