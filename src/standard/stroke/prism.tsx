import React from "react";
const Prism: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v-3.5m0 3.5-7.41 6.484M12 15l7.41 6.484M20 9v12.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V9M12 6.5V2.793M4 9h16l-8-7z"
      />
    </svg>
  );
};
export default Prism;
