import React from "react";
const Pen_01: React.FC<
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
        d="M17.323 2.76a2.3 2.3 0 0 0-.404 0c-.474.042-.856.259-1.2.53-.325.255-.682.613-1.098 1.028L13.5 5.439l5.06 5.061 1.122-1.122c.415-.415.773-.772 1.028-1.096.271-.346.488-.728.53-1.201a2.3 2.3 0 0 0 0-.404c-.042-.474-.259-.856-.53-1.201-.255-.324-.613-.682-1.028-1.097s-.834-.834-1.158-1.089c-.345-.271-.727-.488-1.201-.53m.177 8.8L12.44 6.5l-7.814 7.813c-.77.769-1.304 1.303-1.59 1.995-.287.691-.287 1.447-.286 2.535V20.5c0 .414.336.75.75.75h1.657c1.088 0 1.844 0 2.535-.285.692-.287 1.226-.822 1.995-1.591z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pen_01;
