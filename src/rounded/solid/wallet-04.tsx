import React from "react";
const Wallet_04: React.FC<
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
        d="M12.964 3.689a.6.6 0 0 1 .269-.064.58.58 0 0 1 .588.573V7.75h-8.98zM2.25 8.5v-.188c0-.845.486-1.619 1.258-2.005l8.574-4.286c.356-.178.75-.271 1.15-.271 1.391 0 2.518 1.096 2.518 2.448V7.75c1.052.003 1.927.02 2.642.116.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v1.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wallet_04;
