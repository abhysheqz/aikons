import React from "react";
const Teaching: React.FC<
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
        d="M13 14c-2 6-9 0-11 6M16 16h4.002a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 1.997L8 7"
      />
      <circle
        cx={8}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8h6m0 4h-2.5"
      />
    </svg>
  );
};
export default Teaching;
