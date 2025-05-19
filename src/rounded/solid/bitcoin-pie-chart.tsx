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
        fillRule="evenodd"
        d="M12 7.25a.75.75 0 0 1 .75.75v.583h.813c.976 0 1.687.83 1.687 1.75V11c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813V16a.75.75 0 0 1-1.5 0v-.583H9.5a.75.75 0 0 1 0-1.5h.188v-3.834H9.5a.75.75 0 1 1 0-1.5h1.75V8a.75.75 0 0 1 .75-.75m-.812 2.833v1.167h2.374c.06 0 .188-.066.188-.25v-.667c0-.184-.129-.25-.187-.25zm2.374 2.667h-2.374v1.167h2.374c.06 0 .188-.066.188-.25V13c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.262 1.25C5.668 1.635 1.25 6.295 1.25 11.987c0 5.944 4.819 10.763 10.763 10.763 2.702 0 5.171-.996 7.061-2.64l-3.2-3.199a6.258 6.258 0 1 1-4.613-11.137z"
      />
      <path
        fill="currentColor"
        d="M12.764 5.774a6.26 6.26 0 0 1 5.462 5.462h4.524a10.765 10.765 0 0 0-9.986-9.986zM22.75 12.738h-4.524a6.23 6.23 0 0 1-1.29 3.111l3.2 3.2a10.7 10.7 0 0 0 2.614-6.311"
      />
    </svg>
  );
};
export default BitcoinPieChart;
