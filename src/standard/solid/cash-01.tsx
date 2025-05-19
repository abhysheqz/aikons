import React from "react";
const Cash_01: React.FC<
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
        d="M20 2.75a2.75 2.75 0 0 1 2.75 2.75v10A2.75 2.75 0 0 1 20 18.25H4a2.75 2.75 0 0 1-2.75-2.75v-10A2.75 2.75 0 0 1 4 2.75zM2.75 15.5c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm18.5-1.93a4 4 0 0 0-3.18 3.18H20c.69 0 1.25-.56 1.25-1.25zM12 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4.25c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V5.5c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 19.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z"
      />
    </svg>
  );
};
export default Cash_01;
