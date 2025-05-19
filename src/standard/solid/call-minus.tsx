import React from "react";
const CallMinus: React.FC<
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
        d="M6.497 2.106a2 2 0 0 0-3.203-.52L1.861 3.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.858L21.707 20a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.308.375l-3.317 3.316a16.07 16.07 0 0 1-6.586-6.585L8.18 8.529a2 2 0 0 0 .374-2.309zm6.986 3.207a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallMinus;
