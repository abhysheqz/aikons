import React from "react";
const Halal: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.98 1.424a.75.75 0 0 0-.96 0L9.228 3.75H5a.75.75 0 0 0-.75.75v4.228L1.924 11.52a.75.75 0 0 0 0 .96l2.326 2.791V19.5c0 .414.336.75.75.75h4.228l2.792 2.326a.75.75 0 0 0 .96 0l2.791-2.326H20a.75.75 0 0 0 .75-.75v-4.228l2.326-2.792a.75.75 0 0 0 0-.96L20.75 8.728V4.5a.75.75 0 0 0-.75-.75h-4.228zM8.25 9v5.25H7v1.5h2a.75.75 0 0 0 .75-.75V9zm6 3.75V9h-1.5v1.362l-.664-.83-1.172.937 1.836 2.294v1.487H11v1.5h2.5a.75.75 0 0 0 .75-.75v-.75H18a.75.75 0 0 0 .586-1.219l-2-2.5-1.172.938 1.025 1.281z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Halal;
