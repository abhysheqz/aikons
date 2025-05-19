import React from "react";
const Lamp_04: React.FC<
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
        d="M7.301 2.979A2.75 2.75 0 0 1 9.854 1.25h4.292A2.75 2.75 0 0 1 16.7 2.979l2.95 7.371a1.75 1.75 0 0 1-1.626 2.4H13v2.734a2.25 2.25 0 0 1 0 4.032V21h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-1.484a2.25 2.25 0 0 1 0-4.032V12.75H5.977a1.75 1.75 0 0 1-1.625-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_04;
