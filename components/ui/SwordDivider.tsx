export function SwordDivider() {
  return (
    <div className="mx-auto my-14 flex w-full max-w-4xl items-center justify-center px-8">
      <svg viewBox="0 0 1200 70" className="h-8 w-full">
        <defs>
          <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6f7283" />
            <stop offset="50%" stopColor="#dbdeea" />
            <stop offset="100%" stopColor="#6f7283" />
          </linearGradient>
        </defs>
        <line x1="30" y1="35" x2="1170" y2="35" stroke="url(#swordGradient)" strokeWidth="2" />
        <polygon points="25,35 45,28 45,42" fill="#d9a441" />
        <polygon points="1175,35 1155,28 1155,42" fill="#d9a441" />
      </svg>
    </div>
  );
}
