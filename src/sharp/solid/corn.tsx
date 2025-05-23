import React from "react";
const Corn: React.FC<
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
        d="M7.483 4.884 8.591 5.98c.69.68 1.576 1.691 2.068 3.15.342 1.017.482 2.214.27 3.623 2.503-1.25 5.77-1.038 8.088 1.252l.713.704-.876.488-.09.05c-1.08.603-2.803 1.561-5.726 4.45-2.65 2.616-6.608 3.401-9.173 1.513l-.899.888-1.057-1.071.887-.876c-1.906-2.544-1.1-6.459 1.544-9.072l.038-.037.043-.032c.365-.27 1.044-.89 1.659-1.724.617-.837 1.123-1.83 1.234-2.853z"
      />
      <path
        fill="currentColor"
        d="M19.069 12.085c.906-1.473 1.783-3.045 2.383-4.486.393-.946.686-1.878.772-2.713.085-.826-.02-1.683-.58-2.33-.677-.782-1.658-.905-2.598-.745-.935.158-1.981.613-3.038 1.205-1.607.899-3.366 2.186-5 3.5A8.6 8.6 0 0 1 12.08 8.65c.209.62.353 1.287.415 2.003 2.186-.423 4.574-.021 6.574 1.432"
      />
    </svg>
  );
};
export default Corn;
