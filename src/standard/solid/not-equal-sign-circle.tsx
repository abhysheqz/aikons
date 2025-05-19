import React from "react";
const NotEqualSignCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.8 7.35a1 1 0 1 0-1.6-1.2L13 9H7.5a1 1 0 0 0 0 2h4L10 13H7.5a1 1 0 1 0 0 2h1l-.3.4a1 1 0 0 0 1.6 1.2L11 15h5.5a1 1 0 0 0 0-2h-4l1.5-2h2.5a1 1 0 0 0 0-2h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotEqualSignCircle;
