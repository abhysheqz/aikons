import React from "react";
const ArrowUpLeft_02: React.FC<
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
        d="M5.623 5.624c.37-.368.829-.472 1.264-.494.402-.02.901.025 1.463.076l1.354.123c.954.087 1.752.16 2.338.3s1.238.41 1.492 1.114c.255.704-.072 1.33-.432 1.812-.343.459-.872.994-1.505 1.627l6.985 6.986a1 1 0 0 1-1.414 1.414l-6.985-6.985c-.634.633-1.17 1.163-1.629 1.506-.483.36-1.108.687-1.812.432-.703-.254-.974-.906-1.114-1.492s-.213-1.384-.3-2.338l-.123-1.354c-.051-.562-.096-1.061-.076-1.463.022-.435.126-.895.494-1.264"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpLeft_02;
