import React from "react";
const BitcoinPieChart: React.FC<
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
        d="M12.763 4.264a7.76 7.76 0 0 1 6.973 6.972h3.014a10.765 10.765 0 0 0-9.987-9.986zM11.262 1.25C5.667 1.635 1.25 6.295 1.25 11.987c0 5.944 4.818 10.763 10.762 10.763 2.702 0 5.172-.996 7.061-2.64l-2.13-2.13a7.76 7.76 0 1 1-5.681-13.715zM18.004 16.917l2.131 2.131a10.7 10.7 0 0 0 2.614-6.31h-3.013a7.72 7.72 0 0 1-1.732 4.18"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 12a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 0 0-12.5 0m7-3.417V7.25h-1.5v1.333h-2.5v1.5h.937v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.812c.977 0 1.688-.83 1.688-1.75V13c0-.362-.11-.71-.304-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.563 2.667v-1.167h2.375c.059 0 .188.066.188.25V11c0 .184-.13.25-.188.25zm0 1.5h2.375c.059 0 .188.066.188.25v.667c0 .184-.13.25-.188.25h-2.375z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinPieChart;
