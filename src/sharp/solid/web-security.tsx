import React from "react";
const WebSecurity: React.FC<
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
        d="M3.225 1.25a.975.975 0 0 0-.975.975v17.55c0 .539.437.975.975.975H6.15V18.8H4.2V8h15.6v10.8h-1.95v1.95h2.925a.975.975 0 0 0 .975-.975V2.225a.975.975 0 0 0-.975-.975zM8 3.625H6v2h2zm4 0h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12.25A2.75 2.75 0 0 0 9.25 15v.75h-1.5v7h8.5v-7h-1.5V15A2.75 2.75 0 0 0 12 12.25M10.75 15v.75h2.5V15a1.25 1.25 0 1 0-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebSecurity;
