// Lightweight scroll background - static gradient only
export const ScrollBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-20"
      style={{ 
        background: "linear-gradient(180deg, hsl(45, 30%, 98%) 0%, hsl(158, 15%, 96%) 50%, hsl(45, 25%, 97%) 100%)" 
      }}
    />
  );
};
