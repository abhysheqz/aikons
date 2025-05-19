import React from "react";
const PenConnectUsb: React.FC<
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
        d="M2.112 2.125a1 1 0 0 1 1-1h1.45a2 2 0 0 1 1.73.996l.874 1.505 2.233-.001c.338-.606.975-1.04 1.737-1.04 1.155 0 1.989.988 1.989 2.04 0 1.05-.832 2.042-1.989 2.042-.763 0-1.399-.436-1.737-1.042h-.584l-.51 1.254a2 2 0 0 1-1.853 1.246H5.138a1 1 0 0 1 0-2h1.314l.203-.498a1 1 0 0 1-.129 0l-4.4.001a1 1 0 1 1-.001-2h2.729l-.292-.503h-1.45a1 1 0 0 1-1-1M22.039 10.25A2.855 2.855 0 1 0 18 6.21l-.93.93.068-.062 4.04 4.03zm-1.92 1.92-8.522 8.52a5.7 5.7 0 0 1-2.654 1.503l-2.636.66a.75.75 0 0 1-.91-.91l.66-2.636a5.7 5.7 0 0 1 1.502-2.654l8.583-8.583-.064.07z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PenConnectUsb;
