import React from "react";
const Inequality_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 21.25H2.575v-2.5H21.5zM7.166 14.5l11.667-9.835-1.6-1.915L2.944 14.793a1.25 1.25 0 0 0-.37 1.385c.18.494.647.822 1.17.822H21.5v-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inequality_01;
