import React from "react";
const Certificate_02: React.FC<
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
        d="M15.5 5.999 22 3.5v9.995l-6.5-2.499M8.5 5.999 2 3.5v9.995l6.5-2.499"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12.496a4 4 0 1 0-4-3.999 4 4 0 0 0 4 3.999Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.506 11.46 6.51 20.487a.01.01 0 0 0 .014.012l5.49-2.497L17.5 20.5a.01.01 0 0 0 .014-.012l-3.036-9.027"
      />
    </svg>
  );
};
export default Certificate_02;
