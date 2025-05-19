import React from "react";
const InboxUnread: React.FC<
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
        d="M19.751 12.002v.748H15a.75.75 0 0 0-.75.75v.5a2.75 2.75 0 1 1-5.5 0v-.5a.75.75 0 0 0-.75-.75H3.25v-7.5a1 1 0 0 1 1-1h7.749a6.2 6.2 0 0 1 1-2H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20v-.172l.001-.078V11a6.2 6.2 0 0 1-2 1.002"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InboxUnread;
