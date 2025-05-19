import React from "react";
const Xing: React.FC<
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
        d="M16 2h5l-6 12.996L19 22h-5l-4-7.004zM3 6h4l2 5-2 5H3l2.035-5z"
      />
    </svg>
  );
};
export default Xing;
