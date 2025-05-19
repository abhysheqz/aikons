import React from "react";
const User_02: React.FC<
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
        d="M5.934 14.804C7.587 13.826 9.708 13.25 12 13.25s4.413.576 6.066 1.554c.803.476 1.184 1.346 1.184 2.181V20a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-3.015c0-.835.38-1.705 1.184-2.181M7.75 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default User_02;
