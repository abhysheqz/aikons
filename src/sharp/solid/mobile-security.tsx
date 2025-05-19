import React from "react";
const MobileSecurity: React.FC<
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
        d="M16.5 1.25A2.75 2.75 0 0 0 13.75 4v.75h-1.5v7h8.5v-7h-1.5V4a2.75 2.75 0 0 0-2.75-2.75M15.25 4v.75h2.5V4a1.25 1.25 0 1 0-2.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.316 3.25c.134-.754.467-1.44.943-2H4a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-8.75h-8v-10zM9.5 20h3v-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileSecurity;
