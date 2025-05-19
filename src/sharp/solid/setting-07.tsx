import React from "react";
const Setting_07: React.FC<
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
        d="M12.48 1.424a.75.75 0 0 0-.96 0L8.724 3.75H4.496a.75.75 0 0 0-.75.75V8.73L1.423 11.52a.75.75 0 0 0 0 .959l2.323 2.791v4.23c0 .413.335.75.75.75h4.228l2.796 2.326a.75.75 0 0 0 .96 0l2.791-2.327H19.5a.75.75 0 0 0 .75-.75v-4.229l2.322-2.791a.75.75 0 0 0 0-.96L20.25 8.73V4.5a.75.75 0 0 0-.75-.75h-4.228zM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Setting_07;
