import React from "react";
const Building_06: React.FC<
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
        d="M19.75 8.75h-5v-2h6a1 1 0 0 1 1 1v15h-7v-2h5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 16.25a.75.75 0 0 0-.75.75v5.75h-3.5V2A.75.75 0 0 1 3 1.25h12a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75h-2.75V17a.75.75 0 0 0-.75-.75zm4.25 6.5h-3.5v-5h3.5zm.25-16H7v-1.5h4zm0 3H7v-1.5h4zm0 3H7v-1.5h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_06;
