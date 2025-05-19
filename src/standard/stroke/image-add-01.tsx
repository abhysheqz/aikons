import React from "react";
const ImageAdd_01: React.FC<
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
        d="M21.5 6H18m0 0h-3.5M18 6V2.5M18 6v3.5M11.5 2.5h-7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.5 21.5 8.845-7.96a2 2 0 0 1 2.448-.178L21.5 16.5"
      />
    </svg>
  );
};
export default ImageAdd_01;
