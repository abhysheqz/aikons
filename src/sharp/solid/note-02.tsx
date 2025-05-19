import React from "react";
const Note_02: React.FC<
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
      <path fill="currentColor" d="m2.25 16.5 6 6v-6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H9.75V15h-7.5V3.75A.75.75 0 0 1 3 3h3V1.5h2zm0 7.501h8v-1.5H8zm5 6h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_02;
