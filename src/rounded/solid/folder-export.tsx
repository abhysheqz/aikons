import React from "react";
const FolderExport: React.FC<
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
        d="M18.033 13.897a1 1 0 0 1 1.414-.02l1.677 1.36c.35.296.717.631 1.004.968.144.169.288.362.4.571.107.201.222.485.222.818s-.115.616-.222.817c-.112.21-.256.403-.4.571a9 9 0 0 1-1.004.969l-1.677 1.36a1 1 0 1 1-1.394-1.434l1.575-1.283H13.75a1 1 0 0 1 0-2h5.878l-1.575-1.283a1 1 0 0 1-.02-1.414"
      />
      <path
        fill="currentColor"
        d="M9.463 2.489c-.64-.24-1.351-.24-2.38-.239-.88 0-1.761 0-2.333.05-.59.053-1.106.162-1.577.425a3.75 3.75 0 0 0-1.448 1.448c-.263.471-.373.987-.425 1.577-.05.572-.05 1.28-.05 2.16v3.147c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h1.35c1.39 0 2.537 0 3.493-.058a2.26 2.26 0 0 1-.158-1.848H13.75a2.25 2.25 0 1 1 0-4.5h2.878a2.25 2.25 0 0 1 3.642-2.41l1.641 1.332.021.017c.25.212.53.46.794.728.024-.786.024-1.685.024-2.719 0-1.019 0-1.923-.067-2.582-.07-.681-.216-1.271-.565-1.793a3.8 3.8 0 0 0-1.035-1.035c-.522-.349-1.112-.496-1.792-.565-.66-.067-1.482-.067-2.5-.067h-3.555c-.316 0-.497 0-.63-.015a.26.26 0 0 1-.193-.12 21 21 0 0 1-.47-.909c-.473-.955-1.085-2.194-2.48-2.717"
      />
    </svg>
  );
};
export default FolderExport;
