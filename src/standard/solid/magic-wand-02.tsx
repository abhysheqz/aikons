import React from "react";
const MagicWand_02: React.FC<
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
        d="M16.293 16.293a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.057 2.066a.75.75 0 0 1 .443.684v5.555l5.11 2.787a.75.75 0 0 1-.09 1.358l-6.16 2.37-1.893 6.15a.75.75 0 0 1-1.375.14l-2.807-5.146-5.597-.467a.75.75 0 0 1-.468-1.277l3.655-3.656L3.55 4.52a.75.75 0 0 1 .988-.961l5.566 2.319 4.148-3.688a.75.75 0 0 1 .805-.123"
      />
    </svg>
  );
};
export default MagicWand_02;
