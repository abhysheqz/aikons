import React from "react";
const RemoteControl: React.FC<
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
        d="M3.75 4A2.75 2.75 0 0 1 6.5 1.25h11A2.75 2.75 0 0 1 20.25 4v16a2.75 2.75 0 0 1-2.75 2.75h-11A2.75 2.75 0 0 1 3.75 20zm3.5 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-6 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M9.75 8a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 4.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoteControl;
