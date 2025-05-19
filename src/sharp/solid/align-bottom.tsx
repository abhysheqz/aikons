import React from "react";
const AlignBottom: React.FC<
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
        d="M19 9.254a.75.75 0 0 1 .75.75V16a.75.75 0 0 1-.75.75l-5 .004a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75zM10 3.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 5 3.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 18.75h20v2H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignBottom;
