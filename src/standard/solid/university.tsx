import React from "react";
const University: React.FC<
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
        d="M1 22a1 1 0 0 1 1-1h19.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 12a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 13a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M5.75 8a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 5.75 8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm4.5 15.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m-1.5-11.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75M11.25 16a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.012a.76.76 0 0 1 .943-.737l3.987.988a.75.75 0 0 1 .57.728v2.002a.75.75 0 0 1-.75.75h-3.25V8a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default University;
