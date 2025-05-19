import React from "react";
const HandPointingDown_01: React.FC<
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
        strokeWidth={1.5}
        d="M8.844 2.176v2l-4.46 5.906-.008.013c-.1.14-.211.297-.26.464-.094.317-.116.353-.106.664.008.261.063.545.19.767.074.13.13.23.203.325.287.383.819.59 1.332.61.51.02.946-.31 1.298-.68.692-.728 1.134-1.267 1.958-2.097v9.95c-.006.532.144 1.1.508 1.451.862.835 1.652.834 2.549.028.385-.347.476-.895.482-1.44l-.028-5.45c2.598.105 5.219-.907 6.52-2.187.992-.867 1.101-1.77.894-3.23-.285-1.687-.887-2.71-2.02-5.084v-2.01"
      />
    </svg>
  );
};
export default HandPointingDown_01;
