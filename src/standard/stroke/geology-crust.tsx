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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.5a6.47 6.47 0 0 1-4-1.376M12 5.5A6.5 6.5 0 0 0 5.813 10M5.5 13c.093.605.252.962.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6c1.5 0 3.948-.867 5-2.5m3 3s-.898.35-1.5.5c-2 .5-4 2-2.5 4s3 3.5 1.5 5.5c-.74.985-1.5 2.5.5 3.5"
      />
    </svg>
  );
};
export default GeologyCrust;
