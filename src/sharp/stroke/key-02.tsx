import React from "react";
const Key_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.658 5.342C16.132 2.816 13.92 2.5 13.92 2.5L9 7.421s.19 1.335 1.462 3.116L2.5 18.5v3h3v-2h2v-2h2l3.962-3.962C15.243 14.809 16.58 15 16.58 15l4.921-4.921s-.316-2.21-2.842-4.737ZM16.5 7.5l-1 1"
      />
    </svg>
  );
};
export default Key_02;
