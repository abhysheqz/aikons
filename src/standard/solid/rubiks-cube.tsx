import React from "react";
const RubiksCube: React.FC<
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
        d="M15.86 3.287 12 1.143 8.14 3.287 12 5.295zm1.573.874-3.807 1.98 3.866 2.01 3.594-1.96zm4.317 3.375-3.5 1.91v4.29l3.5-1.908zm0 6-3.5 1.91v3.94l3.5-1.944zm-5 6.684v-3.956l-4 2.181v3.997zm-5.5 2.222v-3.997l-4-2.181v3.956zm-5.5-3.056v-3.94l-3.5-1.91v3.906zm-3.5-7.558 3.5 1.909V9.445l-3.5-1.909zm.665-5.638 3.594 1.96 3.865-2.01-3.806-1.98zm5.18 2.826L12 6.986l3.905 2.03L12 11.146zm4.655 3.43 4-2.182v4.29l-4 2.183zm-1.5 0v4.29l-4-2.181v-4.291z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RubiksCube;
