import React from "react";
const Pencil: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M17.956 11.02H6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.977 11.02v11.026M9.486 6.009h4.982"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.063 22.039V10.933l5.9-8.886a.01.01 0 0 1 .016 0l6.019 8.886v11.105"
      />
    </svg>
  );
};
export default Pencil;
