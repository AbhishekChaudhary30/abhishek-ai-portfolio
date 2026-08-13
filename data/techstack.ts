export interface TechCategory {
  category: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "AI / ML",
    technologies: ["Python", "PyTorch", "scikit-learn", "Transformers", "OpenCV"]
  },
  {
    category: "LLM / RAG",
    technologies: ["LLM Engineering", "Embeddings", "Vector Search", "Reranking", "RAG", "Structured Output"]
  },
  {
    category: "Agentic AI",
    technologies: ["LangGraph", "Tool Calling", "Memory", "Planning", "Multi-Agent Systems"]
  },
  {
    category: "Backend",
    technologies: ["FastAPI", "Pydantic", "PostgreSQL", "SQL"]
  },
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Infrastructure",
    technologies: ["Docker", "GitHub Actions", "MLflow", "Monitoring"]
  }
];
