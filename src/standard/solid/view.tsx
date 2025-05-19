import React from "react";
const View: React.FC<
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
        d="m22.382 12.155-.007.008c-.145.209-.56.805-.817 1.139a23 23 0 0 1-2.216 2.487c-1.845 1.785-4.528 3.711-7.592 3.711s-5.747-1.926-7.592-3.71a23 23 0 0 1-2.216-2.488 36 36 0 0 1-.817-1.138l-.007-.01a.75.75 0 0 1 0-.808l.007-.01c.145-.209.56-.804.817-1.138a23 23 0 0 1 2.216-2.487C6.003 5.926 8.686 4 11.75 4s5.747 1.926 7.592 3.71c.938.908 1.694 1.812 2.216 2.488.258.334.672.93.817 1.139l.007.009a.75.75 0 0 1 0 .809M11.75 15.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default View;
