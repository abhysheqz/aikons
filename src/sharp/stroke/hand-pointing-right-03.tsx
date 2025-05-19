import React from "react";
const HandPointingRight_03: React.FC<
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
        d="M2 8.881h2.005l5.872-4.403.1-.074c.413-.32.911-.576 1.43-.516.8.091 1.458.684 1.57 1.452.066.45-.065 1.062-.444 1.475l-2.125 2.097 1.723-.03h8.303c.864 0 1.565.674 1.565 1.506s-.7 1.506-1.565 1.506h-8.42m3.497.58-.046 1.11c-.125.827-.7 1.237-1.414 1.276l-2.56.02m3.005.35v1.102c.032.85-.694 1.569-1.538 1.541h-1.975m1.998.607-.023.995c-.018.8-.685 1.378-1.517 1.378l-2.41.022c-.682-.032-1.807-.01-2.612-.25a1.9 1.9 0 0 1-.473-.233l-.31-.2-.572-.437-1.066-.875H2.001"
      />
    </svg>
  );
};
export default HandPointingRight_03;
