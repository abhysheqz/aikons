import React from "react";
const CongruentToSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm3.381 8.224c.334-.622.86-.923 1.45-.971.615-.05 1.355.177 2.011.751q.037.033.076.06c.997.84 2.225 1.27 3.413 1.174 1.243-.1 2.384-.778 3.05-2.019a1 1 0 1 0-1.762-.946c-.334.623-.86.924-1.45.971-.614.05-1.354-.177-2.01-.75a1 1 0 0 0-.077-.061c-.997-.84-2.224-1.27-3.412-1.174-1.244.1-2.385.778-3.051 2.02a1 1 0 1 0 1.762.945m-.88 1.527a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3.5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CongruentToSquare;
