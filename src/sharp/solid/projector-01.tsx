import React from "react";
const Projector_01: React.FC<
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
        d="M10 9.75q0-.382.05-.75H2a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-9A.75.75 0 0 0 22 9h-1.05q.05.368.05.75a5.5 5.5 0 1 1-11 0m-3.5 2.5h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 9.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m4.105 21.356 1.5-3 1.79.894-1.5 3zm14 .894-1.5-3 1.79-.894 1.5 3zM16.5 1.75v2h-2v-2zm-4.793.793 1.5 1.5-1.414 1.414-1.5-1.5zm6.086 1.5 1.5-1.5 1.414 1.414-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Projector_01;
