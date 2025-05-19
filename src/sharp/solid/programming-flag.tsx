import React from "react";
const ProgrammingFlag: React.FC<
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
        d="M2.75 3a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H4.75v6h-2zm9.554 3.222-2 5 1.393.557 2-5zM14.47 7.53 15.94 9l-1.47 1.469 1.06 1.06L18.06 9l-2.53-2.53zm-4.94 0L8.47 6.47 5.94 9l2.53 2.53 1.06-1.06L8.06 9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ProgrammingFlag;
