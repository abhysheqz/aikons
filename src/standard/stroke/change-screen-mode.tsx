import React from "react";
const ChangeScreenMode: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 16a2 2 0 0 1-2-2V4.001a2 2 0 0 1 2.001-2l12 .008a2 2 0 0 1 1.999 2V14a2 2 0 0 1-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 7.006-1.997-.003a2 2 0 0 0-2.003 2V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5"
      />
    </svg>
  );
};
export default ChangeScreenMode;
