import React from "react";
const Message_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.995 11.75h.01m3.986 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.007 21.249 4.576-1.468c1.501.83 3.204 1.013 5.09 1.013 6.5.454 10.322-3.75 10.322-8.734.107-4.956-2.083-10.18-10.42-9.79-7.272.129-9.574 4.568-9.574 9.552 0 1.704.348 3.79 1.602 5.43zm0 0c-.007.001-.002.006 0 0Z"
      />
    </svg>
  );
};
export default Message_02;
