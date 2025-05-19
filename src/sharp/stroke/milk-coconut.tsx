import React from "react";
const MilkCoconut: React.FC<
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
        d="M5 5.004V2h10.5v3.004L18 8v2M8 8v14M8 8 5 5 2 8v14h6M8 8h9.49M8 22h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.252 18.58c-.654-.654.009-2.377 1.48-3.848s3.194-2.134 3.848-1.48m-5.328 5.328c0 .592.355 1.539.888 2.071a4.604 4.604 0 0 0 6.511-6.511c-.532-.533-1.48-.888-2.071-.888m-5.328 5.328c.563.563 1.92.149 3.226-.918m2.102-4.41c.653.654-.01 2.377-1.48 3.848a8 8 0 0 1-.622.562m0 0c.109.7.326 1.51 1.51 2.102"
      />
    </svg>
  );
};
export default MilkCoconut;
