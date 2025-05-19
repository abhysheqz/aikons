import React from "react";
const HeadsetOff: React.FC<
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
        d="m2 2.004 20 19.955M21 13.977a3.996 3.996 0 0 0-4-3.991 2 2 0 0 0-1.742 1.013M15 14.976v.997c0 1.103.895 1.996 2 1.996q.465-.001.899-.101"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.908 10.137A3.994 3.994 0 0 0 3 13.977a3.996 3.996 0 0 0 4 3.991c1.105 0 2-.893 2-1.995v-2.751"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.991 13.99c0-1.01-.635-5.826 2.176-8.833m15.847 11.55v-5.605c0-.99-.107-1.983-.418-2.923a8.9 8.9 0 0 0-1.262-2.485C15.552.905 10.368 1.589 7.474 3.222M20.307 20.27c-.35.621-.916 1.064-1.6 1.348-.706.293-1.273.325-2.136.373-1.6 0-3.338.02-4.516 0"
      />
    </svg>
  );
};
export default HeadsetOff;
