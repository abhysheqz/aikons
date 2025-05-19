import React from "react";
const ComputerPhoneSync: React.FC<
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
        d="M15.25 10.25h7.5v11.5h-7.5zM7 21.75v-2h3a.5.5 0 0 0 .5-.5v-3.5h3v6z"
      />
      <path fill="currentColor" d="M22.75 2.25H1.25v15.5H13.5V8.5h9.25z" />
    </svg>
  );
};
export default ComputerPhoneSync;
