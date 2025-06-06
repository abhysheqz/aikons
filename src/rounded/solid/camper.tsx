import React from "react";
const Camper: React.FC<
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
        d="M2.77 12.046C3.11 12 3.521 12 3.945 12H22a1 1 0 0 1 1 1v3a4 4 0 0 1-1.759 3.313.3.3 0 0 1-.49-.202L20.75 19a3.75 3.75 0 1 0-7.493.224c.023.392.034.588-.055.682-.088.094-.26.094-.605.094h-1.194c-.344 0-.517 0-.605-.094-.09-.094-.078-.29-.055-.682a3.75 3.75 0 1 0-7.407.582c.017.072-.042.14-.115.13-.52-.07-1.052-.232-1.489-.668-.436-.437-.598-.97-.668-1.489C1 17.303 1 16.716 1 16.062v-1.116c0-.425 0-.837.046-1.176.051-.384.177-.821.54-1.184s.8-.489 1.183-.54"
      />
      <path
        fill="currentColor"
        d="M19.16 4.142C18.837 4.015 18.445 4 17.123 4H8.097c-1.465 0-2.464.002-3.214.101-.721.096-1.059.265-1.288.49-.227.223-.396.55-.492 1.252C3.002 6.577 3 7.557 3 9v5a1 1 0 1 1-2 0V8.928c0-1.353 0-2.47.12-3.355.128-.931.405-1.752 1.071-2.407.664-.653 1.491-.924 2.43-1.048C5.515 2 6.647 2 8.025 2q4.635.002 9.27 0c1.07-.001 1.87-.002 2.589.277.445.174.857.424 1.215.74.852.753 1.302 1.909 1.778 2.921.073.19.177.52.087.903a1.5 1.5 0 0 1-.513.82c-.3.244-.637.299-.84.32C21.42 8 21.19 8 20.975 8H16a1 1 0 1 1 0-2h4.362c.147 0 .22 0 .25-.048.029-.047-.004-.113-.07-.244-.326-.65-.668-1.289-1.382-1.567"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1M17.072 8.09c-.216-.077-.463-.09-1.434-.09-.525 0-.625 0-.625.2a12 12 0 0 0-.013.766V13a1 1 0 1 1-2 0V8.966c0-.343 0-.654.018-.91.075-1.035.764-1.922 1.818-2.032.28-.03.623-.024.938-.024.768 0 1.383-.001 1.963.203.43.152.83.384 1.183.68.49.412.86.984 1.387 1.775l2.525 3.787a1 1 0 0 1-1.664 1.11l-2.525-3.787c-.598-.898-.791-1.17-1.009-1.352a1.8 1.8 0 0 0-.562-.327"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
    </svg>
  );
};
export default Camper;
