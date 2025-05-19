import React from "react";
const Clothes: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.029 2.5c0 6.5 0 12.5 3.509 12.5m-7.52-12.5c0 6.5 0 12.5-3.509 12.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.032 2.895 3.01 1.094 1.022 9.909a.1.1 0 0 1-.1.11h-3.352m-.58-11.113.58 11.113m-.58-11.113L14.532 2c-.248.482-.881 1.438-2.524 1.483-1.518.042-2.243-.996-2.489-1.485l-2.508.907m10.601 11.104.448 7.883a.1.1 0 0 1-.1.106H6.114a.1.1 0 0 1-.1-.105l.413-7.906M7.01 2.904 4.008 3.998l-.947 9.879a.1.1 0 0 0 .1.11h3.267M7.01 2.903l-.583 11.082"
      />
    </svg>
  );
};
export default Clothes;
