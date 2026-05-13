import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <section className="min-h-screen py-28 px-4">
      <div className="mb-5 sticky top-2 z-50">
        <Link
          href="/#projects"
          className="
  inline-flex items-center gap-2
  px-5 py-2.5 rounded-full
  glass hover:scale-105
  transition-all duration-300
  text-sm font-medium
  "
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Image */}
        <div className="gradient-card p-4 mb-10">
          <Image
            src={project.img}
            alt={project.title}
            className="rounded-2xl w-full"
          />
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-muted text-lg leading-relaxed">{project.desc}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href={project.live}
            target="_blank"
            className="px-3 py-1.5 rounded-full bg-gradient-primary  inline-flex items-center gap-2"
          >
            <ExternalLink size={18} />
            Live Project
          </Link>

          <Link
            href={project.code}
            target="_blank"
            className="btn-outline-gradient inline-flex items-center gap-2"
          >
            <BsGithub size={18} />
            GitHub Repo
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="gradient-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-5">Main Technology Stack</h2>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="gradient-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-5">Challenges Faced</h2>

          <ul className="space-y-3 text-muted">
            {project.challenges.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Future Improvements */}
        <div className="gradient-card p-8">
          <h2 className="text-2xl font-bold mb-5">Future Improvements</h2>

          <ul className="space-y-3 text-muted">
            {project.future.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
