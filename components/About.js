import Project from "./Projects";

export default function About() {
  return (
    <div className="bg-gray-50 p-5 ">
      <div className="flex flex-wrap items-center justify-evenly pt-10 pb-20">
        <div className="h-full">
          <h2 className="text-2xl blue font-semibold pb-3">Projects</h2>
          <Project />
        </div>
      </div>
    </div>
  );
}
