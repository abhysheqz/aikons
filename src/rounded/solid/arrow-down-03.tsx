import React from "react";
const ArrowDown_03: React.FC<
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
        d="M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.195 11.407a1 1 0 0 1 1.61 1.186l-.003.004-.007.01-.026.035-.1.133a38 38 0 0 1-1.518 1.88c-.445.513-.945 1.051-1.418 1.47a5.2 5.2 0 0 1-.741.56c-.226.136-.58.315-.991.315-.41 0-.765-.18-.99-.315a5.3 5.3 0 0 1-.742-.56c-.473-.418-.974-.957-1.419-1.47a36 36 0 0 1-1.618-2.012l-.027-.036-.007-.01-.003-.003a1 1 0 0 1 1.61-1.187l.002.002.005.007.023.031a25 25 0 0 0 .43.563c.286.366.676.852 1.095 1.334.214.247.43.486.641.706V4a1 1 0 0 1 2 0v10.05c.21-.22.426-.46.64-.706a34 34 0 0 0 1.524-1.896l.023-.032.005-.007z"
      />
    </svg>
  );
};
export default ArrowDown_03;
