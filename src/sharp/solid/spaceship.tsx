import React from "react";
const Spaceship: React.FC<
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
        d="M12 2.25a6.87 6.87 0 0 0-5.305 2.48c-1.47.398-2.762.97-3.717 1.697-.985.749-1.728 1.758-1.728 2.982 0 1.817 1.6 3.15 3.435 3.972 1.922.861 4.51 1.369 7.315 1.369s5.393-.508 7.315-1.37c1.835-.822 3.435-2.154 3.435-3.971 0-1.224-.743-2.233-1.727-2.982-.956-.726-2.248-1.299-3.718-1.697A6.87 6.87 0 0 0 12 2.25m0 6.73c-1.81 0-3.474-.25-4.84-.669.331-2.338 2.372-4.138 4.84-4.138s4.508 1.8 4.839 4.138c-1.366.418-3.03.67-4.84.67M5.072 21.008l2-5 1.857.742-2 5zm12 .742-2-5 1.857-.742 2 5zm-6.071-.371v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spaceship;
