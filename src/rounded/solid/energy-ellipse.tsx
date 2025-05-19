import React from "react";
const EnergyEllipse: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.777 5.36c0-.55-.297-1.04-.776-1.254-.507-.227-1.11-.088-1.476.405l-3.999 5.39a1.44 1.44 0 0 0-.18 1.367c.154.406.551.841 1.168.841h1.709v4.03c0 .55.297 1.04.776 1.255.507.227 1.11.088 1.475-.405l4-5.39a1.44 1.44 0 0 0 .18-1.367c-.155-.406-.552-.841-1.169-.841h-1.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EnergyEllipse;
