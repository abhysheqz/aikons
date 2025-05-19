import React from "react";
const Safe: React.FC<
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
        d="M15.723 16.722 17 18l2-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13.8c0 4.5-.71 6.85-4.5 8.2-3.79-1.35-4.5-3.7-4.5-8.2l4.5-1.8z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.171 7.91V9.5m0-1.59c0-.754.634-1.365 1.415-1.365.78 0 1.414.611 1.414 1.364V9.5m-2.829-1.59V5.181c0-.753-.633-1.364-1.414-1.364s-1.415.61-1.415 1.364m0 0V9.5m0-4.318V3.364C13.342 2.61 12.71 2 11.928 2s-1.414.61-1.414 1.364V6.09m0 0c0-.753-.634-1.364-1.415-1.364-.78 0-1.414.61-1.414 1.364V14L4.57 10.504a1.415 1.415 0 0 0-1.614-.382c-1.008.417-1.245 1.888-.59 2.736 1.122 1.452 2.27 3.433 3.198 5.18C6.825 20.41 9.31 22 12.072 22M10.514 6.09V9.5"
      />
    </svg>
  );
};
export default Safe;
