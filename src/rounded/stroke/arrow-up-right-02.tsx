import React from "react";
const ArrowUpRight_02: React.FC<
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
        d="m13 11-7 7M15.54 6.083l-1.241.113c-2.012.183-3.018.274-3.255.928-.236.654.478 1.368 1.906 2.796l1.13 1.13c1.428 1.428 2.142 2.142 2.796 1.905s.745-1.242.928-3.254l.113-1.242c.11-1.211.165-1.817-.197-2.18-.362-.361-.968-.306-2.18-.196"
      />
    </svg>
  );
};
export default ArrowUpRight_02;
