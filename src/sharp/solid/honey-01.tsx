import React from "react";
const Honey_01: React.FC<
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
      <path fill="currentColor" d="M5.25 1.25h13.5v3.5H5.25z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m4.364 8.603 1.47-2.353h12.332l1.47 2.352A.75.75 0 0 1 19.75 9v13a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V9c0-.14.04-.278.114-.398m10.386 2.42L12 9.082l-2.75 1.941v1.883l-2 1.411v2.66L10 18.918l2-1.412 2 1.412 2.75-1.941v-2.66l-2-1.411zm-6 4.072 1.25-.883 1.25.883V16.2l-1.25.882-1.25-.882zm4 1.105v-1.105l1.25-.883 1.25.883V16.2l-1.25.882zm.5-4.4v1.106l-1.25.882-1.25-.882V11.8l1.25-.882z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honey_01;
