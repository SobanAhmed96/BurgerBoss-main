const About = () => {
  return (
    <div className="px-4 py-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
        About BurgerBoss
      </h1>
      <p className="text-sm text-gray-300 mb-3 text-center">
        BurgerBoss is a dummy burger brand used for this demo app.
      </p>
      <p className="text-sm text-gray-300 mb-3 text-center">
        Imagine juicy burgers, fresh ingredients, and super-fast delivery — all
        packed into a simple mobile-first experience.
      </p>
      <p className="text-sm text-gray-300 text-center">
        You can later replace this text with real story, mission, and team
        details for your own brand.
      </p>
      <p className="text-[11px] text-gray-500 text-center mt-4">
        © {new Date().getFullYear()} BurgerBoss
      </p>
    </div>
  );
};

export default About;


