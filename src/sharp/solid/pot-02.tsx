import React from "react";
const Pot_02: React.FC<
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
        d="m3.357 11.75.893 9.818a.75.75 0 0 0 .747.682h14a.75.75 0 0 0 .747-.682l.892-9.818h1.36v-2h-20v2zM13.314 1.765a1.01 1.01 0 0 1 1.053.502l1.192 2.147 6.35-1.086.341 1.975L2.092 8.75 1.75 6.775 8.09 5.69l.366-2.4c.066-.427.398-.764.826-.837z"
      />
    </svg>
  );
};
export default Pot_02;
