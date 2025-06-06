import React from "react";
const Blur: React.FC<
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
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M4 13.9C4 8 12 2 12 2s8 6 8 11.91c0 4.46-3.585 8.09-8 8.09s-8-3.64-8-8.1Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v20m0-3 8-4m-8-.82 7-3.68m-7-1.139L16.573 7"
      />
    </svg>
  );
};
export default Blur;
