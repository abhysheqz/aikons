import React from "react";
const LicenseMaintenance: React.FC<
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
        d="M20.25 1.25H1.75v21.5h10.354l-2.323-3.786 1.685-1.035a5.6 5.6 0 0 1 0-1.358l-1.685-1.035 2.354-3.835 1.64 1.006q.4-.281.85-.49V10.5h5.624zm-14 4h9.5v1.5h-9.5zm0 4h6v1.5h-6zm11.625 3.849V11.75h-2v1.349c-.768.19-1.45.595-1.986 1.146l-1.343-.825-1.046 1.705 1.369.84a4.33 4.33 0 0 0 0 2.57l-1.37.84 1.046 1.705 1.344-.825a4.17 4.17 0 0 0 1.986 1.146v1.349h2v-1.349a4.17 4.17 0 0 0 1.985-1.146l1.344.825 1.046-1.705-1.37-.84a4.34 4.34 0 0 0 0-2.57l1.37-.84-1.047-1.705-1.343.825a4.17 4.17 0 0 0-1.985-1.146m-3.2 4.151c0-1.277 1.006-2.273 2.2-2.273s2.2.996 2.2 2.273c0 1.276-1.006 2.273-2.2 2.273s-2.2-.997-2.2-2.273"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicenseMaintenance;
