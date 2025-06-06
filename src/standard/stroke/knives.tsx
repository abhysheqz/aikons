import React from "react";
const Knives: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.494 10.5 3.108-3.109a2.59 2.59 0 0 0 2.154-.695 2.403 2.403 0 0 0 0-3.476 2.6 2.6 0 0 0-3.59 0L12.5 7.739"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 12 1.425-1.455a2.67 2.67 0 0 0 2.298-.782c1.015-1.036 1.012-2.704.13-3.763"
      />
      <path
        fill="currentColor"
        d="m18.5 14 .53.53a.75.75 0 0 0 0-1.06zm-7-7 .53-.53a.75.75 0 0 0-1.06 0zm2.47 10.47a.75.75 0 1 0 1.06 1.06zM3.293 15.207l.53.53zM3.75 19.5v-3.586h-1.5V19.5zm14 0v-4h-1.5v4zM5 22.25h10v-1.5H5zm14.03-8.78-7-7-1.06 1.06 7 7zm-1.06 0-4 4 1.06 1.06 4-4zm-7-7-8.207 8.207 1.06 1.06L12.03 7.53zm5.28 13.03c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75zm-12.5-3.586a.25.25 0 0 1 .073-.177l-1.06-1.06a1.75 1.75 0 0 0-.513 1.237zM2.25 19.5A2.75 2.75 0 0 0 5 22.25v-1.5c-.69 0-1.25-.56-1.25-1.25z"
      />
    </svg>
  );
};
export default Knives;
