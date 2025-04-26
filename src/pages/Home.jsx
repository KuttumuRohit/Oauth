const Home = () => {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">

    <div className="max-w-lg text-center md:text-left">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        Swap Skills. <span className="text-blue-600">Link. Learn. Level Up</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        SkillSwap connects learners and teachers across the globe.
        Learn new skills or share your expertise — for free!
      </p>
      <a href="/signup" className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 text-lg">
        Get Started
      </a>
    </div>

    <div className="mb-12 md:mb-0 md:ml-12">
      <img src="assets/hero.jpg" alt="Skill Exchange" className="w-full max-w-md mx-auto" />
    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Why SkillSwap?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        <a href="path">
        <div className="p-6 rounded-xl border hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Teach Skills</h3>
          <p>Empower others by sharing what you know best — from coding to cooking!</p>
        </div>
        </a>


        <div className="p-6 rounded-xl border hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Learn Skills</h3>
          <p>Pick up new abilities directly from real-world experts and mentors.</p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Connect Globally</h3>
          <p>Join a worldwide community passionate about personal growth and learning.</p>
        </div>

      </div>
    </div>
  </section>

  <section className="bg-blue-600 py-16">
    <div className="text-center text-white max-w-2xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">Ready to Swap Your Skills?</h2>
      <a href="/signup" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
        Join SkillSwap Today
      </a>
    </div>
  </section>
        </>
    )
}

export default Home