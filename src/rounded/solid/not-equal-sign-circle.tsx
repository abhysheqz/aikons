import React from "react";
const NotEqualSignCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.165 6.305a1 1 0 0 0-1.664-1.11l-1.555 2.333H7a1 1 0 0 0 0 2h4.613l-1.63 2.444H7a1 1 0 1 0 0 2h1.65l-.815 1.223a1 1 0 1 0 1.664 1.11l1.555-2.333H17a1 1 0 1 0 0-2h-4.613l1.63-2.444H17a1 1 0 0 0 0-2h-1.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotEqualSignCircle;
