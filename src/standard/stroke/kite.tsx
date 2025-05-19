import React from "react";
const Kite: React.FC<
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
        d="M12 2C7.714 4.407 4 8 2 14c3-2 7-3 10 0 3-3 7-2 10 0-2-6-5.714-9.593-10-12M12 14s-3.52 1-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.649 14c1.421 3-2.344 5.5.351 8M12 14c3.5 0 2 5 5 5M12 14V2M10 7c.46-.418 1.356-1 2-1s1.54.582 2 1"
      />
    </svg>
  );
};
export default Kite;
