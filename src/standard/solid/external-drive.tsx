import React from "react";
const ExternalDrive: React.FC<
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
        d="M3.25 5A3.75 3.75 0 0 1 7 1.25h10A3.75 3.75 0 0 1 20.75 5v9.25H3.25zm0 10.75V19A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19v-3.25zm4-9.75A.75.75 0 0 1 8 5.25h2a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6M8 8.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm6.992 10.25a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ExternalDrive;
