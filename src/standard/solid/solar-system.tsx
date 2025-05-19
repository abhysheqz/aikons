import React from "react";
const SolarSystem: React.FC<
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
        d="M11.492 6.448a.75.75 0 0 1 1.016 0l1.161 1.07 1.565-.061a.75.75 0 0 1 .773.65l.213 1.585 1.244.979c.3.236.375.66.173.985l-.84 1.355.333 1.566a.75.75 0 0 1-.5.87l-1.495.486-.733 1.412a.75.75 0 0 1-.953.348L12 17.092l-1.45.6a.75.75 0 0 1-.952-.347l-.733-1.412-1.494-.487a.75.75 0 0 1-.501-.87l.334-1.565-.841-1.355a.75.75 0 0 1 .173-.985l1.244-.979.213-1.586a.75.75 0 0 1 .773-.65l1.565.062z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.836 4.02a3 3 0 0 1-3.817 3.817A8.96 8.96 0 0 0 3 11.999a9 9 0 0 0 9 9c1.504 0 2.92-.368 4.164-1.02a3 3 0 0 1 3.817-3.817A8.96 8.96 0 0 0 21 12.001a9 9 0 0 0-9-9c-1.504 0-2.92.368-4.164 1.02m13.727 13.42A10.95 10.95 0 0 0 23 12c0-6.075-4.925-11-11-11-1.977 0-3.835.523-5.44 1.437A3 3 0 0 0 2.437 6.56 10.95 10.95 0 0 0 1 12c0 6.075 4.925 11 11 11 1.977 0 3.835-.523 5.44-1.437a3 3 0 0 0 4.123-4.123"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarSystem;
