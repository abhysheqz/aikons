import React from "react";
const BitcoinReceipt: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.108 13.5v-6m1.87 0V6m0 9v-1.5m-1.87-3h3.74m0 0c.619 0 1.12.504 1.12 1.125v.75c0 .621-.501 1.125-1.12 1.125H8.985m4.861-3c.62 0 1.122-.504 1.122-1.125v-.75c0-.621-.502-1.125-1.122-1.125H8.986"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.227 2.019h15.629a.1.1 0 0 1 .1.1v19.246c0 .076.058.177 0 .14l-3.984-2.021-3.891 2.45a.1.1 0 0 1-.053.017c-.08.01-.037.06-.062.043l-3.962-2.493-3.669 1.853c-.059.037-.351.204-.351.128V2.02c0-.056.194 0 .243 0Z"
      />
    </svg>
  );
};
export default BitcoinReceipt;
