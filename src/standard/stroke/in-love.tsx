import React from "react";
const InLove: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q-.002-1.03-.2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2M10 9.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5M20.9 2.262c-1.397-.712-2.4.251-2.4.251s-1.003-.963-2.4-.25C14.408 3.123 14.286 6.5 18.5 8c4.214-1.499 4.092-4.876 2.4-5.738"
      />
    </svg>
  );
};
export default InLove;
