import React from "react";
const Touch_02: React.FC<
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
        d="M16.892 22v-2l1.107-2.31c.707-1.478 1.674-4.367.322-5.728-2.131-2.145-5.113-2.538-6.82-2.462V3.75a1.75 1.75 0 1 0-3.5 0V14m0 8v-2s-1.829-2.09-2.326-2.909c-.642-1.057-1.497-2.2-1.051-3.482C5.124 12.169 8 10 8 10"
      />
    </svg>
  );
};
export default Touch_02;
