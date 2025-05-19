import React from "react";
const Prison: React.FC<
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
        d="M2 2a1 1 0 0 0 0 2v16a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2V4a1 1 0 1 0 0-2zm2 18V4h4v16zm6 0V4h4v4.273a4 4 0 0 0-.197.02c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v2.09c0 .433 0 .83.043 1.152.048.356.16.731.47 1.04s.684.422 1.04.47q.095.012.197.02V20zm6-4.25V20h4v-4.25zm4-7.5V4h-4v4.25zM17.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prison;
