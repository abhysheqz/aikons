import React from "react";
const Arrange: React.FC<
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
        d="M15.47 2.47a.75.75 0 0 1 .53-.22l5 .003a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75V3c0-.199.08-.39.22-.53M2.25 2.25l6.5.004V8.75h-6.5zM2.47 15.47a.75.75 0 0 1 .53-.22l5 .003a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-5c0-.199.08-.39.22-.53"
      />
      <path
        fill="currentColor"
        d="M8 6.5h8v-2H8zM15.293 7.293l-8 8 1.414 1.414 8-8zM17.447 17.5l-.9-.75 1.28-1.537 3.922 3.269-3.922 3.268-1.28-1.537.856-.713H8v-2z"
      />
    </svg>
  );
};
export default Arrange;
