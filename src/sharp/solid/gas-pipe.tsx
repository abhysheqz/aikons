import React from "react";
const GasPipe: React.FC<
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
        d="M6.25 7a5.75 5.75 0 1 1 8 5.293v1.457h-4.5v-1.457A5.75 5.75 0 0 1 6.25 7M12 8.06l2.56-2.56-1.06-1.06L10.94 7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 15.25h9.5v7.5h-9.5zM5.75 16.75h-4.5v4.5h4.5zM18.25 21.25h4.5v-4.5h-4.5z"
      />
    </svg>
  );
};
export default GasPipe;
