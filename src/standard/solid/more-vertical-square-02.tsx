import React from "react";
const MoreVerticalSquare_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.492 9a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5zM10.734 16c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25M12 6.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalSquare_02;
