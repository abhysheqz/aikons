import React from "react";
const BitcoinGraph: React.FC<
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
      <path fill="currentColor" d="M8.75 8.75h5.5v13.5h-5.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 1.75v1.333h.813c.976 0 1.687.83 1.687 1.75V5.5c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813v1.333h-1.5V9.917h-2.5v-1.5h.938V4.583h-.938v-1.5h2.5V1.75zm-1.562 2.833V5.75h2.375c.058 0 .187-.066.187-.25v-.667c0-.184-.129-.25-.187-.25zm2.375 2.667h-2.375v1.167h2.375c.058 0 .187-.066.187-.25V7.5c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.75 22.25h5.5v-9.5h-5.5zM1.75 11.75h5.5v10.5h-5.5z"
      />
    </svg>
  );
};
export default BitcoinGraph;
