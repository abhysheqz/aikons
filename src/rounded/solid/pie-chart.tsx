import React from "react";
const PieChart: React.FC<
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
        d="M20.203 14.647c.872-.168 1.308-.252 1.458-.1a.4.4 0 0 1 .042.05c.122.175-.006.503-.262 1.16a10.195 10.195 0 0 1-9.5 6.493c-5.628 0-10.191-4.563-10.191-10.192 0-4.324 2.693-8.019 6.493-9.5.656-.255.985-.383 1.16-.261.02.014.033.025.05.042.152.15.068.586-.1 1.458-.146.758-.146 1.645-.146 2.452v2.385c0 .847 0 1.69.095 2.392.107.798.372 1.736 1.154 2.518s1.72 1.047 2.518 1.154c.701.095 1.544.095 2.39.095h2.386c.807 0 1.695 0 2.453-.146"
      />
      <path
        fill="currentColor"
        d="m15.683 2.4-.065-.026c-.625-.26-1.207-.5-1.746-.587-.629-.101-1.203 0-1.8.37-.048.03-.12.077-.166.11-.61.441-.904 1.017-1.037 1.708-.12.62-.12 1.388-.12 2.274v2.23c0 .916 0 1.678.082 2.283.086.637.274 1.211.735 1.672s1.034.649 1.672.735c.605.081 1.367.081 2.282.08h2.231c.885.001 1.654.001 2.274-.118.691-.133 1.267-.427 1.707-1.037a3 3 0 0 0 .111-.166c.369-.597.471-1.171.37-1.8-.087-.54-.328-1.121-.587-1.747l-.027-.064A10.93 10.93 0 0 0 15.683 2.4"
      />
    </svg>
  );
};
export default PieChart;
