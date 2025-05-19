import React from "react";
const CallDisabled: React.FC<
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
        d="M2.707 1.293a1 1 0 0 0-1.414 1.414L15.585 17a16 16 0 0 1-3.051 2.12l-3.317-3.317a2 2 0 0 0-2.309-.374l-4.114 2.057a2 2 0 0 0-.52 3.203l1.433 1.433a2.88 2.88 0 0 0 2.17.858A17.93 17.93 0 0 0 17 18.415l4.292 4.292a1 1 0 0 0 1.414-1.414zm14.778 1.5a2 2 0 0 1 3.203-.52l1.434 1.434c.555.556.897 1.332.857 2.169a17.9 17.9 0 0 1-3.156 9.338 1 1 0 1 1-1.646-1.136 16 16 0 0 0 .942-1.545l-3.316-3.317a2 2 0 0 1-.375-2.308zm-.268 5.01 2.782 2.781c.561-1.507.902-3.121.983-4.804a.88.88 0 0 0-.275-.66l-1.433-1.432z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallDisabled;
