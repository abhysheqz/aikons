import React from "react";
const Xsl_02: React.FC<
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
        d="M2.774 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H8.044a2 2 0 0 1-1.76-3.029l.884-1.47-.883-1.472a2 2 0 0 1 1.76-3.028H20.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.668A2.924 2.924 0 0 0 2.75 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 13.25a.75.75 0 0 1 .75.75v4.25h1.25a.75.75 0 1 1 0 1.5h-2a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75M7.614 13.357a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 1 1 1.286.772L10.375 16.5l1.268 2.114a.75.75 0 0 1-1.286.772L9.5 17.958l-.857 1.428a.75.75 0 0 1-1.286-.772L8.625 16.5l-1.268-2.114a.75.75 0 0 1 .257-1.03M12.75 14a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5h-1.75v1H16a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-1H13.5a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xsl_02;
