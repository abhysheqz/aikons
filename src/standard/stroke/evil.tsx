import React from "react";
const Evil: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4.936 2 3l1.686 5.225c.117.363.175.545.17.717s-.086.383-.25.803a9 9 0 1 0 16.786 0c-.162-.42-.243-.63-.248-.803-.005-.172.053-.354.17-.717L22 3l-6 1.936m-8 0A9 9 0 0 0 6.343 6M8 4.936A8.96 8.96 0 0 1 12 4c1.437 0 2.795.337 4 .936m0 0A9 9 0 0 1 17.657 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17c.836.628 1.874 1 3 1a4.98 4.98 0 0 0 3-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 10c.52 0 1.747 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791ZM17 10c-.52 0-1.746 0-2.5.709m0 0c-.214.201-.5.515-.5.791a.5.5 0 0 0 1 0c-.005-.295-.333-.576-.5-.791Z"
      />
    </svg>
  );
};
export default Evil;
