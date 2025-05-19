import React from "react";
const Progress_04: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        fill="currentColor"
        d="M12 5.5c0-.552.45-1.007.997-.933a7.5 7.5 0 1 1-8.43 8.43c-.074-.547.38-.997.933-.997H11a1 1 0 0 0 1-1z"
      />
    </svg>
  );
};
export default Progress_04;
