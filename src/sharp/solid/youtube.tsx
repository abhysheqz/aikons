import React from "react";
const Youtube: React.FC<
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
        d="M12 3.25c-3.798 0-7.317.376-10.165 1.018L1.25 4.4v15.2l.585.132C4.683 20.374 8.202 20.75 12 20.75s7.317-.376 10.165-1.018l.585-.132V4.4l-.585-.132C19.317 3.626 15.798 3.25 12 3.25M9 7.5l8 4.5-8 4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Youtube;
