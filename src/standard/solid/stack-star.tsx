import React from "react";
const StackStar: React.FC<
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
        d="M7.75 1A2.75 2.75 0 0 0 5 3.75V5H3.75A2.75 2.75 0 0 0 1 7.75v12a2.75 2.75 0 0 0 2.75 2.75h12a2.75 2.75 0 0 0 2.75-2.75V18.5h1.25a2.75 2.75 0 0 0 2.75-2.75v-12A2.75 2.75 0 0 0 19.75 1zm-4 5.5c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-12c0-.69-.56-1.25-1.25-1.25zm4.917 3.132c.462-.843 1.704-.842 2.167 0l.977 1.78 2.145.317c.926.137 1.46 1.303.665 2.043l-1.503 1.4.329 1.939c.086.51-.168.944-.512 1.175-.34.23-.808.296-1.238.093l-1.947-.921-1.947.92c-.43.204-.897.138-1.238-.092a1.18 1.18 0 0 1-.512-1.175l.33-1.94-1.504-1.399c-.795-.74-.261-1.906.665-2.043l2.145-.317z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StackStar;
