import React from "react";
const Snow: React.FC<
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
        d="m21 14.25-.819-.921c-.562-.633-.843-.949-.843-1.329s.281-.696.843-1.329L21 9.75m-18 0 .819.921c.562.633.843.949.843 1.329s-.281.696-.843 1.329L3 14.25M14.572 21l.372-1.203c.263-.852.395-1.277.74-1.473.345-.195.778-.09 1.643.12l1.173.286M9.428 3l-.372 1.203c-.264.852-.395 1.277-.74 1.473-.345.195-.778.09-1.643-.12L5.5 5.27M5 18.732l1.603-.335c.897-.188 1.345-.282 1.687-.065s.45.661.666 1.551L9.227 21M19 5.268l-1.604.335c-.896.188-1.344.282-1.687.065s-.45-.661-.665-1.551L14.772 3M19 12H5m10.5 6-7-12m7 0-7 12"
      />
    </svg>
  );
};
export default Snow;
