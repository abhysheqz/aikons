import React from "react";
const Minimize_03: React.FC<
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
        d="M10.53 1.47a.75.75 0 0 1 0 1.06L9.31 3.75l.72.72a.75.75 0 0 1-.53 1.28H7.001a.75.75 0 0 1-.75-.75L6.25 2.5a.75.75 0 0 1 1.28-.53l.72.72 1.22-1.22a.75.75 0 0 1 1.06 0M1.807 6.713A.75.75 0 0 1 2.5 6.25H5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.28.53l-.721-.72-1.218 1.22a.75.75 0 1 1-1.062-1.06L2.69 8.25l-.72-.719a.75.75 0 0 1-.162-.817"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.821 18.289 6.254 10.5a1.48 1.48 0 0 1 2.798-.963l.92 2.567a.45.45 0 0 0 .843-.059l2.91-9.986a1.168 1.168 0 1 1 2.242.66l-2.1 7.09a.45.45 0 1 0 .863.256l.71-2.397c.16-.006.347.013.446.027s.212.05.212.05c.609.168 1.103.544 1.433 1.03l-.819 2.874a.45.45 0 1 0 .866.246l.734-2.58.169.046c.762.21 1.344.745 1.65 1.414l.075.19-.659 2.298a.45.45 0 1 0 .866.248l.702-2.45c1.217.474 1.888 1.815 1.552 3.1l-.957 3.669a4.46 4.46 0 0 1-1.623 2.436l-1.1.832-.285 1.091a.75.75 0 0 1-.925.534l-8.722-2.4a.75.75 0 0 1-.527-.913z"
      />
    </svg>
  );
};
export default Minimize_03;
