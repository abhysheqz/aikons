import React from "react";
const City_03: React.FC<
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
        d="M17.475 12V2H7.492v20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.5 16c.827 0 1.497-.895 1.497-2s-.67-2-1.497-2-1.498.896-1.498 2 .67 2 1.498 2ZM3.5 16v6M2.002 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.488 6h3.993m-3.993 3h3.993M17.502 22v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.995 21.431v-6.446l4.459-3.018 4.544 3.018v7.012H19.62"
      />
    </svg>
  );
};
export default City_03;
