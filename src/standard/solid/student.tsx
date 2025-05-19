import React from "react";
const Student: React.FC<
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
        d="M4.75 20.375a5.625 5.625 0 0 1 5.625-5.625h3.25a5.625 5.625 0 0 1 5.625 5.625 2.375 2.375 0 0 1-2.375 2.375h-9.75a2.375 2.375 0 0 1-2.375-2.375"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.295 1.31a.75.75 0 0 0-.59 0l-7 3a.75.75 0 0 0 0 1.38L7.75 6.994V9.5a4.25 4.25 0 0 0 8.5 0V6.995l2-.858V9a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.455-.69zM9.25 8.05c.533-.115 1.637-.3 2.75-.3s2.217.185 2.75.3V9.5a2.75 2.75 0 1 1-5.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Student;
