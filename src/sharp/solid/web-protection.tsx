import React from "react";
const WebProtection: React.FC<
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
        d="M12 22.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152v-3.069h.75a6 6 0 0 0 2.222-.446c.28-.112.714-.347.864-.429L12 13.25l.414.276c.15.082.584.317.865.43a6 6 0 0 0 2.221.445h.75v3.069c0 2.04-1.034 3.365-2.037 4.152-.496.39-.989.654-1.357.82-.185.084-.856.308-.856.308"
      />
    </svg>
  );
};
export default WebProtection;
