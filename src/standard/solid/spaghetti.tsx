import React from "react";
const Spaghetti: React.FC<
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
        d="M1 13a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1c0 1.462-.81 3.023-2.211 3.724l-2.104 1.052-1.556 2.333a2 2 0 0 1-1.664.891h-6.93a2 2 0 0 1-1.664-.89l-1.556-2.334-2.104-1.052C1.811 16.024 1 14.462 1 13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8a5 5 0 0 0-5 5 1 1 0 1 1-2 0 7 7 0 0 1 14 0 1 1 0 1 1-2 0 5 5 0 0 0-5-5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 11.5A1.5 1.5 0 0 0 7.5 13a1 1 0 1 1-2 0 3.5 3.5 0 1 1 7 0v2.5a1 1 0 1 1-2 0V13A1.5 1.5 0 0 0 9 11.5M16.03 9c-.738 0-1.427.202-2.018.555a1 1 0 1 1-1.024-1.718A5.9 5.9 0 0 1 16.03 7C19.333 7 22 9.692 22 13a1 1 0 0 1-2 0c0-2.215-1.783-4-3.97-4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.032 5.06c-1.444-.303-2.772.55-3.06 1.732a1 1 0 1 1-1.943-.475c.573-2.35 3.039-3.712 5.412-3.216 2.393.5 4.024 2.754 3.443 5.135a1 1 0 1 1-1.943-.474c.28-1.15-.484-2.405-1.909-2.703"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spaghetti;
