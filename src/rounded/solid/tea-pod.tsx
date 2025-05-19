import React from "react";
const TeaPod: React.FC<
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
        d="M9 6.75a5.5 5.5 0 1 1 11 0v3.5a1 1 0 1 1-2 0v-3.5a3.5 3.5 0 1 0-7 0v3.5a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 6.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.485 8.552c.41-.278.92-.37 1.402-.252.271.067.523.222.764.37l3.482 2.135s.173-.13.261-.199c1.645-1.272 3.885-1.65 5.998-1.65 1.74 0 3.55.256 5.048 1.044 1.532.804 2.706 2.15 3.134 4.21.151.726.18 1.462.175 2.161-.002.329-.033 1.739-.043 2.055 0 .518 0 1.186-.193 1.79-.218.68-.677 1.277-1.526 1.613-1.63.646-4.192.928-6.65.92-2.456-.006-4.982-.302-6.541-.92-.85-.336-1.308-.933-1.526-1.613-.194-.604-.193-1.272-.193-1.79 0-.25-.009-.549-.019-.82a1.3 1.3 0 0 0-.297-.8l-3.936-4.864c-.167-.204-.34-.417-.44-.66a1.78 1.78 0 0 1-.008-1.342c.097-.244.355-.57.518-.776.176-.223.358-.456.59-.612"
      />
    </svg>
  );
};
export default TeaPod;
