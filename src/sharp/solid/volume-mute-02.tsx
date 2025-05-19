import React from "react";
const VolumeMute_02: React.FC<
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
        d="M14.359 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.155.63L6.78 16.25H2a.75.75 0 0 1-.75-.75v-7A.75.75 0 0 1 2 7.75h4.78l6.814-4.38a.75.75 0 0 1 .765-.028"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.129 12-1.793-1.793 1.414-1.414 1.793 1.793 1.793-1.793 1.414 1.414L20.957 12l1.793 1.793-1.414 1.414-1.793-1.793-1.793 1.793-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeMute_02;
