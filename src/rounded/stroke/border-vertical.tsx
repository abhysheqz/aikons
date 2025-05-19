import React from "react";
const BorderVertical: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.3 2.751c-1.04.194-1.804.536-2.409 1.14-.604.605-.946 1.37-1.14 2.409M17.7 2.751c1.04.194 1.804.536 2.409 1.14.604.605.946 1.37 1.14 2.409M13.9 2.505q-.875-.006-1.9-.005-1.025-.001-1.9.005M21.495 10.1q.006.875.005 1.9.001 1.025-.005 1.9m-18.99-3.8q-.006.875-.005 1.9-.001 1.025.005 1.9m.246 3.8c.194 1.04.536 1.804 1.14 2.409.605.604 1.37.946 2.409 1.14M21.249 17.7c-.194 1.04-.536 1.804-1.14 2.409-.605.604-1.37.946-2.409 1.14m-3.8.246q-.875.006-1.9.005-1.024.001-1.9-.005M9.15 12h5.7m4.75 0h1.9m-19 0h1.9M12 2.5v19"
      />
    </svg>
  );
};
export default BorderVertical;
