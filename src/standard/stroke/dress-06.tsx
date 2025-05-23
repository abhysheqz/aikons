import React from "react";
const Dress_06: React.FC<
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
        d="M5.5 9c1 1 1.428 2.859 1.13 4.741-.168 1.06-1.027 3.85-1.426 5.117-.122.39.002.812.34 1.041C6.582 20.605 9.012 22 12 22s5.418-1.395 6.456-2.1c.338-.23.463-.653.34-1.042-.4-1.267-1.258-4.056-1.426-5.117C17.072 11.86 17.5 10 18.5 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.381 13C21 13 22 9 22 9c-.303-1.044-1.86-4.674-5.504-6.736a.95.95 0 0 0-.972.033L12.53 4.17a1 1 0 0 1-1.06 0L8.476 2.297a.95.95 0 0 0-.972-.033C3.86 4.326 2.304 7.956 2 9c0 0 1 4 4.619 4"
      />
    </svg>
  );
};
export default Dress_06;
