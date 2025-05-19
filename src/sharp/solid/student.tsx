import React from "react";
const Student: React.FC<
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
        d="M11.705 1.31a.75.75 0 0 1 .59 0l7 3a.75.75 0 0 1 .455.69v4.75h-1.5V6.137l-2 .858V8.5a.75.75 0 0 1-1.041.691 9 9 0 0 0-.741-.208C13.935 8.87 13.113 8.75 12 8.75s-1.935.12-2.468.233a9 9 0 0 0-.737.207.75.75 0 0 1-1.045-.69V6.995L4.705 5.689a.75.75 0 0 1 0-1.378z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 7.75V9.5a2.75 2.75 0 1 0 5.5 0V7.75h1.5V9.5a4.25 4.25 0 0 1-8.5 0V7.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 14.75c2.686 0 5.304 1.293 7.553 3.743a.75.75 0 0 1 .197.507v3a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .197-.507C6.696 16.043 9.314 14.75 12 14.75"
      />
    </svg>
  );
};
export default Student;
