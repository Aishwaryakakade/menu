import type React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h3 className="text-4xl font-bold text-myteal mb-4 text-center">
        🍸 About Us
      </h3>

      <p className="text-lg mb-6 leading-relaxed text-center">
        Welcome to <strong>Salford & Co.</strong> – the ultimate party sidekick!
        Whether you're throwing a house party, mixing up drinks on a lazy
        weekend, or just experimenting with new flavors, we’ve got your back.
        Powered by the whimsical Cocktails DB API, we bring you an
        ever-refreshing list of drink recipes to keep your spirits high
        (literally and figuratively).
      </p>

      {/* Why Choose Us */}
      <section className="bg-gray-100 p-6 rounded-xl mb-6 shadow-sm">
        <h4 className="text-2xl font-semibold text-myteal mb-4">
          🍹 Why Choose Salford & Co.?
        </h4>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Over 500+ unique cocktail and mocktail recipes</li>
          <li>Quick and fun-to-read drink descriptions</li>
          <li>Filters to help you find drinks by ingredients, type, or mood</li>
          <li>Completely free and open to all drink-lovers</li>
        </ul>
      </section>

      {/* Fun Facts */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold text-myteal mb-3">
          ✨ Fun Facts
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-myteal">
            🧊 The Margarita is one of the most searched cocktails on our
            platform!
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-myteal">
            🍒 Mocktails are gaining popularity among our younger users!
          </div>
        </div>
      </section>

      {/* Meet the Mix */}
      <section className="bg-myteal text-[myteal] p-6 rounded-xl mb-8 text-center">
        <h4 className="text-2xl font-semibold mb-2">🎉 Meet the Mix</h4>
        <p className="text-lg">
          Every week, we spotlight a cocktail or mocktail of the week. Want your
          drink featured? Submit your own!
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-myteal text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-opacity-90 transition"
        >
          Explore Cocktails 🍸
        </Link>
      </div>
    </div>
  );
};

export default About;
