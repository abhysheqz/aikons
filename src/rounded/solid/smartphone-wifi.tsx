import React from "react";
const SmartphoneWifi: React.FC<
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
        d="M7.729 5.266c.13-.004.25.06.332.161.351.433.817.717 1.319.845.23.059.345.088.387.147s.035.177.02.414a2.5 2.5 0 0 0 .37 1.48 2.5 2.5 0 0 0 1.872 1.171c.24.025.36.037.41.085l.019.02c.042.055.042.175.042.416a2.5 2.5 0 0 0 2.5 2.501h.006q.107 0 .212-.009c.269-.022.403-.034.468.026.064.06.064.177.064.414v3.525c0 1.274 0 2.306-.107 3.118-.112.845-.352 1.564-.917 2.137-.566.575-1.28.82-2.116.935-.802.11-1.82.11-3.074.11h-.11c-1.255 0-2.273 0-3.075-.11-.837-.115-1.55-.36-2.116-.935-.716-.727-.913-1.694-.983-2.863l-.002-.025.08-10.485.009-.054c.12-.783.364-1.453.896-1.993.566-.575 1.28-.821 2.116-.935.404-.055.862-.083 1.378-.096M8.5 19.009a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H9.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.993 1c-2.097 0-4.03.775-5.624 2.071a1 1 0 0 0 1.262 1.552C11.91 3.583 13.407 3 14.993 3c1.592 0 3.093.586 4.374 1.633a1 1 0 0 0 1.266-1.55C19.036 1.78 17.098 1 14.993 1M14.993 5.2a6.1 6.1 0 0 0-3.239.942 1 1 0 1 0 1.054 1.7 4.1 4.1 0 0 1 2.185-.641 4.1 4.1 0 0 1 2.196.648 1 1 0 0 0 1.058-1.698 6.1 6.1 0 0 0-3.254-.95M15 9a1 1 0 1 0 0 2h.006a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default SmartphoneWifi;
