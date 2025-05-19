import React from "react";
const Discount: React.FC<
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
        d="M11.52 1.424a.75.75 0 0 1 .96 0l2.791 2.326H19.5a.75.75 0 0 1 .75.75v4.228l2.326 2.792a.75.75 0 0 1 0 .96l-2.326 2.791V19.5a.75.75 0 0 1-.75.75h-4.228l-2.792 2.326a.75.75 0 0 1-.96 0L8.728 20.25H4.5a.75.75 0 0 1-.75-.75v-4.228L1.424 12.48a.75.75 0 0 1 0-.96L3.75 8.728V4.5a.75.75 0 0 1 .75-.75h4.228zM8.47 14.47l6-6 1.061 1.06-6 6zm2.033-5.97h-2.01v2h2.01zm5.008 5H13.5v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Discount;
