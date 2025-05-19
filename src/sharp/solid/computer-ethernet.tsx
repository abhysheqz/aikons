import React from "react";
const ComputerEthernet: React.FC<
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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5zM20.5 8.75v13h-2v-13z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20 10.75A2.75 2.75 0 0 0 22.75 8V6.25h-6.5V8A2.75 2.75 0 0 0 19 10.75zM16.25 4.75v-2.5h6.5v2.5z"
      />
      <path
        fill="currentColor"
        d="M17 17.75H1.25V2.25h13.5V8c0 1.625.911 3.035 2.25 3.75z"
      />
    </svg>
  );
};
export default ComputerEthernet;
