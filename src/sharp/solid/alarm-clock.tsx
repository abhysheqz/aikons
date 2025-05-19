import React from "react";
const AlarmClock: React.FC<
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
        d="M2.293 21.086 5 18.379l1.414 1.414L3.707 22.5zm18 1.414-2.707-2.707L19 18.379l2.707 2.707zM1.25 5.785l3.014-2.93 1.405 1.43-3.015 2.93zm20.096 1.43-3.015-2.93 1.405-1.43 3.014 2.93z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.75-8.81V9h-1.5v5.31l2.72 2.72 1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.5H9v-2h6v2h-2V5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlarmClock;
