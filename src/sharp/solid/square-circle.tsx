import React from "react";
const SquareCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1 7.083C13 6.937 14.233 6 15.5 6s2.5.937 2.5 2.333c0 .654-.289 1.245-.75 1.667H18v2h-4a1 1 0 0 1-.555-1.832l2.4-1.6c.127-.084.155-.18.155-.235 0-.05-.021-.122-.104-.195A.6.6 0 0 0 15.5 8a.6.6 0 0 0-.396.138c-.083.073-.104.144-.104.195zm-6.008 3.679a9 9 0 0 0-.64-.012v-2h.033c.278 0 .543 0 .77.018.25.02.521.068.797.197.26.121.494.29.691.496.208.216.341.454.446.684q.078.173.156.378.19-.26.39-.49C10.18 10.655 10.958 10 12 10v2c-.151 0-.421.095-.854.593-.343.396-.677.915-1.042 1.513l.383 1.041c.115.313.183.495.244.629.04.089.063.12.069.128q.043.045.092.068c.01.003.043.01.116.016.135.011.317.012.64.012v2h-.033c-.278 0-.543 0-.77-.018a2.3 2.3 0 0 1-.797-.197 2.3 2.3 0 0 1-.691-.496 2.4 2.4 0 0 1-.446-.684 7 7 0 0 1-.156-.378 8 8 0 0 1-.39.49C7.82 17.346 7.042 18 6 18v-2c.151 0 .421-.095.854-.593.343-.396.677-.915 1.042-1.513l-.383-1.041a10 10 0 0 0-.244-.629.7.7 0 0 0-.068-.128.3.3 0 0 0-.093-.068 1 1 0 0 0-.116-.016"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareCircle;
