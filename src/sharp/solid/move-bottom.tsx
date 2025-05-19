import React from "react";
const MoveBottom: React.FC<
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
        d="M11.998 1.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 10.767v8.512l-2.206-1.926L7.5 18.878l4.5 3.873 4.5-3.873-1.295-1.525L13 19.28v-8.512z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveBottom;
