import React from "react";
const CoinsYen: React.FC<
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
        d="M3.314 7.822c.134-.146.368-.016.335.18A10.3 10.3 0 0 0 3.5 9.75C3.5 15.411 8.09 20 13.75 20q.895 0 1.748-.148c.196-.034.326.2.18.334A8.75 8.75 0 0 1 3.314 7.822"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 1a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m-1.924 4.77a.75.75 0 1 0-1.152.96L13 9.522V10h-1.25a.75.75 0 0 0 0 1.5H13v1.75a.75.75 0 0 0 1.5 0V11.5h1.25a.75.75 0 0 0 0-1.5H14.5v-.478l2.326-2.792a.75.75 0 1 0-1.152-.96L13.75 8.078z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsYen;
