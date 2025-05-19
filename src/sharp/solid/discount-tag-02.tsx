import React from "react";
const DiscountTag_02: React.FC<
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
        d="M12 1.25a.75.75 0 0 0-.53.22l-10 10a.75.75 0 0 0 0 1.06l10 10a.75.75 0 0 0 1.06 0l10-10a.75.75 0 0 0 .22-.53V2a.75.75 0 0 0-.75-.75zM13.011 8h-2.015v2h2.015zm.004 6H11v2h2.015zM16 12.75H8v-1.5h8zM18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscountTag_02;
