import React from "react";
const SourceCodeCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.347 9.508a1 1 0 0 1 1.306-1.515l1.226 1.057.037.032c.226.193.465.4.64.597.197.223.444.578.444 1.071s-.247.848-.445 1.071a7 7 0 0 1-.639.597l-.037.032-1.226 1.058a1 1 0 0 1-1.306-1.515l1.227-1.058q.121-.104.214-.185l-.214-.185zm-6.59-1.41a1 1 0 0 1-.104 1.41l-1.227 1.057q-.121.104-.214.185l.214.185 1.227 1.058a1 1 0 1 1-1.306 1.515L6.121 13.7l-.037-.032c-.226-.193-.465-.4-.64-.597C5.248 12.848 5 12.493 5 12s.247-.848.445-1.071c.174-.198.414-.404.639-.597l.037-.032 1.226-1.057a1 1 0 0 1 1.41.104m5.192-.032a1 1 0 0 0-1.897-.632l-2 6a1 1 0 0 0 1.897.633z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCodeCircle;
