import React from "react";
const ArrowReloadVertical: React.FC<
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
        d="M5.5 3.5v11c0 3.713 2.685 6.5 6.5 6.5M18.5 20.5v-11C18.5 5.787 15.815 3 12 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 18s-1.841 2.5-2.5 2.5S16 18 16 18M8 5.5S6.159 3 5.5 3 3 5.5 3 5.5"
      />
    </svg>
  );
};
export default ArrowReloadVertical;
