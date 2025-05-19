import React from "react";
const PieChart: React.FC<
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
        d="M21.748 11.074c-.042-2.339-.914-4.668-2.7-6.437s-4.084-2.609-6.378-2.635c-.415-.005-.623-.008-.771.14-.149.146-.149.368-.149.813v8.046c0 .471 0 .707.146.853.147.147.383.147.854.147h8.044c.448 0 .672 0 .819-.15s.143-.359.135-.777"
      />
      <path
        fill="currentColor"
        d="M10.282 11.75c.04.302.155.767.554 1.165.398.399.863.514 1.165.554.24.033.512.032.704.032h8.133c.146 0 .35 0 .55-.018-.714 4.682-4.757 8.268-9.638 8.268-5.385 0-9.75-4.365-9.75-9.75 0-4.88 3.586-8.924 8.268-9.638-.019.2-.018.404-.018.55v8.133c0 .192 0 .464.032.704"
      />
    </svg>
  );
};
export default PieChart;
