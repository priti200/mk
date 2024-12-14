const CourseSection = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-blue-600">Who</span> can join?
        <img src="/svg/Vector 1.svg" alt="" className="mt-2" />
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Our courses are great for everyone, whether you're just starting out
          in trading or already have some experience. Join us to learn and
          enhance your trading abilities across different subjects in a way
          that's easy to understand and follow.
        </p>

        <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors whitespace-nowrap">
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default CourseSection;
