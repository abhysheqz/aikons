import React from "react";
const Simcard_01: React.FC<
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
        d="M21 7v15H3V2h12zm-7.532 7.03 1.97 1.97-1.97 1.97 1.06 1.06 3.03-3.03-3.03-3.03zm-2.94 0L8.558 16l1.97 1.97-1.06 1.06L6.438 16l3.03-3.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Simcard_01;
