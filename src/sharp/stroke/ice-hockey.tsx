import React from "react";
const IceHockey: React.FC<
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
        d="M14.5 17 22 3m-4.453 0L11.5 14.5C9 13 5.014 11.469 3.348 12.242c-1.667.774-1.808 5.936-.31 6.994 1.678 1.185 6.649.758 8.758.274M8 13l-2 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 17h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default IceHockey;
