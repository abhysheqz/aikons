import React from "react";
const Touch_07: React.FC<
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
        d="M5.377 12.112a1.563 1.563 0 0 0-2.279.187 1.61 1.61 0 0 0-.03 1.96l.012.016L7.407 21.3a2 2 0 0 0 1.703.95h9.132c1.661 0 3.008-1.32 3.008-2.951v-7.241c0-.708-.584-1.281-1.305-1.281h-1.409v2.411a.397.397 0 0 1-.794 0v-2.244q-.001-.226-.074-.427a1.3 1.3 0 0 0-1.231-.854h-1.409v2.91a.397.397 0 1 1-.794 0V9.83q-.001-.226-.074-.427a1.305 1.305 0 0 0-1.231-.854H11.52v2.91a.397.397 0 1 1-.794 0V3.194a1.442 1.442 0 0 0-2.879-.12v10.541a.45.45 0 0 1-.778.307z"
      />
    </svg>
  );
};
export default Touch_07;
