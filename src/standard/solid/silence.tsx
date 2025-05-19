import React from "react";
const Silence: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.25 2.25a.75.75 0 0 1 .75.75v.25h1.5V15a.75.75 0 0 1 1.5 0v.25H15a.75.75 0 0 1 0 1.5h-.75V17a.75.75 0 0 1-1.5 0v-.25h-1.5V17a.75.75 0 0 1-1.5 0v-.25H9a.75.75 0 0 1 0-1.5h.75V15a.75.75 0 0 1 .75-.75M8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm7.991 0a1.25 1.25 0 0 0 0 2.5H16a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Silence;
