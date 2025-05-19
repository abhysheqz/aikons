import React from "react";
const NotificationSquare: React.FC<
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
        d="M14 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.725 2.805a.4.4 0 0 1-.01.202 6 6 0 0 0 8.72 6.834c.139-.077.315.02.315.178v9.87a2.86 2.86 0 0 1-2.861 2.861H4.11a2.86 2.86 0 0 1-2.861-2.861V5.11A2.86 2.86 0 0 1 4.111 2.25H12a.75.75 0 0 1 .725.555M6.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationSquare;
