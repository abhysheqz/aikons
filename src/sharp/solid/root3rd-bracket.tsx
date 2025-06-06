import React from "react";
const Root3rdBracket: React.FC<
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
        d="M19.5 4H18V2h2.5a1 1 0 0 1 1 1v6.667l1.3 1.733a1 1 0 0 1 0 1.2l-1.3 1.733V21a1 1 0 0 1-1 1H18v-2h1.5v-6.333L20.75 12l-1.25-1.667zM11.046 7.702A1 1 0 0 1 12 7h6v2h-5.265l-2.28 7.298a1 1 0 0 1-1.85.15l-1.379-2.76-.519.52-1.414-1.415 1.5-1.5a1 1 0 0 1 1.601.26l.891 1.781zm2.783 4.306a9 9 0 0 0-.535-.008v-2h.104c.4-.001.835-.003 1.226.144.221.083.432.202.618.357.219.182.373.41.492.632a6 6 0 0 1 .247-.243c.492-.454 1.162-.89 2.019-.89v2c-.138 0-.342.064-.663.36a6.4 6.4 0 0 0-.678.768l.207.45.115.247a2 2 0 0 0 .077.15l.014.006c.01.002.038.007.099.011.114.007.267.008.535.008v2h-.104c-.4.001-.835.003-1.226-.144a2.1 2.1 0 0 1-.618-.357 2.1 2.1 0 0 1-.492-.632 6 6 0 0 1-.247.243c-.492.454-1.162.89-2.019.89v-2c.138 0 .342-.064.663-.36.22-.204.439-.462.678-.768l-.207-.45-.115-.247a2 2 0 0 0-.078-.15l-.013-.006a1 1 0 0 0-.099-.011"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 3a1 1 0 0 1 1-1H6v2H4.5v6.333L3.25 12l1.25 1.667V20H6v2H3.5a1 1 0 0 1-1-1v-6.667L1.2 12.6a1 1 0 0 1 0-1.2l1.3-1.733z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Root3rdBracket;
