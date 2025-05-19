import React from "react";
const Files_02: React.FC<
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
        d="M5.748 22.75H15.81l5.44-5.439V4.251h-15.5zm14-6.06-4.56 4.56v-4.56zm-4.998-2.94h-5.5v-1.5h5.5zm3-4h-8.5v-1.5h8.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M4.5 19.75H2.75V1.25h15.5V3H4.5z" />
    </svg>
  );
};
export default Files_02;
