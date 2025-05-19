import React from "react";
const Pdf_02: React.FC<
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
        d="M6.25 14a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 0 1 0 4.5h-.75V19a.75.75 0 0 1-1.5 0zm1.5 2.25h.75a.75.75 0 0 0 0-1.5h-.75zm4-2.25a.75.75 0 0 1 .75-.75h1.286c1.34 0 2.464 1.062 2.464 2.417v1.666c0 1.355-1.123 2.417-2.464 2.417H12.5a.75.75 0 0 1-.75-.75zm1.5.75v3.5h.536c.552 0 .964-.43.964-.917v-1.666c0-.487-.412-.917-.964-.917zm4-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-2.25v1h1.75a.75.75 0 0 1 0 1.5h-1.75V19a.75.75 0 0 1-1.5 0z"
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
export default Pdf_02;
