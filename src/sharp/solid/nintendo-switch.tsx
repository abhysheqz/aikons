import React from "react";
const NintendoSwitch: React.FC<
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
        d="M2.25 6A4.75 4.75 0 0 1 7 1.25h4.25v17.5H7A4.75 4.75 0 0 1 2.25 14zm5.5 9H5.741v-2H7.75zM6 5v1.25H4.75v1.5H6V9h1.5V7.75h1.25v-1.5H7.5V5zM17 5.25A4.75 4.75 0 0 1 21.75 10v8A4.75 4.75 0 0 1 17 22.75h-4.25V5.25zM18.25 11h-2.009V9h2.009zM18 19v-1.25h1.25v-1.5H18V15h-1.5v1.25h-1.25v1.5h1.25V19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NintendoSwitch;
