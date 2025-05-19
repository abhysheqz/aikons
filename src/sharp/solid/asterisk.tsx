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
        d="M20.246 4.133c-1.742-1.65-4.247-2.154-6.801-1.75-2.56.404-5.247 1.724-7.482 3.842-2.234 2.117-3.64 4.673-4.072 7.125-.432 2.455.113 4.86 1.863 6.518 2.898 2.745 7.847 2.336 11.902-.235L20.246 21l-1.26-4.205c1.774-2 2.87-4.291 3.176-6.48.327-2.337-.246-4.6-1.916-6.182m-3.983 4.251L13 10.268V6.5h-2v3.768L7.737 8.384l-1 1.732L10 12l-3.263 1.884 1 1.732L11 13.732V17.5h2v-3.767l3.263 1.883 1-1.732L14 12l3.263-1.884z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asterisk;
