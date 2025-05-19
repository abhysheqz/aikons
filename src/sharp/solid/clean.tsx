import React from "react";
const Clean: React.FC<
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
        d="m14.748 11.061 7.003-7.44-1.457-1.371-6.972 7.408z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.9 19.263c.92-1.428 1.85-3.824 1.85-6.445l-3.113-3.066-.499.295c-2.242 1.324-4.985 1.358-7.844.503l-1.044-.312.085 1.071c.136 1.735.458 3.211.946 4.464q.14.006.323.01c.452.008 1.078-.005 1.776-.093 1.42-.178 3.015-.644 4.09-1.72l1.06 1.061c-1.424 1.425-3.42 1.954-4.964 2.148-.58.072-1.113.1-1.556.105q.417.705.924 1.291c1.437 1.668 3.336 2.577 5.424 3.086l.373.091s1.222-1.02 2.169-2.49"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 7.502a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.002c.552 0 1 .426 1 .952v.096c0 .526-.448.952-1 .952s-1-.426-1-.952v-.096c0-.526.448-.952 1-.952"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clean;
