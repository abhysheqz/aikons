import React from "react";
const ArrowDownLeft_01: React.FC<
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
        d="M8.414 17H13v2H5v-8h2v4.586L17.586 5 19 6.414z"
      />
    </svg>
  );
};
export default ArrowDownLeft_01;
