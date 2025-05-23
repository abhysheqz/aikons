import React from "react";
const StarOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.996 1.25c1.05 0 1.876.792 2.403 1.862l1.763 3.553c.053.11.18.265.37.407s.377.22.5.24l3.189.534c1.152.194 2.118.758 2.431 1.742.313.982-.146 2.004-.974 2.834h-.001l-2.478 2.499-.178.178c-.15.125-.235.125-.384 0-.011-.008-.038-.035-.091-.088l-9.63-9.63c-.147-.147-.22-.221-.236-.316-.016-.096.03-.189.123-.375l.783-1.58c.533-1.069 1.362-1.86 2.41-1.86M6.961 7.312h.001l.181-.03c.095-.004.124.005.2.064.014.011.032.03.069.066l12.133 12.134c.072.071.108.107.13.154a.6.6 0 0 1 .037.188c.102 1.016-.104 1.949-.835 2.486-.91.67-2.154.373-3.284-.3l-2.99-1.785c-.126-.075-.342-.136-.602-.136-.258 0-.478.06-.612.138l-.002.001-2.984 1.781c-1.129.676-2.371.967-3.282.297-.907-.667-1.009-1.94-.714-3.225l.709-3.09v-.002a1.3 1.3 0 0 0-.043-.604 1.3 1.3 0 0 0-.277-.528l-2.48-2.5c-.823-.83-1.28-1.85-.97-2.832.312-.984 1.275-1.55 2.428-1.743z"
      />
    </svg>
  );
};
export default StarOff;
