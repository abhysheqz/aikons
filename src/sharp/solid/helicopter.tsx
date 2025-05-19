import React from "react";
const Helicopter: React.FC<
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
        d="M13 8V4h2v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.227 5.25c-.3 0-.585.136-.77.37a.95.95 0 0 0-.178.825l.977 3.846a.97.97 0 0 0 .68.691l6.47 1.819 2.733 4.482a.98.98 0 0 0 .838.467h8.796a.97.97 0 0 0 .977-.962v-2.884c0-3.718-3.063-6.731-6.84-6.731H6.624L5.452 5.635a.98.98 0 0 0-.782-.385zM15.91 9.096c2.698 0 4.886 2.152 4.886 4.807V14h-.794a6 6 0 0 1-5.9-4.904z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 19h-2v2h10v-2h-2v-2h-2v2h-2v-2h-2zM18 5h-8V3h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Helicopter;
