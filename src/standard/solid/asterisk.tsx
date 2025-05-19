import React from "react";
const Asterisk: React.FC<
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
        d="M20.246 4.133c-1.742-1.65-4.247-2.154-6.801-1.75-2.56.404-5.247 1.724-7.482 3.842-2.234 2.117-3.64 4.673-4.072 7.125-.432 2.455.113 4.86 1.863 6.518 2.898 2.745 7.847 2.336 11.902-.235l4.075 1.567a.75.75 0 0 0 .94-1.035l-1.685-3.37c1.774-2 2.87-4.291 3.176-6.48.327-2.337-.246-4.6-1.916-6.182M13 7.5a1 1 0 1 0-2 0v2.768L8.603 8.884a1 1 0 1 0-1 1.732L10 12l-2.397 1.384a1 1 0 0 0 1 1.732L11 13.732V16.5a1 1 0 1 0 2 0v-2.767l2.397 1.383a1 1 0 1 0 1-1.732L14 12l2.397-1.384a1 1 0 1 0-1-1.732L13 10.268z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asterisk;
