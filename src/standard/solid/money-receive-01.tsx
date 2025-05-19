import React from "react";
const MoneyReceive_01: React.FC<
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
        d="M20 6.75a2.75 2.75 0 0 1 2.75 2.75v10A2.75 2.75 0 0 1 20 22.25H4a2.75 2.75 0 0 1-2.75-2.75v-10A2.75 2.75 0 0 1 4 6.75h3.488c.105.212.245.412.422.589l2.5 2.5c.42.42 1.02.66 1.59.686a2.46 2.46 0 0 0 1.591-.686l2.5-2.5c.177-.177.316-.377.422-.589zM2.75 19.5c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm18.5-1.93a4 4 0 0 0-3.18 3.18H20c.69 0 1.25-.56 1.25-1.25zM12 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 8.25c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V9.5c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 2.75a1 1 0 0 1 2 0v3.086l.793-.793a1 1 0 1 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.338.068l-.076-.068-2.5-2.5-.068-.076a1 1 0 0 1 1.406-1.406l.076.068.793.793z"
      />
    </svg>
  );
};
export default MoneyReceive_01;
