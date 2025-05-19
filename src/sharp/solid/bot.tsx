import React from "react";
const Bot: React.FC<
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
        d="M1.25 14.5A2.75 2.75 0 0 1 4 11.75v1.5a1.25 1.25 0 1 0 0 2.5v1.5a2.75 2.75 0 0 1-2.75-2.75M21.25 14.5c0-.69-.56-1.25-1.25-1.25v-1.5a2.75 2.75 0 1 1 0 5.5v-1.5c.69 0 1.25-.56 1.25-1.25M8.25 6v3h-1.5V6zM17.25 6v3h-1.5V6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M16.5 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M4.5 8.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75zm9.453 7.236c-.413.44-1.115.764-1.953.764s-1.54-.323-1.953-.764l-1.094 1.027c.727.774 1.84 1.237 3.047 1.237s2.32-.463 3.047-1.237zM8 13a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7-1a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bot;
