import React from "react";
const Raw_02: React.FC<
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
        d="M5.75 14a.75.75 0 0 1 .75-.75h1.75a2 2 0 0 1 .83 3.82l.729 1.622a.75.75 0 1 1-1.368.616l-.926-2.058H7.25V19a.75.75 0 0 1-1.5 0zm1.5 1.75h1a.5.5 0 0 0 0-1h-1zM11.782 13.785a.75.75 0 0 1 .718-.535h1a.75.75 0 0 1 .718.534l1.5 5a.75.75 0 0 1-1.436.431l-.44-1.465h-1.684l-.44 1.465a.75.75 0 0 1-1.436-.43zm.826 2.465h.784L13 14.943zM17 13.25a.75.75 0 0 1 .75.75v3.19l.72-.72a.75.75 0 0 1 1.06 0l.72.72V14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.28.53L19 18.06l-1.47 1.47a.75.75 0 0 1-1.28-.53v-5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H6.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h13.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Raw_02;
