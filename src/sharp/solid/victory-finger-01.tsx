import React from "react";
const VictoryFinger_01: React.FC<
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
        d="M5.5 4.179a2.484 2.484 0 0 1 4.88-.932l.003.012 1.117 4.63 1.12-4.642a2.484 2.484 0 0 1 4.88.932v.004L15.862 9.51c1.13.354 2.396.878 3.46 1.916.966.942 1.025 2.326.848 3.471-.182 1.18-.647 2.348-1.031 3.125l-1.064 2.154v2.575H7.25v-1.966l-.696-.787c-.583-.608-1.267-1.386-1.81-2.23-.532-.83-.984-1.809-.989-2.808a3.7 3.7 0 0 1 .07-.933c.11-.548.37-1.017.728-1.497.344-.463.817-.986 1.4-1.63l.046-.05 1.151-1.08z"
      />
    </svg>
  );
};
export default VictoryFinger_01;
