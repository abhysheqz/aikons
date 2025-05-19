import React from "react";
const AlertDiamond: React.FC<
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
        d="M12.48 1.424a.75.75 0 0 0-.96 0L8.728 3.75H4.5a.75.75 0 0 0-.75.75v4.228L1.424 11.52a.75.75 0 0 0 0 .96l2.326 2.791V19.5c0 .414.336.75.75.75h4.228l2.792 2.326a.75.75 0 0 0 .96 0l2.791-2.326H19.5a.75.75 0 0 0 .75-.75v-4.228l2.326-2.792a.75.75 0 0 0 0-.96L20.25 8.728V4.5a.75.75 0 0 0-.75-.75h-4.228zM11 14.5v2h2v-2zm2-1.5V7.5h-2V13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlertDiamond;
