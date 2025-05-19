import React from "react";
const Video_02: React.FC<
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
        d="M3.875 3.75a2.75 2.75 0 0 0-2.75 2.75v11a2.75 2.75 0 0 0 2.75 2.75h12a2.75 2.75 0 0 0 2.75-2.75v-11a2.75 2.75 0 0 0-2.75-2.75zm7.5 5.25h3a1 1 0 1 0 0-2h-3a1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.36 5.625a1 1 0 0 1 .515.875v11a1 1 0 0 1-1.53.848l-4-2.5a1 1 0 1 1 1.06-1.696l2.47 1.544V8.304l-2.47 1.544a1 1 0 1 1-1.06-1.696l4-2.5a1 1 0 0 1 1.015-.027"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Video_02;
