import React from "react";
const Note_01: React.FC<
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
        d="M8 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 3 3h3V1.5h2zm8 8.75H8v-2h8zm-4 5H8v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_01;
