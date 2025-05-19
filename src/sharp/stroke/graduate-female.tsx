import React from "react";
const GraduateFemale: React.FC<
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
        d="M19 11v4s.846 3.12 3 5.154c-.718 1.187-3.623 2.95-7.5.916M5 11v4s-.846 3.12-3 5.154c.718 1.187 3.623 2.95 7.5.915"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 16v1.5C16.5 21 12 22 12 22s-4.5-1-4.5-4.5V16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.002 10 3-2.427-10-5.573L2 7.573 5.002 10"
      />
    </svg>
  );
};
export default GraduateFemale;
