import React from "react";
const Comment_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h15.998a2.75 2.75 0 0 1 2.75 2.75v11.997a2.75 2.75 0 0 1-2.75 2.75h-8.255L7.778 22.2C6.622 23.039 5 22.214 5 20.783v-1.286H3.75A2.75 2.75 0 0 1 1 16.747z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comment_02;
