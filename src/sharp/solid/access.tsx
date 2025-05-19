import React from "react";
const Access: React.FC<
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
        d="M7 1.25a5.75 5.75 0 0 0-3.25 10.494v8.067l2.72 2.72a.75.75 0 0 0 1.06 0l2.72-2.72V18a.75.75 0 0 0-.15-.45l-1.11-1.48 1.04-1.04a.75.75 0 0 0 .22-.53v-2.756A5.75 5.75 0 0 0 7 1.25m-.008 4C6.03 5.25 5.25 6.034 5.25 7s.78 1.75 1.742 1.75h.016C7.97 8.75 8.75 7.966 8.75 7s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.75 19.25H22a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.75-.75H11.75v1.75a2.25 2.25 0 0 1-.659 1.591l-.12.12.329.439c.292.39.45.863.45 1.35zM12.874 11.25H22a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.75-.75h-8.106c.231.708.356 1.465.356 2.25a7.2 7.2 0 0 1-1.376 4.25"
      />
    </svg>
  );
};
export default Access;
