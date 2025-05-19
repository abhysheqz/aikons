import React from "react";
const FavouriteCircle: React.FC<
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
        d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m2.5 6c-.836 0-1.623.27-2.5 1.033-.877-.763-1.664-1.033-2.5-1.033-1.94 0-3.25 1.65-3.25 3.5 0 .967.39 1.885.9 2.679.514.8 1.185 1.531 1.835 2.144a20 20 0 0 0 1.788 1.487c.243.179.825.573.825.573l.094.052a.75.75 0 0 0 .711-.052l.005-.003c.149-.1.578-.393.819-.57.485-.358 1.135-.871 1.788-1.487.65-.613 1.321-1.345 1.835-2.144.51-.794.9-1.712.9-2.679 0-1.85-1.31-3.5-3.25-3.5"
      />
    </svg>
  );
};
export default FavouriteCircle;
