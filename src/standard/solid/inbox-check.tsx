import React from "react";
const InboxCheck: React.FC<
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
        d="M18 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m2.176 4.03a.75.75 0 0 0-1.152-.96L17.55 6.089l-.62-.62a.75.75 0 1 0-1.06 1.061l1.2 1.2a.75.75 0 0 0 1.106-.05zm-.425 7.47v-.748a6.2 6.2 0 0 0 2-1.002v8.75l-.001.078V20A2.75 2.75 0 0 1 19 22.75H4A2.75 2.75 0 0 1 1.25 20V5A2.75 2.75 0 0 1 4 2.25h9a6.2 6.2 0 0 0-1.001 2H4.25a1 1 0 0 0-1 1v7.5H8a.75.75 0 0 1 .75.75v.5a2.75 2.75 0 1 0 5.5 0v-.5a.75.75 0 0 1 .75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InboxCheck;
