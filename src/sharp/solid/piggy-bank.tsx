import React from "react";
const PiggyBank: React.FC<
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
        d="M3.417 10.75C4.71 6.217 8.78 4.25 13 4.25c5.25 0 9.75 3.571 9.75 8.25 0 2.244-1.407 4.405-3 5.841v3.409h-3.151l-.937-1.405c-1.625.318-3.699.318-5.324 0l-.937 1.405H6.25v-3.36l-4.68-3.276a.75.75 0 0 1-.32-.614v-3a.75.75 0 0 1 .75-.75zm6.74-3.417a5.1 5.1 0 0 1 2.342-.583c.826 0 1.614.208 2.343.583l-.686 1.334A3.6 3.6 0 0 0 12.5 8.25c-.567 0-1.122.142-1.657.417zM8.508 10H6.5v2h2.009z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 6.08c0 .966-.393 1.649-.707 1.963l1.414 1.414c.686-.686 1.293-1.877 1.293-3.376 0-2.17-1.846-3.831-4-3.831-.459 0-.902.074-1.316.212l.632 1.898c.212-.07.442-.11.684-.11 1.16 0 2 .874 2 1.83"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PiggyBank;
