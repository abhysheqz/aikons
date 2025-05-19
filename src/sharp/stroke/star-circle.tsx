import React from "react";
const StarCircle: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.009 7.118a.1.1 0 0 1 .168 0l1.693 2.905 3.15.786c.07.021.098.112.052.173l-2.185 2.331.845 3.692.002.016c.001.069-.034.055-.1.029l-3.537-1.471-3.543 1.471c-.066.026-.086-.03-.084-.103l.002-.017.817-3.622-2.172-2.324c-.046-.06-.018-.151.053-.172l3.142-.783z"
      />
    </svg>
  );
};
export default StarCircle;
