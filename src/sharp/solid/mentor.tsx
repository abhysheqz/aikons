import React from "react";
const Mentor: React.FC<
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
        d="M13.25 21a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75M15.25 12.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 2.25h9v2H9zm6 5H9v-2h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 8.75a.75.75 0 0 0-.75.75V16a.75.75 0 0 0 .75.75h5a.75.75 0 0 0 .75-.75v-5.25H12v-2zM1.75 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Mentor;
