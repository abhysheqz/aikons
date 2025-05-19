import React from "react";
const Waste: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m20.423 6.241-.498 7.84c-.02.302-.356.478-.632.354a5 5 0 0 0-6.581 6.667c.134.289-.063.648-.382.648H8.13a2.75 2.75 0 0 1-2.745-2.578L4.576 6.246 4.35 4.652h16.226z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 19.249a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11.21 1.912a2 2 0 0 1 1.484-.661h5.282a2 2 0 0 1 1.936 1.498l.386 1.491.963.01a1 1 0 0 1-.014 2H3.253a1 1 0 0 1-.006-2l5.869-.017zm.6 2.43h6.42l-.2-.86a.3.3 0 0 0-.292-.231h-4.9a.3.3 0 0 0-.233.111z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Waste;
