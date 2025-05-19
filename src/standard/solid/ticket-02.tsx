import React from "react";
const Ticket_02: React.FC<
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
        d="M15.055 2.884a2.75 2.75 0 0 0-3.889 0L9.06 4.99l9.946 9.953 2.11-2.11a2.75 2.75 0 0 0 0-3.889l-1.642-1.641a.75.75 0 0 0-1.06 0 1.214 1.214 0 1 1-1.717-1.717.75.75 0 0 0 0-1.061zm2.89 13.12L8 6.05l-5.116 5.116a2.75 2.75 0 0 0 0 3.89l1.64 1.64a.75.75 0 0 0 1.062 0 1.214 1.214 0 1 1 1.717 1.718.75.75 0 0 0 0 1.06l1.641 1.642a2.75 2.75 0 0 0 3.89 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ticket_02;
