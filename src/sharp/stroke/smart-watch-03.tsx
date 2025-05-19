import React from "react";
const SmartWatch_03: React.FC<
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
        d="M19.5 19.5v-15h-15v15z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 22h8M8 2h8" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.392 9.2C13.275 8.615 12 9.543 12 9.543s-1.03-.84-2.393-.345C7.942 9.803 7.8 13.524 12 15.053c4.2-1.529 4.069-5.152 2.392-5.854Z"
      />
    </svg>
  );
};
export default SmartWatch_03;
