import React from "react";
const StickyNote_01: React.FC<
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
        d="m9.612 5-.527 2M11.3 2.763a1.54 1.54 0 0 1-.55 2.084 1.486 1.486 0 0 1-2.048-.558 1.54 1.54 0 0 1 .55-2.084 1.486 1.486 0 0 1 2.048.558Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.3 4.995 2 6.991 4.69 17.23 12.787 22 21 19.755 16.6 3l-5.524 1.51m1.62 17.137-1.62-6.163-6.01 1.643"
      />
    </svg>
  );
};
export default StickyNote_01;
