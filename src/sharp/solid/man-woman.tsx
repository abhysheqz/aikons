import React from "react";
const ManWoman: React.FC<
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
        d="M14.75 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M14.69 9.548a3.094 3.094 0 0 1 5.62 0l2.44 5.287v1.915h-2.5v6h-5.5v-6h-2.5v-1.915zM3.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 10.5A2.75 2.75 0 0 1 4 7.75h4a2.75 2.75 0 0 1 2.75 2.75v6.25h-2v6h-5.5v-6h-2z"
      />
    </svg>
  );
};
export default ManWoman;
