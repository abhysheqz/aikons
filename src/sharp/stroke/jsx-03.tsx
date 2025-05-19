import React from "react";
const Jsx_03: React.FC<
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
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 14h-3.5v5H21v-2.5h-1M10.5 14v3.25A1.75 1.75 0 0 1 8.75 19h-.083C7.747 19 7 18.254 7 17.333M12.5 19v-2m0 0v-3H14a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default Jsx_03;
