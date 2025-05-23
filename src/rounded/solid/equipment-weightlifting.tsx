import React from "react";
const EquipmentWeightlifting: React.FC<
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
        d="M10.495 7.25h3.01c.255 0 .643 0 1.004.112.436.136.835.433 1.054.973.14.347.187.792.187 1.165s-.046.818-.187 1.165c-.22.54-.618.837-1.054.973-.36.113-.75.112-1.004.112h-3.01c-.255 0-.643 0-1.004-.112a1.63 1.63 0 0 1-1.054-.973c-.14-.347-.187-.792-.187-1.165s.046-.818.187-1.165c.22-.54.618-.837 1.054-.973.36-.113.75-.112 1.004-.112"
      />
      <path
        fill="currentColor"
        d="M10.495 10.25h3.01c.255 0 .643 0 1.004.112.436.136.835.434 1.054.973.14.347.187.792.187 1.165s-.046.818-.187 1.165c-.22.54-.618.837-1.054.973-.36.113-.75.112-1.004.112h-3.01c-.255 0-.643 0-1.004-.112a1.63 1.63 0 0 1-1.054-.973c-.14-.347-.187-.792-.187-1.165s.046-.818.187-1.165c.22-.54.618-.837 1.054-.973.36-.113.75-.112 1.004-.112"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.419 16.5H9.557c-.11 0-.206 0-.297.006a3 3 0 0 0-2.602 1.875c-.037.091-.069.189-.107.303a1 1 0 0 0 1.897.632 4 4 0 0 1 .065-.189 1 1 0 0 1 .868-.625c.023-.002.053-.002.2-.002h4.838c.146 0 .177 0 .2.002a1 1 0 0 1 .867.625c.009.021.019.05.065.19a1 1 0 0 0 1.897-.633c-.038-.114-.07-.212-.106-.303a3 3 0 0 0-2.602-1.875c-.098-.006-.201-.006-.321-.006"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16.5a1 1 0 0 0-1 1V21H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-6v-3.5a1 1 0 0 0-1-1M8.57 4h6.860000000000001c1.171-.001 2.062-.002 2.862.366s1.378 1.044 2.14 1.935l.123.143L21.76 7.85a1 1 0 0 1-1.518 1.302l-1.204-1.405c-.944-1.1-1.23-1.401-1.581-1.563S16.69 6 15.24 6H8.76c-1.45 0-1.865.021-2.216.183s-.637.463-1.58 1.563L3.758 9.151a1 1 0 1 1-1.518-1.302l1.204-1.405.123-.143c.762-.89 1.34-1.567 2.14-1.935S7.398 3.999 8.571 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentWeightlifting;
