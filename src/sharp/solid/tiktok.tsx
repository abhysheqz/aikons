import React from "react";
const Tiktok: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM14.5 6a1 1 0 1 0-2 0v8.5a2.5 2.5 0 1 1-2.142-2.475l.284-1.98A4.5 4.5 0 1 0 14.5 14.5V9.523c.866.606 1.933.978 3 .978v-2c-.71 0-1.488-.295-2.084-.793C14.821 7.21 14.5 6.596 14.5 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tiktok;
