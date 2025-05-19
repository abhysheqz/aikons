import React from "react";
const MessageCancel_01: React.FC<
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
        d="m15.826 2 5.927 6.012m-5.927 0L21.753 2M7.43 15.025h8.89m-8.89-5.01h5.433"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.856 3.016C3.073 3.223-.487 12.04 3.621 18.034L2.158 21.8a.1.1 0 0 0 .124.131l4.203-1.38c1.623 1.37 8.413 1.578 10.716 0 2.58-1.32 5.285-4.16 4.548-9.593M9.856 3.016q.243-.014.49-.014m-.49.014 1.429-.006 1.32-.008"
      />
    </svg>
  );
};
export default MessageCancel_01;
