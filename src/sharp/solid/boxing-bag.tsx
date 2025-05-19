import React from "react";
const BoxingBag: React.FC<
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
        d="M12 5.25c-2.356 0-4.552.585-6.365 1.595l-.385.214v2.56c4.498-1.159 9.002-1.159 13.5.001V7.06l-.385-.215C16.552 5.835 14.356 5.25 12 5.25M18.75 11.172c-4.502-1.23-8.998-1.23-13.5 0v5.656c4.502 1.23 8.998 1.23 13.5 0zM18.75 18.38c-4.498 1.16-9.002 1.16-13.5 0v2.56l.385.215C7.448 22.165 9.644 22.75 12 22.75s4.552-.585 6.365-1.595l.385-.214z"
      />
      <path
        fill="currentColor"
        d="M10.327 2.75h-4.33v-1.5h12v1.5h-4.33l2.89 3.252-1.12.996-3.44-3.87-3.44 3.87-1.12-.996z"
      />
    </svg>
  );
};
export default BoxingBag;
