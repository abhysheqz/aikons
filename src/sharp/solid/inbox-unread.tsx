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
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M1.25 4.225c0-.538.437-.975.975-.975H12.5V5.2H3.2V14h5.55v.75a2.25 2.25 0 1 0 4.5 0V14h5.55v-2.5h1.95v10.275a.975.975 0 0 1-.975.975H2.225a.975.975 0 0 1-.975-.975z"
      />
    </svg>
  );
};
export default InboxUnread;
