import React from "react";
const Microsoft: React.FC<
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
        d="M12.75 14.5c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.784 1.75 1.75V20A1.75 1.75 0 0 1 20 21.75h-5.5A1.75 1.75 0 0 1 12.75 20zM2.25 4c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 9.5zM2.25 14.5c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75V20a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 20zM12.75 4c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.783 1.75 1.75v5.5A1.75 1.75 0 0 1 20 11.25h-5.5a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Microsoft;
