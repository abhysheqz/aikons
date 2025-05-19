import React from "react";
const Jsx_03: React.FC<
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
        d="M17.614 13.357a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 1 1 1.286.772L20.375 16.5l1.268 2.114a.75.75 0 1 1-1.286.772l-.857-1.428-.857 1.428a.75.75 0 0 1-1.286-.772l1.268-2.114-1.268-2.114a.75.75 0 0 1 .257-1.03M11 13.25a.75.75 0 0 1 .75.75v3.5a2.25 2.25 0 0 1-4.5 0V17a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 0 1.5 0V14a.75.75 0 0 1 .75-.75m1.742.75a.75.75 0 0 1 .75-.75h2.17a.75.75 0 0 1 0 1.5h-1.42v1h1.42a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-2.17a.75.75 0 0 1 0-1.5h1.42v-1h-1.42a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H9.5A3.5 3.5 0 0 1 6 17.5V17a2 2 0 0 1 3-1.733V14a2 2 0 0 1 2-2h8.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.828a.97.97 0 0 0-.687-.285H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jsx_03;
