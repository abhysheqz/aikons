import React from "react";
const TwitterSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.399 7.5A2.74 2.74 0 0 1 14.63 6.5c.693 0 1.326.26 1.807.688l1.697-.255c.251-.038.444.209.333.427l-1.11 2.191C17.2 13.968 13.593 17.5 9.166 17.5a8.1 8.1 0 0 1-3.558-.816c-.177-.086-.125-.338.07-.37 1.065-.176 2.464-.572 2.464-1.24C6.664 13.58 5.75 11.179 5.75 8.906c0-.65.075-1.284.216-1.892.04-.17.271-.203.374-.06 1.183 1.647 3.079 2.984 5.216 2.984q.214 0 .424-.014a2.8 2.8 0 0 1-.082-.674"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TwitterSquare;
