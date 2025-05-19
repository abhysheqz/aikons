import React from "react";
const Slack: React.FC<
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
        d="M14.75 1.25a2.5 2.5 0 0 0-2.5 2.5v5.5a2.5 2.5 0 0 0 5 0v-5.5a2.5 2.5 0 0 0-2.5-2.5M9.25 12.25a2.5 2.5 0 0 0-2.5 2.5v5.5a2.5 2.5 0 0 0 5 0v-5.5a2.5 2.5 0 0 0-2.5-2.5M14.75 12.25a2.5 2.5 0 0 0 0 5h5.5a2.5 2.5 0 0 0 0-5zM3.75 6.75a2.5 2.5 0 0 0 0 5h5.5a2.5 2.5 0 0 0 0-5zM8.75 1.25a2.5 2.5 0 0 0 0 5h1.75a.75.75 0 0 0 .75-.75V3.75a2.5 2.5 0 0 0-2.5-2.5M13.5 17.75a.75.75 0 0 0-.75.75v1.75a2.5 2.5 0 1 0 2.5-2.5zM20.25 6.25a2.5 2.5 0 0 0-2.5 2.5v1.75a.75.75 0 0 0 .75.75h1.75a2.5 2.5 0 0 0 0-5M3.75 12.75a2.5 2.5 0 1 0 2.5 2.5V13.5a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Slack;
