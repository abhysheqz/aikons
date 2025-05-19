import React from "react";
const ReturnRequest: React.FC<
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
        d="M6.523 3.25a1 1 0 0 0-.895.553L3.79 7.376H11V3.25zM13 7.376h7.203l-1.837-3.573a1 1 0 0 0-.895-.553H13zm9.636.352-2.482-4.82a3 3 0 0 0-2.683-1.658H6.523A3 3 0 0 0 3.84 2.908L1.333 7.78l.001.001a.75.75 0 0 0-.084.346V20A2.75 2.75 0 0 0 4 22.75h16A2.75 2.75 0 0 0 22.75 20V8.126a.75.75 0 0 0-.114-.398M10.53 11.532a.75.75 0 0 1 0 1.06l-.72.72H14a2.75 2.75 0 1 1 0 5.5h-1a.75.75 0 0 1 0-1.5h1a1.25 1.25 0 1 0 0-2.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ReturnRequest;
