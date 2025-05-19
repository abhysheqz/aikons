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
        d="M12.364 1.344a.75.75 0 0 0-.728 0L8.139 3.287 12 5.295l3.861-2.008zm5.069 2.816-3.807 1.98 3.866 2.01 3.594-1.96zm4.317 3.376-3.5 1.91v4.29l3.5-1.908zm0 6-3.5 1.91v3.94l3.114-1.73A.75.75 0 0 0 21.75 17zm-5 6.683v-3.955l-4 2.181v3.996zm-5.5 2.222v-3.996l-4-2.181v3.955zm-5.5-3.055v-3.94l-3.5-1.91V17a.75.75 0 0 0 .386.656zm-3.5-7.558 3.5 1.909V9.445l-3.5-1.909zm.664-5.638 3.594 1.96 3.866-2.01-3.807-1.98zm5.181 2.826L12 6.986l3.905 2.03L12 11.146zm4.655 3.43 4-2.182v4.29l-4 2.183zm-1.5 0v4.29l-4-2.181v-4.291z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RubiksCube;
