import React from "react";
const PlugSocket: React.FC<
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
        d="m22.75 2.643-3.363 3.363-1.393-1.393 3.363-3.363zM6.006 19.387 2.643 22.75 1.25 21.357l3.363-3.363z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.076 10.207 6.718 6.718-3.548 3.548-4.511.41-2.617-2.616.41-4.512zM18.266 3.117l2.617 2.617-.41 4.511-3.548 3.549-6.718-6.719 3.548-3.548z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.508 10.93-2.955 2.955-1.393-1.393 2.955-2.954zm2.955 2.955-2.955 2.955-1.393-1.393 2.955-2.954z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlugSocket;
