import React from "react";
const CallRinging_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m19.5 20 2.5-3.938c-6-5.416-14-5.416-20 0L4.5 20 8 18.523l.5-2.954c2-.984 5-.984 7 0l.5 2.954z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4v3m6 0-2 2M6 7l2 2"
      />
    </svg>
  );
};
export default CallRinging_03;
