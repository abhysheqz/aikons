import React from "react";
const GeologyCrust: React.FC<
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
        d="M12 2v20M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15a3 3 0 1 1 0-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.5a6.47 6.47 0 0 1-4-1.376M12 5.5A6.5 6.5 0 0 0 5.813 10m-.237 3c.094.605.27 1.183.519 1.72"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5c1.624.115 4.185-.27 5.052-2.133m3.016 2.723c-.44.415-.966.759-1.568.91-2 .5-4 2-2.5 4s3 3.5 1.5 5.5c-.74.985-1.26 2.644.78 3.281"
      />
    </svg>
  );
};
export default GeologyCrust;
