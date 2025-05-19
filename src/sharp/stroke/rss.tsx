import React from "react";
const Rss: React.FC<
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
        d="M12.5 19H22V4H3v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 19h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 15.235c2.493 0 4.77 2.265 4.77 4.765M10 20c0-4.5-4.005-8-7.955-8"
      />
    </svg>
  );
};
export default Rss;
