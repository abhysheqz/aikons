import React from "react";
const RenewableEnergy_01: React.FC<
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
        d="M13.898 1.364a.75.75 0 0 1 .238 1.033L12.353 5.25H15a.75.75 0 0 1 .636 1.147l-2.5 4a.75.75 0 0 1-1.272-.795l1.783-2.852H11a.75.75 0 0 1-.636-1.148l2.5-4a.75.75 0 0 1 1.034-.238"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.384 6.356c-.46-.29-.843-.505-1.155-.663a2.25 2.25 0 0 1-.321 1.5l-2.5 4a2.25 2.25 0 1 1-3.816-2.385l.349-.558a2.25 2.25 0 0 1-2.185-2.407 12 12 0 0 0-1.121.503C5.818 7.359 4.09 9.297 3.408 11.75H2a.75.75 0 0 0-.75.75v3c0 .245.12.475.32.615l4.68 3.276V22c0 .414.336.75.75.75h2a.75.75 0 0 0 .624-.334l.655-.983c1.886.682 3.978.354 5.407-.052l.69 1.035a.75.75 0 0 0 .624.334h2a.75.75 0 0 0 .75-.75v-2.66c1.593-1.436 3-3.597 3-5.84 0-2.89-1.75-5.677-4.366-7.145M7.5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RenewableEnergy_01;
