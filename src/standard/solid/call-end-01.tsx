import React from "react";
const CallEnd_01: React.FC<
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
        d="M6.497 2.106a2 2 0 0 0-3.203-.52L1.861 3.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.858L21.707 20a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.375L11.45 18.43a16.08 16.08 0 0 1-6.586-6.585L8.18 8.529a2 2 0 0 0 .374-2.309zm8.192.5a1 1 0 1 0-1.414 1.414l2.293 2.293-2.293 2.292a1 1 0 0 0 1.415 1.415l2.292-2.293 2.293 2.293a1 1 0 0 0 1.415-1.415l-2.293-2.292L20.69 4.02a1 1 0 1 0-1.415-1.415l-2.293 2.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallEnd_01;
