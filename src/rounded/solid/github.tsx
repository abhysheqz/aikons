import React from "react";
const Github: React.FC<
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
        d="M5.028 21.363c-1.269-.616-2.323-1.654-3.152-3.05-.283-.474-.068-1.075.43-1.314.497-.24 1.088-.025 1.38.444.65 1.043 1.406 1.728 2.215 2.12 1.012.492 2.222.584 3.639.193l.532 1.928c-1.79.494-3.514.422-5.044-.321"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.893 1.25c.431 0 1.03.1 1.437.199.72.175 1.642.51 2.503 1.157.75-.176 1.81-.383 3.167-.383s2.418.207 3.167.383c.86-.648 1.783-.982 2.503-1.157.406-.099 1.02-.199 1.437-.199h.512l.187.478c.259.665.353 1.475.354 2.234a9.6 9.6 0 0 1-.176 1.851 9.2 9.2 0 0 1 .81 1.639c.263.699.456 1.472.456 2.177 0 2.422-.811 4.132-2.095 5.34-.975.916-2.185 1.506-3.41 1.925.263.395.505.917.505 1.601v2.255c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-4.5c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707v-2.255c0-.684.242-1.206.504-1.6-1.224-.42-2.434-1.01-3.409-1.927-1.283-1.207-2.095-2.917-2.095-5.34 0-.704.193-1.477.456-2.176.221-.586.506-1.157.81-1.639a9.6 9.6 0 0 1-.176-1.851c.001-.76.095-1.569.354-2.234l.187-.478z"
      />
    </svg>
  );
};
export default Github;
