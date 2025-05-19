import React from "react";
const Robot_02: React.FC<
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
        d="M9.75 3.5a2.25 2.25 0 1 1 3 2.122v1.66a8.75 8.75 0 0 1 8 8.718v1.75h-5.349l-.777-1.166A.75.75 0 0 0 14 16.25h-4a.75.75 0 0 0-.624.334l-.777 1.166H3.25V16a8.75 8.75 0 0 1 8-8.718v-1.66A2.25 2.25 0 0 1 9.75 3.5m11 15.75H15a.75.75 0 0 1-.624-.334l-.777-1.166H10.4l-.777 1.166A.75.75 0 0 1 9 19.25H3.25V20A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20zM9 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m6 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_02;
