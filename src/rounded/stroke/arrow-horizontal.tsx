import React from "react";
const ArrowHorizontal: React.FC<
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
        d="M5 9c-.607.59-3 2.16-3 3s2.393 2.41 3 3M19 9c.607.59 3 2.16 3 3s-2.393 2.41-3 3M2.423 11.98h19.445"
      />
    </svg>
  );
};
export default ArrowHorizontal;
