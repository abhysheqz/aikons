import React from "react";
const Cabinet_02: React.FC<
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
        d="M6.5 16 5 20m12.5-4 1.5 4M21 4H3l.215 5.16c.135 3.238.202 4.857 1.071 5.848.869.992 2.22.992 4.922.992h5.585c2.701 0 4.052 0 4.92-.992.87-.991.937-2.61 1.072-5.848zM12 16V4M22 4H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 10h.009M15 10h.009"
      />
    </svg>
  );
};
export default Cabinet_02;
