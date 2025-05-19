import React from "react";
const EcoLab: React.FC<
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
        d="M12.442 2.734A2.75 2.75 0 0 0 10 1.25H7.25V3A2.75 2.75 0 0 0 10 5.75h1.25v2.5h-3v1.5h1v3.55l-3.745 6.555a1.935 1.935 0 0 0 1.68 2.895h9.63a1.935 1.935 0 0 0 1.68-2.895L14.75 13.3V9.75h1v-1.5h-3v-1.5H14A2.75 2.75 0 0 0 16.75 4V2.25H14c-.578 0-1.115.179-1.558.484M11.25 9.75h-.5v3.95h2.5V9.75h-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EcoLab;
