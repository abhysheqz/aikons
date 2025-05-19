import React from "react";
const Yoga_01: React.FC<
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
        d="M14.75 4a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0"
      />
      <path
        fill="currentColor"
        d="M5.25 14a6.75 6.75 0 0 1 13.5 0v.75H18a6.75 6.75 0 0 1-6-3.655 6.75 6.75 0 0 1-6 3.655h-.75z"
      />
      <path
        fill="currentColor"
        d="M7.32 15.891c-.187.333-.427.603-.728.76L2.945 18.56c-1.082.566-1.385 1.654-1.084 2.573a2.36 2.36 0 0 0 2.27 1.618c1.921 0 3.852-.737 5.632-1.583.723-.343 1.44-.714 2.131-1.072l.312-.161.454.25c.58.32 1.177.651 1.808.973 1.66.85 3.471 1.593 5.403 1.593 1.13 0 1.979-.733 2.269-1.618.3-.919-.002-2.007-1.085-2.573L17.41 16.65c-.302-.157-.542-.427-.729-.76a8 8 0 0 1-4.679-2.6 8 8 0 0 1-4.68 2.6"
      />
    </svg>
  );
};
export default Yoga_01;
