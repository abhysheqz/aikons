import React from "react";
const UserMultiple_03: React.FC<
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
        d="M3.934 14.804C5.587 13.826 7.708 13.25 10 13.25s4.413.576 6.066 1.554c.803.476 1.184 1.346 1.184 2.181V20a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-3.015c0-.835.38-1.705 1.184-2.181M5.75 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M18.355 20.75c.094-.231.146-.484.146-.75v-3.014c0-1.188-.543-2.515-1.798-3.257q-.27-.16-.55-.305c1.457.239 2.793.717 3.914 1.38.803.476 1.184 1.347 1.184 2.182V20a.75.75 0 0 1-.75.75zM13.523 11.724A5.49 5.49 0 0 0 15.5 7.5a5.49 5.49 0 0 0-1.977-4.224q.236-.026.477-.026a4.25 4.25 0 1 1-.477 8.474"
      />
    </svg>
  );
};
export default UserMultiple_03;
