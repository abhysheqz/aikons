import React from "react";
const ElearningExchange: React.FC<
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
        d="M11.665 6.33a.75.75 0 0 1 .67 0l6 3a.75.75 0 0 1 .415.67v3.5h-1.5v-2.287l-1 .5v3.722l-3.878 2.216a.75.75 0 0 1-.745 0L7.75 15.429v-3.716l-2.085-1.042a.75.75 0 0 1 0-1.342zm.67 7.34 2.415-1.207v2.102L12 16.135 9.25 14.56v-2.097l2.415 1.208a.75.75 0 0 0 .67 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.18 4.231A8.85 8.85 0 0 0 5.793 5.785a8.77 8.77 0 0 0-1.598 10.269l-1.732.905a10.72 10.72 0 0 1 1.95-12.558C8.364.463 14.613.214 18.84 3.664a.977.977 0 0 1-.233 1.656l-2.422 1.035-.768-1.798zm2.027 13.984a8.77 8.77 0 0 0 1.598-10.269l1.732-.906a10.72 10.72 0 0 1-1.95 12.559c-3.952 3.937-10.2 4.187-14.428.737a.977.977 0 0 1 .235-1.656l2.418-1.032.768 1.797-.759.324a8.85 8.85 0 0 0 10.386-1.554"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElearningExchange;
