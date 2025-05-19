import React from "react";
const Baby_02: React.FC<
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
      <circle cx={12} cy={8} r={6} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.874 12A6.5 6.5 0 0 1 18 15.684c0 .818-.148 1.599-.416 2.316M7.126 12A6.5 6.5 0 0 0 6 15.684C6 19.172 8.686 22 12 22c2.537 0 4.706-1.658 5.584-4m0 0c-2.733-1.2-5.528-3.167-6.584-4M12 2c-.994 0-1.8.784-1.8 1.75S11.006 5.5 12 5.5c.461 0 .882-.168 1.2-.446"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 8h.008M14 8h.008"
      />
    </svg>
  );
};
export default Baby_02;
