import React from "react";
const Note_05: React.FC<
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
        d="M8 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75V18H2.25V3.75A.75.75 0 0 1 3 3h3V1.5h2zm0 6.5h8V8H8zm0 4h4V12H8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 21.75V19.5h19.5v2.25a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
};
export default Note_05;
