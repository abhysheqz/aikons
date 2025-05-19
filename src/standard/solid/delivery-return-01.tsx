import React from "react";
const DeliveryReturn_01: React.FC<
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
        d="M6.526 3.25a1 1 0 0 0-.895.553L3.908 7.25H11v-4zm6.474 4h7.092l-1.724-3.447a1 1 0 0 0-.894-.553H13zm9.472.308.008-.004-2.323-4.646a3 3 0 0 0-2.683-1.658H6.526a3 3 0 0 0-2.683 1.658L1.52 7.554l.008.005a1 1 0 0 0-.278.691V20A2.75 2.75 0 0 0 4 22.75h16a2.7 2.7 0 0 0 1.12-.238c.84-.41 1.417-1.326 1.57-2.582.245-1.995-1.237-2.93-2.341-2.93h-2.1v1a1 1 0 0 1-1.706.707l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 18.25 14v1h2.099c.9 0 1.732.187 2.401.693V8.25a1 1 0 0 0-.278-.692"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryReturn_01;
