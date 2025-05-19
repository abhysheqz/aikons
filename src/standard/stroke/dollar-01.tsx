import React from "react";
const Dollar_01: React.FC<
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
        strokeWidth={1.5}
        d="M17.5 8.63C17.5 6.625 15.038 5 12 5S6.5 6.625 6.5 8.63 8 11.74 12 11.74s6 1.038 6 3.63c0 2.593-2.5 3.63-6 3.63s-6-1.5-6-3.5M12 3v2m0 16v-2"
      />
    </svg>
  );
};
export default Dollar_01;
