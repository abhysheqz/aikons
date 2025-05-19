import React from "react";
const Package_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M12.5 14.5h-7v4h7z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 6.5h19m-19 0v15h19v-15m-19 0 3-4h13l3 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 6.5h-5l1-4h3zM14.5 6.5h-5v4h5z"
      />
    </svg>
  );
};
export default Package_02;
