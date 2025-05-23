import React from "react";
const MagicWand_04: React.FC<
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
        d="M11.195 9.76c.68-.68 1.783-.68 2.463 0l.582.582c.68.68.68 1.783 0 2.464l-8.314 8.313a2.153 2.153 0 0 1-3.045-3.045l7.527-7.527.744-.744zm-.257 2.378-6.997 6.997a.653.653 0 0 0 .924.924l6.997-6.997z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.018 8.422a.518.518 0 0 0 .964 0l.03-.076a4.14 4.14 0 0 1 2.334-2.334l.076-.03a.518.518 0 0 0 0-.964l-.076-.03a4.14 4.14 0 0 1-2.334-2.334l-.03-.076a.518.518 0 0 0-.964 0l-.03.076a4.14 4.14 0 0 1-2.334 2.334l-.076.03a.518.518 0 0 0 0 .964l.076.03a4.14 4.14 0 0 1 2.334 2.334zM18.018 8.422a.518.518 0 0 0 .964 0l.03-.076a4.14 4.14 0 0 1 2.334-2.334l.076-.03a.518.518 0 0 0 0-.964l-.076-.03a4.14 4.14 0 0 1-2.334-2.334l-.03-.076a.518.518 0 0 0-.964 0l-.03.076a4.14 4.14 0 0 1-2.334 2.334l-.076.03a.518.518 0 0 0 0 .964l.076.03a4.14 4.14 0 0 1 2.334 2.334zM18.018 19.422a.518.518 0 0 0 .964 0l.03-.076a4.14 4.14 0 0 1 2.334-2.334l.076-.03a.518.518 0 0 0 0-.964l-.076-.03a4.14 4.14 0 0 1-2.334-2.334l-.03-.076a.518.518 0 0 0-.964 0l-.03.076a4.14 4.14 0 0 1-2.334 2.334l-.076.03a.518.518 0 0 0 0 .964l.076.03a4.14 4.14 0 0 1 2.334 2.334z"
      />
    </svg>
  );
};
export default MagicWand_04;
