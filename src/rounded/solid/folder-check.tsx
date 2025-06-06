import React from "react";
const FolderCheck: React.FC<
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
        d="M22.693 14.416a1 1 0 0 1-.61 1.277c-.533.189-1.15.596-1.802 1.168-.643.564-1.268 1.24-1.822 1.905a28 28 0 0 0-1.865 2.52 1 1 0 0 1-1.739-.089c-.44-.881-.836-1.232-1.035-1.365a.7.7 0 0 0-.164-.086 1 1 0 0 1 .094-1.996c.478 0 .905.235 1.18.418s.562.436.85.782c.316-.431.704-.939 1.143-1.465.594-.712 1.292-1.472 2.039-2.127.736-.646 1.576-1.24 2.454-1.55a1 1 0 0 1 1.276.608"
      />
      <path
        fill="currentColor"
        d="M9.462 2.489c-.638-.24-1.35-.24-2.38-.24-.878 0-1.76 0-2.332.051-.59.052-1.106.162-1.578.425a3.75 3.75 0 0 0-1.447 1.448c-.263.47-.373.987-.425 1.577-.05.572-.05 1.28-.05 2.16v3.147c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h1.791c-.245-.488-.443-.722-.542-.82a2.25 2.25 0 0 1 .558-4.43c.847 0 1.526.399 1.858.619q.172-.215.355-.435c.618-.74 1.363-1.554 2.175-2.266.789-.692 1.767-1.401 2.86-1.788a2.24 2.24 0 0 1 1.752.105v-.443c0-1.019 0-1.923-.067-2.583-.07-.68-.216-1.27-.565-1.792a3.8 3.8 0 0 0-1.035-1.035c-.522-.349-1.112-.496-1.793-.565-.659-.067-1.48-.067-2.5-.067h-3.554c-.316 0-.497-.001-.63-.015a.26.26 0 0 1-.193-.12 21 21 0 0 1-.47-.909c-.473-.955-1.085-2.194-2.48-2.717"
      />
    </svg>
  );
};
export default FolderCheck;
