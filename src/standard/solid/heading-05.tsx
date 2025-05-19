import React from "react";
const Heading_05: React.FC<
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
        d="M4 4a1 1 0 0 1 1 1v6h7V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H5v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 11a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H17v1h.5c1.94 0 3.5 1.586 3.5 3.513C21 18.438 19.413 20 17.5 20c-.673 0-1.2-.17-1.572-.356a3 3 0 0 1-.634-.436 1 1 0 0 1 1.39-1.437c.02.015.073.052.138.085.128.063.35.144.678.144.821 0 1.5-.68 1.5-1.487A1.51 1.51 0 0 0 17.5 15H16a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default Heading_05;
