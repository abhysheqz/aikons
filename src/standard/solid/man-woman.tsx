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
        d="M14.69 9.548a3.094 3.094 0 0 1 5.62 0l2.37 5.137a.75.75 0 0 1 .07.315v1a.75.75 0 0 1-.75.75h-1.75V22a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-5.25H13a.75.75 0 0 1-.75-.75v-1c0-.108.024-.216.069-.314zM1.25 10.5A2.75 2.75 0 0 1 4 7.75h4a2.75 2.75 0 0 1 2.75 2.75V16a.75.75 0 0 1-.75.75H8.75V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-5.25H2a.75.75 0 0 1-.75-.75zM3.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M14.75 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default ManWoman;
