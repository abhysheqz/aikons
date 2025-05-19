import React from "react";
const Key_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 14.5a6 6 0 1 0-5.47-3.53L2.5 18.5v3h3v-2h2v-2h2l3.53-3.53c.754.34 1.59.53 2.47.53ZM17.5 6.5l-1 1"
      />
    </svg>
  );
};
export default Key_01;
