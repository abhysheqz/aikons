import React from "react";
const SummationCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1.176 7.759 3.163.011c.01.096.014.24.015.485a1 1 0 0 0 2-.006c0-.258-.004-.52-.033-.754a1.96 1.96 0 0 0-.265-.798c-.357-.581-.898-.809-1.349-.893-.328-.06-.695-.055-.919-.052h-2.7c-.497 0-.972 0-1.334.051-.321.045-1.051.191-1.32.936-.266.733.184 1.313.397 1.558.241.277.6.592.979.924l1.738 1.536-1.738 1.523c-.379.332-.738.647-.98.924-.212.244-.662.825-.397 1.558.27.745 1 .89 1.321.936.362.05.837.05 1.334.05 0 0-.022.001 0 .001h2.7c.224.004.59.009.92-.052.45-.084.991-.312 1.348-.893.167-.272.234-.55.265-.798.029-.234.032-.496.033-.754a1 1 0 1 0-2-.006c0 .246-.005.389-.015.485l-3.17.017 1.73-1.515c.172-.15.37-.325.519-.497.177-.205.393-.532.393-.985 0-.454-.216-.78-.393-.986a5 5 0 0 0-.52-.497l-.032-.028z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SummationCircle;
