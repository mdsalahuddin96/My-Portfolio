'use client'
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({p}) => {
  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="p-5 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
        {/* <div className="absolute inset-0 flex items-end justify-start p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex gap-2">
            <a
              href={p.live}
              target="_blank"
              className="px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1.5"
            >
              <ExternalLink size={12} /> Live
            </a>
            <a
              href={p.code}
              target="_blank"
              className="px-3 py-1.5 rounded-full bg-gradient-primary text-xs font-medium inline-flex items-center gap-1.5"
            >
              <BsGithub size={12} /> Code
            </a>
          </div>
        </div> */}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{p.title}</h3>
          <span className="text-[10px] text-mono text-primary px-2 py-0.5 rounded-full bg-primary/10">
            {p.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] text-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
