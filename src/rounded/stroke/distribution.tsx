import React from "react";
const Distribution: React.FC<
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
        d="M4.5 10.265V6h15v4.265c0 3.175 0 4.762-.976 5.749-.977.986-2.548.986-5.69.986h-1.667c-3.143 0-4.714 0-5.69-.986-.977-.986-.977-2.574-.977-5.749"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m4.5 6 .721-1.538c.56-1.194.84-1.79 1.406-2.126C7.194 2 7.92 2 9.375 2h5.25c1.454 0 2.181 0 2.748.336s.847.932 1.406 2.126L19.5 6M10.5 9h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22h8m8 0h-8m0 0v-2.5"
      />
    </svg>
  );
};
export default Distribution;
