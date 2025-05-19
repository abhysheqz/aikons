import React from "react";
const Ruler: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17.5 10.5 2 2M14 14l2 2m-5.5 1.5 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.536 4.678c1.364-1.365 2.047-2.047 2.808-2.363a4.14 4.14 0 0 1 3.17 0c.761.316 1.444.998 2.808 2.363 1.365 1.364 2.047 2.047 2.363 2.808a4.14 4.14 0 0 1 0 3.17c-.316.761-.998 1.444-2.363 2.808l-5.857 5.858c-1.365 1.365-2.048 2.047-2.809 2.363a4.14 4.14 0 0 1-3.17 0c-.761-.316-1.444-.998-2.808-2.363-1.365-1.364-2.047-2.047-2.363-2.808a4.14 4.14 0 0 1 0-3.17c.316-.761.998-1.444 2.363-2.808z"
      />
    </svg>
  );
};
export default Ruler;
