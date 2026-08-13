import { Capability } from "../types";

export const capabilities: Capability[] = [
  {
    title: "Machine Learning Systems",
    description: "Designing end-to-end ML pipelines from data ingestion and feature engineering to model deployment and monitoring.",
    icon: "BrainCircuit",
    skills: ["Classical ML", "Feature Engineering", "Evaluation", "Explainability"]
  },
  {
    title: "Deep Learning & Computer Vision",
    description: "Building neural networks for complex pattern recognition, image classification, and object detection.",
    icon: "Scan",
    skills: ["CNNs", "Transfer Learning", "Image Processing", "PyTorch"]
  },
  {
    title: "LLM Applications",
    description: "Integrating Large Language Models into products for natural language understanding, generation, and reasoning.",
    icon: "MessageSquareText",
    skills: ["Prompt Engineering", "Fine-tuning", "Structured Output", "Evaluation"]
  },
  {
    title: "RAG Systems",
    description: "Architecting Retrieval-Augmented Generation pipelines for accurate, grounded AI responses over private data.",
    icon: "DatabaseZap",
    skills: ["Vector Databases", "Embeddings", "Hybrid Search", "Reranking"]
  },
  {
    title: "Agentic AI Systems",
    description: "Developing autonomous agents capable of planning, tool use, memory, and multi-agent collaboration.",
    icon: "Network",
    skills: ["LangGraph", "Tool Calling", "Orchestration", "Memory Systems"]
  },
  {
    title: "AI Automation",
    description: "Automating complex business workflows and data processing using intelligent decision-making systems.",
    icon: "Bot",
    skills: ["Workflow Automation", "Data Extraction", "Decision Trees", "Integration"]
  },
  {
    title: "MLOps / LLMOps",
    description: "Managing the lifecycle of AI models including versioning, experiment tracking, testing, and observability.",
    icon: "Activity",
    skills: ["MLflow", "CI/CD for ML", "Model Monitoring", "Telemetry"]
  },
  {
    title: "AI Deployment & Systems",
    description: "Deploying AI systems securely and efficiently using modern backend and infrastructure technologies.",
    icon: "Server",
    skills: ["FastAPI", "Docker", "Kubernetes", "Cloud Infrastructure"]
  }
];
