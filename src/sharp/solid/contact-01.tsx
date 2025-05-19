import React from "react";
const Contact_01: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h17.5a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-3h-1.5v-2h1.5v-4h-1.5v-2h1.5V7h-1.5V5h1.5zm9.5 3.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m0 7A4.75 4.75 0 0 0 8 17.5v.75h9.5v-.75a4.75 4.75 0 0 0-4.75-4.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact_01;
