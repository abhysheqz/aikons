import React from "react";
const Navigation_06: React.FC<
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
        d="M10.38 3.73a1.829 1.829 0 0 1 3.239 0l7.899 14.722a1.895 1.895 0 0 1-.265 2.188c-.497.547-1.338.822-2.16.415l-6.953-3.439a.31.31 0 0 0-.28 0l-6.953 3.44c-.821.407-1.663.132-2.16-.415a1.895 1.895 0 0 1-.265-2.188z"
      />
    </svg>
  );
};
export default Navigation_06;
