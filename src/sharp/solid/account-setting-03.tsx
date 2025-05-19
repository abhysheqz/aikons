import React from "react";
const AccountSetting_03: React.FC<
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
        d="M12.48 1.424a.75.75 0 0 0-.96 0L8.724 3.75H4.496a.75.75 0 0 0-.75.75V8.73l-2.323 2.792a.75.75 0 0 0 0 .959l2.323 2.791v4.23c0 .413.335.75.75.75h4.228l2.796 2.326a.75.75 0 0 0 .96 0l2.791-2.327H19.5a.75.75 0 0 0 .75-.75v-4.229l2.322-2.791a.75.75 0 0 0 0-.96L20.25 8.73V4.5a.75.75 0 0 0-.75-.75h-4.228zM12 7.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-2.85 9.625A3.29 3.29 0 0 1 12 15.23c1.218 0 2.281.66 2.852 1.645l1.298-.75A4.79 4.79 0 0 0 12 13.73a4.79 4.79 0 0 0-4.148 2.394z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AccountSetting_03;
