import React from "react";
const Maximize_01: React.FC<
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
        strokeWidth={1.5}
        d="M19.898 21.525v-2c1.608-2.93 3.33-6.366.905-8.02-.599-.407-1.582-1.211-3.532-1.64l-.763-.152-.797-.065 1.018-4.988c.28-1.13-.533-2.14-1.64-2.14-.783 0-1.466.527-1.663 1.284l-2.083 9.645-2.468-1.7c-.753-.635-1.831-.6-2.494.165-.483.638-.51 1.408 0 2.076l4.493 5.52v1.99M5.124 6.406 2.5 9.023m-.477-2.512-.017 3.005h3.017m1.861-4.87L9.54 2m-2.541-.474h3.017v2.99"
      />
    </svg>
  );
};
export default Maximize_01;
