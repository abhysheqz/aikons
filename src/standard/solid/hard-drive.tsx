import React from "react";
const HardDrive: React.FC<
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
        d="M3.578 5.099q.062-.207.144-.402a3.75 3.75 0 0 1 3.496-2.445q.094-.004.192-.004h9.178q.096 0 .191.004a3.75 3.75 0 0 1 3.547 2.573q.054.14.096.284l.935 3.148 1.358 4.53q.032.105.032.215v5a3.75 3.75 0 0 1-3.75 3.75H5.007a3.75 3.75 0 0 1-3.75-3.75v-4.9a1 1 0 0 1 .037-.387zm1.916.574-1.982 6.61h16.954l-1.96-6.605a2 2 0 0 0-1.918-1.43H7.41a2 2 0 0 0-1.916 1.425m7.516 10.371a1 1 0 1 0 0 2h.011a1 1 0 1 0 0-2zm4.989 0a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HardDrive;
