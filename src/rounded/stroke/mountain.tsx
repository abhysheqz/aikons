import React from "react";
const Mountain: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20H2l3.225-9.244C6.795 6.252 7.58 4 9 4c1.337 0 2.112 2 3.512 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 20h16l-4.593-7.341C15.88 10.219 15.117 9 14 9c-1.118 0-1.88 1.22-3.407 3.659L9.128 15"
      />
    </svg>
  );
};
export default Mountain;
