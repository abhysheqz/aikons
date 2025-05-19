import React from "react";
const DressingTable_02: React.FC<
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
        d="M19 16c.5.333 1.3 1.4.5 3s.5 3 .5 3m-1-6H5m14 0v-3M5 16c-.5.333-1.3 1.4-.5 3S4 22 4 22m1-6v-3m16 0h-2M3 13h2m14 0H5M7 7.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2 7 4.462 7 7.5ZM10.5 7 13 4.5m-2 6L13.5 8"
      />
    </svg>
  );
};
export default DressingTable_02;
