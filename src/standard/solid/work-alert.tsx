import React from "react";
const WorkAlert: React.FC<
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
        d="M7.332 2.45A2 2 0 0 1 9.255 1h4.491a2 2 0 0 1 1.923 1.45l.793 2.775-1.923.55L13.746 3H9.255l-.793 2.775-1.923-.55zM17.5 12.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.75 3.746a.75.75 0 0 0-1.5.008l.009 1.5a.75.75 0 0 0 1.5-.008zm-.75 2.779a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 4.75A2.75 2.75 0 0 0 1.25 7.5V19A2.75 2.75 0 0 0 4 21.75h8.256a6.75 6.75 0 0 1 9.494-9.494V7.5A2.75 2.75 0 0 0 19 4.75z"
      />
    </svg>
  );
};
export default WorkAlert;
