import React from "react";
const RotateRight_04: React.FC<
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
        d="M3 6c.903-1.778 2.24-2.945 4.072-3.632 1.276-.477 2.695-.462 3.99-.04.952.269 2.17 1.049 2.976 2.012M14.504 2v3.003h-2.51M17.576 9.972a1.245 1.245 0 0 0 .472-1.722 1.306 1.306 0 0 0-1.762-.461l-5.957 3.36.634-2.425c.155-.811-.408-1.587-1.244-1.711a1.5 1.5 0 0 0-1.622.923l-2.98 6.154L4 14.72m13.576-4.748-4.468 2.52m4.468-2.52 1.49-.84a1.306 1.306 0 0 1 1.761.461 1.245 1.245 0 0 1-.472 1.722l-1.49.84M8.3 21.996l1.117-.63 1.528.227a3.5 3.5 0 0 0 2.238-.412l6.774-3.821a1.244 1.244 0 0 0 .472-1.721 1.306 1.306 0 0 0-1.762-.461m.2-3.023-4.468 2.52m4.468-2.52a1.306 1.306 0 0 1 1.762.46 1.245 1.245 0 0 1-.473 1.722l-1.489.84m0 0-3.723 2.101"
      />
    </svg>
  );
};
export default RotateRight_04;
