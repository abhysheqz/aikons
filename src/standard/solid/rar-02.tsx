import React from "react";
const Rar_02: React.FC<
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
        d="M6.25 14a.75.75 0 0 1 .75-.75h1.75a2 2 0 0 1 1.061 3.695l.86 1.72a.75.75 0 1 1-1.342.67L8.286 17.25H7.75V19a.75.75 0 0 1-1.5 0zm1.5 1.75h1a.5.5 0 0 0 0-1h-1zm5.292-1.998a.75.75 0 0 1 .708-.502h.5a.75.75 0 0 1 .708.502l1.75 5a.75.75 0 0 1-1.416.496l-.35-.998h-1.885l-.35.998a.75.75 0 0 1-1.415-.496zm.54 2.998h.836L14 15.556zM17.25 14a.75.75 0 0 1 .75-.75h1.75a2 2 0 0 1 1.061 3.695l.86 1.72a.75.75 0 1 1-1.342.67l-1.043-2.085h-.536V19a.75.75 0 0 1-1.5 0zm1.5 1.75h1a.5.5 0 0 0 0-1h-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h12.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rar_02;
