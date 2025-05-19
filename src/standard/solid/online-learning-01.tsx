import React from "react";
const OnlineLearning_01: React.FC<
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
        d="M11.993 2.75c-1.13 0-2.184.34-3.079.934a.75.75 0 1 1-.828-1.25 7.04 7.04 0 0 1 7.83.01.75.75 0 0 1-.832 1.248 5.55 5.55 0 0 0-3.091-.942M9.994 4.847a3.89 3.89 0 0 1 4.016.01.75.75 0 0 1-.775 1.285 2.39 2.39 0 0 0-2.473-.007.75.75 0 0 1-.768-1.288"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.174 6.618c-3.095-.738-5.508-.25-7.159.445a9.6 9.6 0 0 0-1.265.645v14.626q.11-.092.277-.215a7.8 7.8 0 0 1 1.57-.88c1.387-.583 3.474-1.024 6.23-.368a.75.75 0 0 0 .923-.73V7.347a.75.75 0 0 0-.576-.73M11.25 22.334V7.708a9.6 9.6 0 0 0-1.265-.645C8.334 6.368 5.92 5.88 2.826 6.618a.75.75 0 0 0-.576.73V20.14a.75.75 0 0 0 .924.73c2.755-.656 4.842-.215 6.229.368a7.8 7.8 0 0 1 1.57.88q.166.122.277.215"
      />
    </svg>
  );
};
export default OnlineLearning_01;
