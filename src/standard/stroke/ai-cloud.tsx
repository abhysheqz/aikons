import React from "react";
const AiCloud: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 9h.022a4.5 4.5 0 0 1 2.064 8.5M17.478 9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 9a5.48 5.48 0 0 1-1.235 3M6.52 8.023A5 5 0 0 0 4.818 17.5M6.52 8.023Q6.757 8 7 8c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 14 .258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841l.697.258-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L12 21l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L8.5 17.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
    </svg>
  );
};
export default AiCloud;
