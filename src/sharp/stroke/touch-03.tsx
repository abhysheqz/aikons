import React from "react";
const Touch_03: React.FC<
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
        d="m9.036 14.01-2.13-1.802c-.755-.707-1.895-.59-2.515.258-.516.705-.521 1.44 0 2.14l4.583 6.85a.1.1 0 0 0 .083.045l8.079-.025c1.577-.141 2.721-1.136 2.862-2.85V13.21c0-.496-.055-1-.27-1.447-.487-1.018-1.297-1.67-2.572-1.778H12.53V4.361c-.035-.964-.712-1.79-1.669-1.863-.948 0-1.825.717-1.825 1.739z"
      />
    </svg>
  );
};
export default Touch_03;
