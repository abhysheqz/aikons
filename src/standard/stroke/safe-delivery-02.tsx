import React from "react";
const SafeDelivery_02: React.FC<
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
        d="M16 21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM12.009 17.5H12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9.01c.013-3.749 3.354-7.117 8.417-7.007C16.2 2.16 19.952 4.883 20 8.985M4 9.009l7.934 5.97a.1.1 0 0 0 .12 0L20 8.986M4 9.009l16-.024"
      />
    </svg>
  );
};
export default SafeDelivery_02;
