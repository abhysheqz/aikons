import React from "react";
const Fortress: React.FC<
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
        d="M21.75 3a.75.75 0 0 0-.75-.75h-2l-.5 2h-2l-.5-2h-2a.75.75 0 0 0-.75.75v5.25h-2.5V3a.75.75 0 0 0-.75-.75H8l-.5 2h-2l-.5-2H3a.75.75 0 0 0-.75.75v17H1v1.75h8.75V18a2.25 2.25 0 0 1 4.5 0v3.75H23V20h-1.25zM7.5 8.25h-2v1.5h2zm5.5 3v1.5h-2v-1.5zm5.5-3h-2v1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fortress;
