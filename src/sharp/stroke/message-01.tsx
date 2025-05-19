import React from "react";
const Message_01: React.FC<
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
        d="M7.5 14.474h9m-9-4.99H13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.01 21.449 4.576-1.468c1.5.83 3.203 1.013 5.089 1.013 6.5.455 10.323-3.75 10.323-8.734.107-4.956-2.083-10.18-10.42-9.79-7.273.129-9.574 4.568-9.574 9.552 0 1.704.347 3.79 1.601 5.43zm0 0c-.007.002-.002.006 0 0Z"
      />
    </svg>
  );
};
export default Message_01;
