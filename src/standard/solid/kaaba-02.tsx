import React from "react";
const Kaaba_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.5 1.25h-14A2.75 2.75 0 0 0 2.75 4v1.25h19.5V4a2.75 2.75 0 0 0-2.75-2.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 6.75H2.75v1.5H6a.75.75 0 0 1 0 1.5H2.75v8.5h4V14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v4.25h9v-8.5H19a.75.75 0 0 1 0-1.5h3.25zM9 8.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm5 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.25 19.75h-9v3h8.25a.75.75 0 0 0 .75-.75zM11.75 22.75v-8h-3.5v8zM6.75 22.75v-3h-4V22c0 .414.336.75.75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2h-20a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kaaba_02;
