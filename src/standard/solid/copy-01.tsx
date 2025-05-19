import React from "react";
const Copy_01: React.FC<
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
        d="M8 10.75A2.75 2.75 0 0 1 10.752 8l9 .006a2.75 2.75 0 0 1 2.748 2.75v8.993a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 8 19.749z"
      />
      <path
        fill="currentColor"
        d="M3.752 1A2.75 2.75 0 0 0 1 3.75v10.999a2.75 2.75 0 0 0 2.75 2.75h3V10.75a4 4 0 0 1 4.003-4l6.747.005V3.758a2.75 2.75 0 0 0-2.748-2.75z"
      />
    </svg>
  );
};
export default Copy_01;
