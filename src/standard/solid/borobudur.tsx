import React from "react";
const Borobudur: React.FC<
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
        d="M6.15 8.95a3.75 3.75 0 0 1 3.6-2.7h4.5a3.75 3.75 0 0 1 3.6 2.7l2.335 8.004a4 4 0 0 0-.184-.004H4q-.092 0-.185.004zm6.38.02a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 0 1.06l.5.5a.75.75 0 0 0 1.06 0l.5-.5a.75.75 0 0 0 0-1.06zm-2.5 4a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 0 1.06l.5.5a.75.75 0 0 0 1.06 0l.5-.5a.75.75 0 0 0 0-1.06zm5 0a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 0 1.06l.5.5a.75.75 0 0 0 1.06 0l.5-.5a.75.75 0 0 0 0-1.06zM1.25 21A2.75 2.75 0 0 1 4 18.25h16A2.75 2.75 0 0 1 22.75 21v1a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.002 1.25c-.953 0-1.751.722-1.846 1.67l-.203 2.03h4.098l-.203-2.03a1.855 1.855 0 0 0-1.846-1.67"
      />
    </svg>
  );
};
export default Borobudur;
