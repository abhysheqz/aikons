import React from "react";
const Pulley: React.FC<
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
        d="M21 4H2V2h19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M4 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3v14.5H4V3zM13 10.5v7h-2v-7zM16.5 3v4h-2V3zM20 10.5V17h-2v-6.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M17.414 16.5h3.171L22 22h-6z" />
    </svg>
  );
};
export default Pulley;
