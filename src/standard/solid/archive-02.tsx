import React from "react";
const Archive_02: React.FC<
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
        d="M4 10.25A2.75 2.75 0 0 0 1.25 13v6A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19v-6A2.75 2.75 0 0 0 20 10.25zm4.8 4.15a1 1 0 1 0-1.6 1.2l1.2 1.6a2 2 0 0 0 1.6.8h4a2 2 0 0 0 1.6-.8l1.2-1.6a1 1 0 1 0-1.6-1.2L14 16h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 6.25A2.75 2.75 0 0 0 3.25 9v.07Q3.615 9 4 9h16q.385 0 .75.07V9A2.75 2.75 0 0 0 18 6.25zM8 2.25A2.75 2.75 0 0 0 5.25 5v.07Q5.615 5 6 5h12q.385 0 .75.07V5A2.75 2.75 0 0 0 16 2.25z"
      />
    </svg>
  );
};
export default Archive_02;
