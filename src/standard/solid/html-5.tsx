import React from "react";
const Html_5: React.FC<
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
        d="M2.5 1.25a.75.75 0 0 0-.744.843l2 16a.75.75 0 0 0 .391.569l7.5 4a.75.75 0 0 0 .706 0l7.5-4a.75.75 0 0 0 .391-.569l2-16a.75.75 0 0 0-.744-.843zM7.5 5a1 1 0 0 0-.994 1.11l.5 4.5A1 1 0 0 0 8 11.5h6.905l-.34 3.727L12 15.96l-2.64-.754-.38-1.902a1 1 0 0 0-1.96.392l.499 2.5a1 1 0 0 0 .706.765l3.5 1a1 1 0 0 0 .55 0l3.5-1a1 1 0 0 0 .72-.87l.5-5.5A1 1 0 0 0 16 9.5H8.895L8.617 7H16.5a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Html_5;
