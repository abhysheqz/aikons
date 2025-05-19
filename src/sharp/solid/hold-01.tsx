import React from "react";
const Hold_01: React.FC<
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
        d="M11.544 2.531v7.241h-.797v-5.57c0-.707-.587-1.28-1.31-1.28s-1.31.573-1.31 1.28v10.37L5.6 12.094a1.54 1.54 0 0 0-2.266.123 1.474 1.474 0 0 0-.03 1.83l.001.002 4.822 6.174v2.527H18.72v-2.652l1.313-1.538A4 4 0 0 0 21 15.955V6.987c0-.708-.587-1.281-1.31-1.281s-1.31.573-1.31 1.281V12h-.798V4.759c0-.707-.586-1.281-1.31-1.281-.723 0-1.31.574-1.31 1.281v6.127h-.797V2.53c0-.707-.587-1.281-1.31-1.281s-1.31.574-1.31 1.281"
      />
    </svg>
  );
};
export default Hold_01;
