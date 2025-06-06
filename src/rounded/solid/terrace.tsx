import React from "react";
const Terrace: React.FC<
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
        d="M2.804 12.895a1 1 0 0 1 1.177.784l.84 4.196h1.832c.338 0 .908.012 1.36.394.452.383.557.944.613 1.277l.36 2.165a1 1 0 1 1-1.972.329l-.36-2.165H4.72l-.772 2.316a1 1 0 1 1-1.897-.632l.916-2.748-.948-4.74a1 1 0 0 1 .784-1.176M21.196 12.895a1 1 0 0 0-1.177.784l-.84 4.196h-1.832c-.338 0-.909.012-1.36.394-.453.383-.557.944-.613 1.277l-.36 2.165a1 1 0 0 0 1.972.329l.36-2.165h1.933l.772 2.316a1 1 0 0 0 1.897-.632l-.916-2.748.948-4.74a1 1 0 0 0-.784-1.176"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.874 1.642c.265-.223.654-.517 1.126-.517.473 0 .862.294 1.126.517.296.248.656.608 1.09 1.04l.026.026c1.483 1.482 3.495 2.968 5.476 3.895.407.19.772.421 1.09.744.317.323.557.707.754 1.167.154.358.294.876.076 1.362-.257.576-.832.749-1.33.749H3.692c-.499 0-1.073-.173-1.331-.75-.217-.485-.078-1.003.076-1.361.198-.46.437-.844.755-1.167a3.7 3.7 0 0 1 1.09-.744c1.98-.927 3.993-2.413 5.476-3.895l.026-.026c.433-.432.793-.792 1.09-1.04"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.875a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-2v5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-5H9a1 1 0 1 1 0-2h2v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Terrace;
