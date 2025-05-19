import React from "react";
const AiIdea: React.FC<
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
        d="M19 9.62c0 2.94-1.65 5.11-4.05 6.38l-.5 3h-6l-.5-3C5.55 14.73 4 12.56 4 9.62 4 5.413 7.358 2 11.5 2a7.4 7.4 0 0 1 1.5.152"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m16.5 2 .258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L20 5.5l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L16.5 9l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L13 5.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M13.5 19v3h-4v-3" />
    </svg>
  );
};
export default AiIdea;
