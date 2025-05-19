import React from "react";
const AiScan: React.FC<
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
        d="M1.75 1.75h6.5v1.5h-5v5h-1.5zm14 0h6.5v6.5h-1.5v-5h-5zm-12.5 14v5h5v1.5h-6.5v-6.5zm19 0v6.5h-6.5v-1.5h5v-5zM12.75 5.75h-1.5v2h-5v9.5h11.5v-9.5h-5zm-2 7v-2h-1.5v2zm4 0v-2h-1.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiScan;
