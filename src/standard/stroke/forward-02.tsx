import React from "react";
const Forward_02: React.FC<
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
        d="M13.574 17.899a1 1 0 0 1-1.574-.82V6.921a1 1 0 0 1 1.573-.82l7.257 5.08a1 1 0 0 1 0 1.638zM3.573 17.899A1 1 0 0 1 2 17.079V6.921a1 1 0 0 1 1.573-.82l7.257 5.08a1 1 0 0 1 0 1.638z"
      />
    </svg>
  );
};
export default Forward_02;
