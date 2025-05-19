import React from "react";
const FileStar: React.FC<
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
        d="M15.697 14.614a.601.601 0 0 1 1.106 0l.947 2.241 2.448.193a.593.593 0 0 1 .34 1.045l-1.862 1.57.57 2.353c.125.513-.437.92-.893.646l-2.103-1.264-2.103 1.264c-.456.274-1.018-.133-.893-.646l.57-2.353-1.862-1.57a.593.593 0 0 1 .34-1.045l2.449-.193z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h5.885a1.83 1.83 0 0 1-.038-1.029l.389-1.601-1.271-1.072c-1.276-1.075-.58-3.117 1.048-3.246l1.69-.133.652-1.541c.635-1.504 2.772-1.504 3.408 0l.65 1.54 1.692.134a2 2 0 0 1 .454.092V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileStar;
