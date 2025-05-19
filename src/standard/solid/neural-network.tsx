import React from "react";
const NeuralNetwork: React.FC<
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
        d="M12 1.75a2.25 2.25 0 0 0-2.25 2.293l-3.186 1.64A2.75 2.75 0 1 0 4.48 10.25l2.587 6.9a2.75 2.75 0 1 0 4.12 1.77l3.762-2.82a.75.75 0 0 0-.9-1.2l-3.578 2.683a2.74 2.74 0 0 0-1.952-.834L5.932 9.848A2.75 2.75 0 0 0 7.21 7.036l3.073-1.581c.222.262.503.472.822.61l-.727 3.272a2.251 2.251 0 1 0 2.723 2.968l2.692.231a3.25 3.25 0 1 0 1.889-3.508l-3.521-4.402A2.252 2.252 0 0 0 12 1.75m1.241 4.127a2.2 2.2 0 0 1-.62.286l-.727 3.272a2.26 2.26 0 0 1 1.246 1.367l2.754.237c.126-.407.33-.78.595-1.102z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NeuralNetwork;
