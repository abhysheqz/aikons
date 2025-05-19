import React from "react";
const CallOutgoing_02: React.FC<
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
        d="M6.497 2.106a2 2 0 0 0-3.203-.52L1.861 3.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.857L21.707 20a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.375L11.45 18.43a16.07 16.07 0 0 1-6.586-6.585L8.18 8.529a2 2 0 0 0 .374-2.309zm7.244 8.905a1 1 0 1 1-1.415-1.414l4.346-4.367L15.05 3.61c-.187-.188-.315-.453-.208-.696a1 1 0 0 1 .916-.597H20a1 1 0 0 1 1 1v4.243a1 1 0 0 1-.597.915c-.243.107-.508-.02-.696-.208l-1.621-1.622z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallOutgoing_02;
