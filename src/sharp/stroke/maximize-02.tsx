import React from "react";
const Maximize_02: React.FC<
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
        strokeWidth={1.5}
        d="m7.871 12.721 2.134 1.83L12.67 4.334a1.72 1.72 0 0 1 3.337.829l-1.201 5.095 1.687.27c1.929.289 2.893.433 3.572.84C21.187 12.042 22 13.05 22 14.525c0 1.027-.254 1.715-.87 3.566l-1.63 3.962H11l-5.61-6.913A1.74 1.74 0 0 1 7.87 12.72Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.114 6.934 2.5 9.542m-.486-2.503-.018 3.005h3.017m1.861-4.871L9.5 2.558m-2.512-.503h3.017v2.99"
      />
    </svg>
  );
};
export default Maximize_02;
