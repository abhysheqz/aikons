import React from "react";
const UsbMemory_02: React.FC<
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
        d="M7.75 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v4.75h1.5v10.182c0 3.213-2.574 5.818-5.75 5.818s-5.75-2.605-5.75-5.818V6.75h1.5zm.417 6.69v8.242c0 2.142 1.716 3.879 3.833 3.879s3.833-1.737 3.833-3.88V8.69zM10.5 5.25h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbMemory_02;
