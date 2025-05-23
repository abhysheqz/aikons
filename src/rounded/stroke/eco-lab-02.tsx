import React from "react";
const EcoLab_02: React.FC<
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
        d="M12 5v4M8 2h2a2 2 0 0 1 2 2v1h-2a2 2 0 0 1-2-2zM10.5 9h3v3.229a5.002 5.002 0 0 1-1.5 9.77 5 5 0 0 1-1.5-9.77zM9.5 9h5M16 3h-2a2 2 0 0 0-2 2v1h2a2 2 0 0 0 2-2z"
      />
    </svg>
  );
};
export default EcoLab_02;
