import React from "react";
const PlugSocket: React.FC<
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
        d="M22.207 1.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0M5.207 18.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.263 11.177a1.75 1.75 0 0 1 2.474 0l4.586 4.586a1.75 1.75 0 0 1 0 2.474L10.03 20.53a.75.75 0 0 1-.53.22H6.328a2.75 2.75 0 0 1-1.944-.805l-.829-.829a2.75 2.75 0 0 1-.805-1.944V14a.75.75 0 0 1 .22-.53zM13.97 3.47a.75.75 0 0 1 .53-.22h3.172c.729 0 1.428.29 1.944.805l.829.829a2.75 2.75 0 0 1 .805 1.944V10a.75.75 0 0 1-.22.53l-2.293 2.293a1.75 1.75 0 0 1-2.474 0l-4.586-4.586a1.75 1.75 0 0 1 0-2.474z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.207 9.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m1.586 3a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlugSocket;
