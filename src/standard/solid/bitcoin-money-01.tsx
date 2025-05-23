import React from "react";
const BitcoinMoney_01: React.FC<
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
        d="M16.293 3H7.207l.144.564a4.75 4.75 0 0 1-5.786 5.787h-.002L1 9.208v5.402l.563-.143h.001a4.75 4.75 0 0 1 5.786 5.787l-.062.246h9.005l-.143-.564a4.75 4.75 0 0 1 5.786-5.787l.564.143V9.208l-.563.143h-.001a4.75 4.75 0 0 1-5.786-5.787zM22.5 7.66V5.75A2.75 2.75 0 0 0 19.75 3h-1.909l-.239.937a3.25 3.25 0 0 0 3.96 3.96h.003zM3.75 3h1.909l.239.937q.1.39.102.813a3.25 3.25 0 0 1-4.063 3.148h-.002L1 7.66V5.75A2.75 2.75 0 0 1 3.75 3m1.99 17.5.158-.62q.1-.39.102-.813a3.25 3.25 0 0 0-4.063-3.148l-.002.001-.935.237v1.593a2.75 2.75 0 0 0 2.75 2.75zm14.01 0h-1.909l-.239-.937a3.25 3.25 0 0 1 3.96-3.96h.003l.935.237v1.91a2.75 2.75 0 0 1-2.75 2.75M12.5 7.75a.75.75 0 0 0-1.5 0V8H9.25a.75.75 0 0 0 0 1.5h.25V14h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 12.75 8h-.25zM11 11V9.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMoney_01;
