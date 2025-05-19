import React from "react";
const BitcoinMind: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.938 12.658V7.33m1.562 0V5.997m0 7.994v-1.333M8.938 9.994h3.124m0 0c.518 0 .938.447.938.999v.666c0 .552-.42 1-.937 1H8m4.063-2.665c.517 0 .937-.448.937-1v-.666c0-.551-.42-.999-.937-.999H8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.046 22.005v-5.331m2.036.942c-3.156-1.174-5.42-3.698-5.582-7.307C2.5 5.4 5.852 2.27 10.645 2c4.623 0 8.207 3.933 8.058 7.974q0 .034.019.062l2.721 3.803c.035.05.092.062.039.09l-1.713 1.05s-.14.692-.64 2.986c-.744 1.963-2.475 2.126-3.617 2.101m-.755-.06c.172 0 .486.054.755.06m0 1.939v-1.939"
      />
    </svg>
  );
};
export default BitcoinMind;
