import React from "react";
const Robot_01: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .75.75v1.25h3.18c.524 0 .929 0 1.281.094a2.75 2.75 0 0 1 1.945 1.944c.094.352.094.757.093 1.281 0 1.118 0 2.055-.162 2.66a4.75 4.75 0 0 1-3.358 3.36c-.606.162-1.318.161-2.436.161h-2.587c-1.118 0-1.83 0-2.436-.162A4.75 4.75 0 0 1 4.91 9.23c-.162-.605-.162-1.542-.162-2.66 0-.524 0-.929.094-1.28a2.75 2.75 0 0 1 1.945-1.945c.352-.095.756-.094 1.28-.094h3.181V2a.75.75 0 0 1 .75-.75M9.5 6.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm4.99 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM12 14.25c-3.769 0-6.932 2.603-7.704 6.1-.31 1.405.916 2.4 2.1 2.4h11.21c1.183 0 2.409-.995 2.099-2.4-.772-3.497-3.936-6.1-7.705-6.1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_01;
