/* eslint-disable react/prop-types */
import { useState } from 'react';
import { projects } from '../data/portfolio';

const ProjectVisual = ({ project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full rounded-2xl object-cover object-top"
      />
    );
  }

  return (
    <div className="grid h-56 w-full place-items-center rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_32%),linear-gradient(135deg,rgba(15,23,42,1),rgba(30,41,59,1))] p-6 text-center">
      <div>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-300/10 text-3xl text-cyan-300">
          <i className="bi bi-stars" />
        </span>
        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-cyan-200">{project.category}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <section className="bg-slate-950 px-5 pt-32 pb-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Proyectos</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Casos destacados</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Selección de proyectos y mejoras realizadas en entornos empresariales: desarrollo web, automatización, inteligencia artificial, dashboards y soporte de sistemas.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <ProjectVisual project={project} />
              <div className="p-2 pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">{project.category}</p>
                <h2 className="mt-3 text-2xl font-black text-white">{project.title}</h2>
                <p className="mt-3 font-semibold text-emerald-300">{project.impact}</p>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                >
                  Ver detalles
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">{selectedProject.category}</p>
                <h2 className="mt-2 text-3xl font-black text-white">{selectedProject.title}</h2>
                <p className="mt-3 font-semibold text-emerald-300">{selectedProject.impact}</p>
              </div>
              <button className="rounded-full bg-white/10 px-3 py-2 text-xl text-white hover:bg-white/20" onClick={() => setSelectedProject(null)}>
                ×
              </button>
            </div>

            <p className="mt-5 leading-7 text-slate-300">{selectedProject.description}</p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-black text-white">Características</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <i className="bi bi-check-circle-fill mt-1 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {selectedProject.images.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedProject.images.map((img) => (
                      <button key={img} type="button" onClick={() => setExpandedImage(img)} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        <img src={img} alt={selectedProject.title} className="h-40 w-full object-cover object-top transition hover:scale-105" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid min-h-60 place-items-center rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-8 text-center">
                    <div>
                      <i className="bi bi-image text-4xl text-cyan-300" />
                      <p className="mt-4 text-slate-300"></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedImage && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4" onClick={() => setExpandedImage(null)}>
          <div className="relative max-h-[95vh] max-w-6xl">
            <img src={expandedImage} alt="Captura ampliada" className="max-h-[95vh] w-auto rounded-2xl object-contain" />
            <button className="absolute right-3 top-3 rounded-full bg-black/60 px-4 py-2 text-2xl text-white" onClick={() => setExpandedImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
