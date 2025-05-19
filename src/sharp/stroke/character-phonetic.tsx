import React from "react";
const CharacterPhonetic: React.FC<
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
        d="M2.056 8.98c0-1.025.464-3.533 3.583-4.314 2.616-.655 4.544.768 5.287 1.765q.18.24.345.49c.42.629.923 1.855.721 4.215m0 0c.109 4.199-.278 4.802-.904 5.75-.846 1.283-3.103 3.451-6.488 2.24-1.403-.676-3.796-2.866-1.896-6.062.27-.492 1.18-1.45 2.589-1.828.307-.083.626-.1.944-.1z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.066 10.938h9.928c.068-3.114-.53-4.784-3.25-6.086-.975-.472-3.179-.591-4.985.891-1.824 1.495-1.871 3.999-1.765 5.706.04.635.013 1.27-.012 1.906v.01c-.083 2.032.436 4.778 3.293 5.79 3.375 1.197 5.663-1.014 6.224-2.158.213-.437.476-1.192.476-1.977"
      />
    </svg>
  );
};
export default CharacterPhonetic;
