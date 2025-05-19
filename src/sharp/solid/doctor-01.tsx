import React from "react";
const Doctor_01: React.FC<
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
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12.25c1.06 0 1.962.467 2.561.884.307.213.887.716 1.189 1.084v8.532H3.25v-8.532c.403-.501.882-.87 1.189-1.084.6-.417 1.5-.884 2.561-.884h.75v4.103a2.75 2.75 0 0 0-2 2.647v1.75h1.5V19a1.25 1.25 0 0 1 2.5 0v1.75h1.5V19c0-1.259-.846-2.32-2-2.647V12.25h1.06L12 13.94l1.69-1.69h1.56v5.7a1.5 1.5 0 1 0 1.5 0v-5.7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_01;
