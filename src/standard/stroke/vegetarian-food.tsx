import React from "react";
const VegetarianFood: React.FC<
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
        d="M17 13.23s-.91-.46-1.818-.46c-1.364 0-3.182 1.845-3.182 4.615C12 20.154 14.49 22 17 22s5-1.846 5-4.615-1.818-4.616-3.182-4.616c-.909 0-1.818.462-1.818.462m0 0c0-1.384.91-3.23 2.727-3.23M6 5s-1.102-.03-1.273-.085m0 0c-.635-.206-1.09-.762-1.09-1.415 0-.828.732-1.5 1.636-1.5h5.454c.904 0 1.637.672 1.637 1.5 0 .662-.469 1.224-1.118 1.423m-6.519-.008C3.107 7.885 2 10.377 2 13.777V20a2 2 0 0 0 2 2h6.5m.746-17.077C11.083 4.973 10 5 10 5m1.246-.077c.974 1.786 1.772 3.396 2.254 5.134"
      />
    </svg>
  );
};
export default VegetarianFood;
