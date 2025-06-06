import React from "react";
const Progress_03: React.FC<
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
        d="M12 5.5c0-.552.45-1.007.997-.933a7.5 7.5 0 0 1 0 14.867c-.547.073-.997-.382-.997-.934z"
      />
    </svg>
  );
};
export default Progress_03;
