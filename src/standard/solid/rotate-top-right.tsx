import React from "react";
const RotateTopRight: React.FC<
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
        d="M9.54 1.192a.95.95 0 0 1 1.337.193l1.432 1.923a.97.97 0 0 1 .09 1.007.95.95 0 0 1-.854.531H4.864a.96.96 0 0 0-.955.962v6.73a.96.96 0 0 1-.954.962.96.96 0 0 1-.955-.961V5.808a2.874 2.874 0 0 1 2.864-2.885h4.772L9.35 2.54a.966.966 0 0 1 .19-1.347"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 9.75A2.75 2.75 0 0 1 8.75 7h10a2.75 2.75 0 0 1 2.75 2.75v10a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 6 19.75z"
      />
    </svg>
  );
};
export default RotateTopRight;
