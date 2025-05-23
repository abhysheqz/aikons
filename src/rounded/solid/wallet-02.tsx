import React from "react";
const Wallet_02: React.FC<
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
        d="M10.5 1.75a4.25 4.25 0 0 1 4.248 4.172H6.252A4.25 4.25 0 0 1 10.5 1.75"
      />
      <path
        fill="currentColor"
        d="M6.379 2.75a5.2 5.2 0 0 0-.933 1.832h-.085a1.17 1.17 0 0 0 0 2.34h11.437c0-.315 0-.474-.018-.607a2 2 0 0 0-1.183-1.565 5.2 5.2 0 0 0-.973-1.996c.487.007.888.03 1.248.121l.248.071c1.22.393 2.16 1.336 2.497 2.522l.047.19c.074.359.083.766.085 1.266.745.14 1.491.518 2.012 1.039.524.582.76 1.302.873 2.145.064.475.09 1.021.103 1.642H19c-.365 0-.8.023-1.082.077a2.25 2.25 0 0 0-1.548 1.447c-.083.31-.12.81-.12 1.226s.037.915.12 1.226a2.25 2.25 0 0 0 1.548 1.447c.282.054.717.077 1.082.077h2.737c-.013.621-.04 1.167-.103 1.642-.114.843-.349 1.563-.873 2.145-.602.602-1.47.976-2.37 1.097-.864.116-1.963.116-3.326.116h-6.13c-1.363 0-2.462 0-3.327-.116-.843-.114-1.677-.458-2.26-.983-.601-.602-.86-1.36-.982-2.26-.116-.864-.116-1.964-.116-3.326V5.5c0-1.519 1.304-2.75 2.912-2.75z"
      />
      <path
        fill="currentColor"
        d="M21.75 15.75H19c-.385 0-.628-.014-.628-.014-.215.014-.597-.286-.597-.542 0-.074-.025-.181-.025-.694s.006-.623.025-.694c0-.205.354-.542.597-.542.085-.01.243-.014.628-.014h2.75z"
      />
    </svg>
  );
};
export default Wallet_02;
