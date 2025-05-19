import React from "react";
const Wudu: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.532 1.25a.75.75 0 0 1 .54.233l2.799 2.946c1.823 1.885 1.855 4.962-.003 6.88a4.686 4.686 0 0 1-6.728.033l-.005-.005c-1.825-1.885-1.858-4.96-.031-6.879l.004-.005 2.882-2.975a.75.75 0 0 1 .542-.228"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.256 15.462A3.4 3.4 0 0 0 11 14.625h-.807l-1.881-1.034a2.75 2.75 0 0 0-1.326-.341H4.5a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.722l6.254 1.769a2.75 2.75 0 0 0 1.978-.187l7.585-3.792a1.627 1.627 0 0 0 .783-2.06 2.75 2.75 0 0 0-3.423-1.587l-2.21.737c.136.272.235.575.235.885a.75.75 0 0 1-.432.68l-3.416 1.599a1.75 1.75 0 0 1-1.106.127l-3.2-.68a.75.75 0 1 1 .312-1.467l3.2.68a.25.25 0 0 0 .158-.019l2.804-1.312-.025-.039a3.8 3.8 0 0 0-.537-.615"
      />
    </svg>
  );
};
export default Wudu;
