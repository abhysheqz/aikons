import React from "react";
const Paragliding: React.FC<
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
        strokeWidth={1.5}
        d="M12 10.902 2.004 15c0-.97-.083-1.965.507-2.801C4.556 9.297 9.325 4.899 12 3c2.675 1.9 7.444 6.297 9.49 9.199.59.836.506 1.832.506 2.801z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 12-2 6h8l-2-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 18v3M8 17l-3.5-3M16 17l3.5-3"
      />
    </svg>
  );
};
export default Paragliding;
