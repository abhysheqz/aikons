import React from "react";
const FlipPhone: React.FC<
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
        d="M4.75 5.127c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v10.118c0 4.174-3.206 7.632-7.25 7.632s-7.25-3.458-7.25-7.632zm3 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v3.5a2.25 2.25 0 0 1-2.25 2.25h-4a2.25 2.25 0 0 1-2.25-2.25zM11 17.377a.75.75 0 0 0 0 1.5h2a.75.75 0 1 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 1.123a1 1 0 0 1 1 1v3.062a1 1 0 0 1-2 0V2.123a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipPhone;
