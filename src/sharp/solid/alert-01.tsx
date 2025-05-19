import React from "react";
const Alert_01: React.FC<
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
        d="M12.656 2.636a.75.75 0 0 0-1.312 0l-10 18A.75.75 0 0 0 2 21.75h20a.75.75 0 0 0 .656-1.114zM11.25 10v1.5h1.5V10zM10 14.25h1.25v4.25h1.5v-5.75H10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Alert_01;
