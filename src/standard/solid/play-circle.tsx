import React from "react";
const PlayCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1.32 6.937c-.953-.51-2.18.086-2.18 1.06v5.506c0 .974 1.227 1.57 2.18 1.06l5.14-2.752c.907-.487.907-1.635 0-2.122z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayCircle;
