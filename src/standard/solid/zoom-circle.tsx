import React from "react";
const ZoomCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-5.5 7a.75.75 0 0 0-.75.75v4a2.75 2.75 0 0 0 2.75 2.75H13a.75.75 0 0 0 .75-.75v-4A2.75 2.75 0 0 0 11 8.25zM18.25 9.5a.75.75 0 0 0-1.198-.602l-2.017 1.5a.75.75 0 0 0-.302.602v2c0 .237.112.46.302.602l2.017 1.5a.75.75 0 0 0 1.198-.602z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZoomCircle;
