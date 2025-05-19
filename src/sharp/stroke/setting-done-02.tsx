import React from "react";
const SettingDone_02: React.FC<
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
        strokeWidth={1.5}
        d="m15.028 17.241 1.472 1.256 2.5-2.999M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 11.744v-2.21c-2.857 0-4.716-3.104-3.27-5.567L15.266 2c-1.464 2.494-5.07 2.494-6.534 0L5.268 3.967C6.714 6.43 4.857 9.533 2 9.533v3.934c2.857 0 4.713 3.103 3.266 5.566L8.73 21a3.75 3.75 0 0 1 1.488-1.433m4.94-9.577a3.5 3.5 0 1 0-4.958 4.512"
      />
    </svg>
  );
};
export default SettingDone_02;
