import React from "react";
const PieChart_06: React.FC<
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
        d="M1.25 11.262C1.635 5.668 6.295 1.25 11.987 1.25c5.944 0 10.763 4.819 10.763 10.763 0 5.692-4.418 10.352-10.012 10.737v-5.029a5.758 5.758 0 1 0-6.46-6.459z"
      />
      <path
        fill="currentColor"
        d="M1.25 12.764a10.765 10.765 0 0 0 9.986 9.986v-5.029a5.76 5.76 0 0 1-4.957-4.957z"
      />
    </svg>
  );
};
export default PieChart_06;
