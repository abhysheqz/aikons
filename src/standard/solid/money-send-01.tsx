import React from "react";
const MoneySend_01: React.FC<
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
        d="M20 6.75a2.75 2.75 0 0 1 2.75 2.75v10A2.75 2.75 0 0 1 20 22.25H4a2.75 2.75 0 0 1-2.75-2.75v-10A2.75 2.75 0 0 1 4 6.75h3.84q.034.046.07.09a2.24 2.24 0 0 0 1.84.644v.766a2.25 2.25 0 0 0 2.02 2.238l.23.012.23-.012a2.25 2.25 0 0 0 2.02-2.238v-.766a2.24 2.24 0 0 0 1.84-.643q.044-.045.083-.091zM2.75 19.5c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm18.5-1.93a4 4 0 0 0-3.18 3.18H20c.69 0 1.25-.56 1.25-1.25zM12 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 8.25c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V9.5c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.793 5.957a1 1 0 0 1-.069-1.338l.069-.076 2.5-2.5.076-.068a1 1 0 0 1 1.262 0l.076.068 2.5 2.5a1 1 0 1 1-1.414 1.414L13 5.164V8.25a1 1 0 1 1-2 0V5.164l-.793.793-.076.069a1 1 0 0 1-1.338-.069"
      />
    </svg>
  );
};
export default MoneySend_01;
