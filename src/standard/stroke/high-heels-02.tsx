import React from "react";
const HighHeels_02: React.FC<
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
        d="m17 15 .335-.67a.75.75 0 0 0-.785.07zm-4.45 2.4a.75.75 0 1 0 .9 1.2zm8.2 2.6v-2.882h-1.5V20zm-.967-4.447-2.448-1.224-.67 1.342 2.447 1.223zM16.55 14.4l-4 3 .9 1.2 4-3zm4.2 2.718a1.75 1.75 0 0 0-.967-1.565l-.671 1.341a.25.25 0 0 1 .138.224z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 12 1.5 8H5l2-7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2zm0 0v4.951c0 .027.022.05.05.05 2.573.052 4.414-.196 5.825.598 1.66.935 2.6 3.018 4.226 4.687C15.17 20.16 18.368 19.926 22 20"
      />
    </svg>
  );
};
export default HighHeels_02;
