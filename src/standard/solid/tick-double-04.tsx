import React from "react";
const TickDouble_04: React.FC<
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
        d="M19.484 4.409c1.277-.493 2.665.196 3.12 1.47.224.629.19 1.227-.098 1.771-.265.5-.712.889-1.179 1.213q-.24.166-.489.333c-.61.41-1.262.847-1.963 1.516-.89.85-1.77 1.886-2.561 2.92a38 38 0 0 0-2.657 3.911 2.4 2.4 0 0 1-2.105 1.207 2.41 2.41 0 0 1-2.073-1.262c-.713-1.298-1.225-1.739-1.376-1.849-.142-.103-.29-.188-.473-.293l-.013-.007a4.4 4.4 0 0 1-.591-.384 2 2 0 0 1-.564-.698 2.3 2.3 0 0 1-.212-1.024c0-1.343 1.055-2.483 2.417-2.483h.03c.857.035 1.601.4 2.2.836q.268.195.541.442c.327-.464.689-.96 1.077-1.468.882-1.15 1.932-2.4 3.069-3.485 1.109-1.06 2.442-2.103 3.9-2.666"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.934 4.644a1 1 0 0 1-.577 1.29c-1.17.447-2.33 1.319-3.393 2.323-.366.345-.725.712-1.075 1.091A1 1 0 0 1 9.42 7.99c.376-.407.768-.806 1.17-1.187 1.14-1.077 2.526-2.154 4.053-2.737a1 1 0 0 1 1.291.578M1 13.194c0-1.491 1.182-2.748 2.699-2.748h.04l.14.006.037.002q.118.009.251.03.269.04.584.141a1 1 0 1 1-.622 1.901 2 2 0 0 0-.271-.066l.155-.988-.155.988-.08-.01-.094-.004c-.354.008-.684.314-.684.748 0 .395.279.689.594.74a1 1 0 0 1 .308.102q.108.055.257.16l-.585.812.585-.812c.423.305 1.1.976 1.912 2.438.13.233.359.363.592.366a.7.7 0 0 0 .226-.037 1 1 0 1 1 .664 1.887c-.29.102-.6.154-.916.15a2.69 2.69 0 0 1-2.314-1.395c-.638-1.147-1.104-1.6-1.282-1.746-1.19-.303-2.04-1.397-2.04-2.665"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_04;
