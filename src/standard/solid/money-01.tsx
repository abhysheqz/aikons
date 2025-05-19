import React from "react";
const Money_01: React.FC<
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
        d="M20 4.25A2.75 2.75 0 0 1 22.75 7v10A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17V7A2.75 2.75 0 0 1 4 4.25zM2.75 17c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm18.5-1.93a4 4 0 0 0-3.18 3.18H20c.69 0 1.25-.56 1.25-1.25zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 5.75c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V7c0-.69-.56-1.25-1.25-1.25z"
      />
    </svg>
  );
};
export default Money_01;
