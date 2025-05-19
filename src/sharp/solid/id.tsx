import React from "react";
const Id: React.FC<
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
        d="M9.272 1.818A.75.75 0 0 1 10 1.25h4a.75.75 0 0 1 .728.568l.358 1.432H20.5a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75h5.414zm.689 3.432h4.078l-.625-2.5h-2.828zm2.032 4c-1.508 0-2.697 1.25-2.697 2.75s1.189 2.75 2.697 2.75 2.698-1.25 2.698-2.75-1.19-2.75-2.698-2.75m4.066 8.25c-2.145-2.394-6.013-2.268-8.109-.01l-.2.216v2.044h8.5v-2.037z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Id;
