import React from "react";
const GraduateMale: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M19 13.5V10H5v3.5z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 13v2.25C19 20.5 12 22 12 22s-7-1.5-7-6.75V13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 10 3-2.427L12 2 1.998 7.573 5 10"
      />
    </svg>
  );
};
export default GraduateMale;
