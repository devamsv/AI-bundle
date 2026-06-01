export interface CurriculumItem {
  title: string;
  questionsCount: number;
  highlightedTopic?: string;
}

export interface CurriculumCategory {
  id: string;
  name: string;
  icon: string;
  color: string; // Tailwind color name like 'indigo', 'cyan', 'purple'
  description: string;
  subcategories: CurriculumItem[];
}

export interface TargetRole {
  title: string;
  icon: string;
  description: string;
  skillsNeeded: string[];
}

export interface DifferenceItem {
  title: string;
  text: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  avatarSeed: string;
  category: string; // 'Fresher', 'Developer', 'Career Switcher', 'AI Engineer'
}

export interface Quote {
  text: string;
  author: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const CURRICULUM_DATA: CurriculumCategory[] = [
  {
    id: "programming-backend",
    name: "🐍 Programming & Backend",
    icon: "Code",
    color: "emerald",
    description: "Solidify Python syntax, complex algorithmic constructs, dynamic API routes, and database schemas required for production data loads.",
    subcategories: [
      { title: "Python for AI Engineers", questionsCount: 195, highlightedTopic: "OOPs, Async concurrency, fast memory views, deep generators and array schemas" },
      { title: "APIs & FastAPI", questionsCount: 158, highlightedTopic: "Pydantic parsing, headless dependency injection models, rate limiting, and SSE connections" },
      { title: "Database, SQL & NoSQL Structures", questionsCount: 40, highlightedTopic: "Indexing configurations, connection pooling, complex JSON containment queries, and cache syncs" }
    ]
  },
  {
    id: "core-ai-ml",
    name: "📊 Core AI & Machine Learning",
    icon: "TrendingUp",
    color: "blue",
    description: "Build deep intuition over statistics, classical pipelines, parameter distributions, and key natural language blocks.",
    subcategories: [
      { title: "Statistics & Probability", questionsCount: 140, highlightedTopic: "Bayesian calculations, probability distributions, testing paradigms and variance modeling" },
      { title: "Machine Learning Foundations", questionsCount: 70, highlightedTopic: "Supervised pipelines, loss formulation methods, cross-validation rules and metric checks" },
      { title: "Deep Learning Architectures", questionsCount: 63, highlightedTopic: "Backpropagation math, optimizer tuning, descent algorithms, and neural layer configurations" },
      { title: "NLP (Natural Language Processing)", questionsCount: 30, highlightedTopic: "Tokenizer mechanisms, sequence mappings, TF-IDF, embeddings matrix, and token distance bounds" }
    ]
  },
  {
    id: "llms-genai",
    name: "🤖 LLMs & Generative AI",
    icon: "Sparkles",
    color: "purple",
    description: "Explore transformer internals, fine-tuning structures, prompt compilation, and leading model configurations.",
    subcategories: [
      { title: "LLMs & Foundation Models", questionsCount: 71, highlightedTopic: "Hyperparameter decoding, context window scaling, and vocabulary calculations" },
      { title: "Transformer & GPT Architecture", questionsCount: 60, highlightedTopic: "Multi-head attention formulas, causal masks, rotary positional embeddings, and weight matrices" },
      { title: "Claude & Advanced LLM Concepts", questionsCount: 50, highlightedTopic: "Prefill caches, XML formatting constructs, tokens pricing, and dual model alignment" },
      { title: "Prompt Engineering", questionsCount: 56, highlightedTopic: "Chain-of-thought protocols, few-shot selectors, automated evaluation templates, and system commands" },
      { title: "LLM Fine-Tuning", questionsCount: 65, highlightedTopic: "QLoRA/LoRA adaptation parameters, quantization ranges, deep instruct tuning, and alignment pipelines" }
    ]
  },
  {
    id: "rag",
    name: "🔍 RAG & Retrieval Systems",
    icon: "Search",
    color: "cyan",
    description: "Master chunking, semantic indices, hybrid search weights, and generation evaluation metrics.",
    subcategories: [
      { title: "Vector Databases & Embeddings", questionsCount: 22, highlightedTopic: "Distance bounds (cosine, dot), HNSW configurations, dimensionality reduction, and metadata filtering" },
      { title: "RAG (Retrieval-Augmented Generation)", questionsCount: 99, highlightedTopic: "Query expansion, fusion routing, reciprocal rank fusion (RRF), re-ranking, and Ragas evaluation" }
    ]
  },
  {
    id: "frameworks-agents",
    name: "⚡ AI Frameworks & Agentic AI",
    icon: "Cpu",
    color: "indigo",
    description: "Learn LangGraph state machines, multi-agent frameworks, Reasoning Loops, Model Context Protocol configurations, and tools setup.",
    subcategories: [
      { title: "LangChain Orchestration", questionsCount: 111, highlightedTopic: "Expression Language (LCEL), streaming chunks, parsing templates, and runtime chain routing" },
      { title: "LangGraph State Machines", questionsCount: 64, highlightedTopic: "State management, conditional edges, cyclic loops, human-in-the-loop, and time-travel debugging" },
      { title: "CrewAI Orchestrations", questionsCount: 67, highlightedTopic: "Multi-agent squad architectures, sequential processes, memory stores, and task delegation mechanics" },
      { title: "AutoGen Orchestration", questionsCount: 46, highlightedTopic: "Multi-agent conversations, group chats, automated code execution blocks, and customizable state transitions" },
      { title: "MCP (Model Context Protocol)", questionsCount: 41, highlightedTopic: "Protocol specification, custom server setup, secure resource exposures, and client-side bindings" },
      { title: "AI Agents & Agentic Systems", questionsCount: 35, highlightedTopic: "Planning strategies, tool use protocols, self-reflection states, and token-safe fallback mechanics" },
      { title: "Agentic AI Loops", questionsCount: 50, highlightedTopic: "State transition matrices, planning loops, error re-execution prompts, and high concurrency queues" }
    ]
  },
  {
    id: "production-design",
    name: "🏗️ Production AI & System Design",
    icon: "Layers",
    color: "orange",
    description: "Design fault-tolerant, scalable architectures handling million-user loads while monitoring telemetry, guardrails, and ethics.",
    subcategories: [
      { title: "AI System Design", questionsCount: 54, highlightedTopic: "Concurrent proxy routing, prompt caching architectures, load balancing, and offline-first agents" },
      { title: "LLMOps & Production AI", questionsCount: 71, highlightedTopic: "Deployment logs, monitoring tools, tracing (LangSmith, Phoenix), latency profiling, and cold starts" },
      { title: "AI Infrastructure & Scalability", questionsCount: 23, highlightedTopic: "Container topologies, serverless model setups, distributed inference, and dynamic VRAM routing" },
      { title: "Evaluation & Testing", questionsCount: 28, highlightedTopic: "Synthetic dataset compilers, regression assertions, continuous validation, and prompt regression checks" },
      { title: "Multimodal AI", questionsCount: 26, highlightedTopic: "Visual embeddings cross-attention, audio transcription buffers, and token-space alignments" },
      { title: "AI Safety, Ethics & Responsible AI", questionsCount: 86, highlightedTopic: "Prompt injections, toxicity classification pipelines, jailbreaking counters, and guardrail software" }
    ]
  },
  {
    id: "interview-prep",
    name: "💼 Interview Preparation",
    icon: "Briefcase",
    color: "rose",
    description: "Master real behavioral situations, case-studies, and scenario matrices that interviewers look for.",
    subcategories: [
      { title: "Behavioral & Scenario-Based Questions", questionsCount: 22, highlightedTopic: "Reframing legacy experience, solving multi-agent loops failures, budget constraint debates, and team setups" }
    ]
  }
];

export const TARGET_ROLES: TargetRole[] = [
  {
    title: "LLM Engineers",
    icon: "Sparkles",
    description: "Focuses on transformer weight tuning, context scaling, instruction datasets, and custom alignments.",
    skillsNeeded: ["QLoRA/LoRA", "Tokenizer Vocabs", "Context Caching", "Evaluation Metrics"]
  },
  {
    title: "ML Engineers",
    icon: "TrendingUp",
    description: "Builds mathematical ML models, regression testing formulas, dataset pipelines, and model deployments.",
    skillsNeeded: ["Supervised ML", "Feature Engineering", "SciKit-Learn", "Loss Distributions"]
  },
  {
    title: "Full Stack Developers entering AI",
    icon: "Code",
    description: "Bridges general user interfaces with core AI backends using FastAPI, streaming UI, and vector querying.",
    skillsNeeded: ["FastAPI Servers", "UI Wrappers", "JSON DB Fields", "SSE Streaming"]
  },
  {
    title: "Freshers preparing for AI roles",
    icon: "Award",
    description: "Starts from structured fundamental steps like Python OOP, statistical basics, clean code, and modern prompts.",
    skillsNeeded: ["Python OOP", "SQL/NoSQL DBs", "Structured Prompts", "RAG baselines"]
  },
  {
    title: "Experienced developers upgrading to AI stack",
    icon: "Zap",
    description: "Leverages senior state-of-the-art frameworks, custom microservice graphs, and multi-tool schemas.",
    skillsNeeded: ["LangGraph Multi-Agent", "MCP Protocol", "System Desing", "Scalability Tools"]
  },
  {
    title: "AI Engineer",
    icon: "Cpu",
    description: "Integrates deep learning arrays, token estimators, and production RAG services into core SaaS systems.",
    skillsNeeded: ["LangChain", "RAG Systems", "Vectordbs", "Latency Optimization"]
  },
  {
    title: "Gen AI Engineer",
    icon: "Brain",
    description: "Deploys custom fine-tuned foundational logic models with safe prompts, system guardrails, and evaluators.",
    skillsNeeded: ["Model Prototyping", "Safety Guardrails", "Instruction Datasets", "TFT Mechanics"]
  },
  {
    title: "Agentic AI / AI Agent Engineer",
    icon: "Boxes",
    description: "Designs stateful, self-healing planning loops, autonomous tools executors, and collaborative agent squads.",
    skillsNeeded: ["LangGraph Hooks", "CrewAI Systems", "Planning State Vectors", "Tool Integration"]
  },
  {
    title: "AI Solutions Architect",
    icon: "Network",
    description: "Synthesizes multi-model systems, load balancing, caching topologies, and reliable system failovers.",
    skillsNeeded: ["System Design", "Cloud Topology", "API Gateway Proxies", "Budget Controls"]
  },
  {
    title: "AI Platform & Infrastructure Engineer",
    icon: "Container",
    description: "Designs high-availability Docker arrays, GPU vRAM pools, serverless scales, and optimized inference routes.",
    skillsNeeded: ["Docker/K8s Configs", "Distributed Inference", "vLLM Setup", "Hardware Metrics"]
  },
  {
    title: "Applied AI Engineer",
    icon: "Puzzle",
    description: "Converts real customer business constraints into direct prompt chains, API queries, and scalable logic.",
    skillsNeeded: ["Business Logic Mapping", "Few-Shot Selectors", "FastAPI Proxies", "RAG Pipeline Setup"]
  },
  {
    title: "MLOps & LLMOps Engineer",
    icon: "Gauge",
    description: "Automates continuous tuning runs, deployment monitors, live model evaluations, and prompt regression suites.",
    skillsNeeded: ["LangSmith / Phoenix", "Model Observability", "Continuous Pipelines", "Quantization Runs"]
  }
];

export const DIFFERENTIATOR_DATA: DifferenceItem[] = [
  {
    title: "Concept-based learning",
    text: "Skip rote memorization of simple facts. Learn the core mathematical and logical foundations of why algorithms behave a certain way."
  },
  {
    title: "Real-world AI engineering workflows",
    text: "Master industry workflows like setting up microservice task planners, handling vRAM constraints, and parsing tool schemas."
  },
  {
    title: "Production AI systems",
    text: "Understand system layout configurations, load balanced agents, stateless fastapi proxies, and offline-first client-side synchronizations."
  },
  {
    title: "Industry-focused preparation",
    text: "Say goodbye to general ML tutorials. Our questions directly represent technical evaluation trends occurring inside elite tech teams."
  },
  {
    title: "Structured beginner-to-advanced roadmap",
    text: "Carefully steps from Python, FastAPI, and data structures before scaling to deep neural layers, hybrid RAG, and cyclical Multi-agent systems."
  },
  {
    title: "Modern 2026 AI interview trends",
    text: "Covers leading-edge 2026 developer requirements like Model Context Protocol, prefill context caching, and autonomous crew delegations."
  },
  {
    title: "Learn WHY systems work",
    text: "Provides deep intuitive answers helping you explain 'why a transformer handles embeddings with certain ratios' instead of just citing formulas."
  }
];

export const REAL_INDUSTRY_TOPICS: string[] = [
  "RAG Pipelines",
  "AI Agents & Multi-Agent Systems",
  "Fine-Tuning & Evaluation",
  "Prompt Engineering",
  "Vector Search & Embeddings",
  "AI APIs & FastAPI",
  "Production AI Systems",
  "LLMOps & Monitoring",
  "AI Scalability & Deployment",
  "GPT & Transformer Internals"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aakash Patel",
    role: "AI Engineer (Recent College Graduate)",
    text: "Authentic mock materials are virtually impossible to find. This bundle's depth is incredible—the Python & FastAPI questions prepared me exactly for my deep-dive recruiter scenarios. Best ₹299 spent!",
    rating: 5,
    avatarSeed: "aakash",
    category: "Fresher"
  },
  {
    name: "Vikas Sharma",
    role: "Senior Full Stack Dev (Transitioned to AI)",
    text: "As a web developer, understanding vector embeddings and LangGraph cycle states felt overwhelming. This bundle focused exactly on system workflows, helping me clear my architecture presentation rounds with high confidence.",
    rating: 5,
    avatarSeed: "vikas",
    category: "Developer"
  },
  {
    name: "Sneha Nair",
    role: "GenAI Solutions Lead",
    text: "Most guides are just copies of outdated 2021 ML pages. Devendhiran's bundle includes state-of-the-art topics like MCP Tool Servers, context caching, and Multi-Agent Crew designs. Highly recommended for experienced engineers upskilling.",
    rating: 5,
    avatarSeed: "sneha",
    category: "AI Engineer"
  },
  {
    name: "Rajesh Kulkarni",
    role: "MLOps Architect (Ex-Support Analyst)",
    text: "I was struggling with how to reposition my legacy support experience. The behavioral and system scenario checklists in this bundle gave me a precise blueprint to articulate scale during interviews. Cleared my technical rounds in 3 weeks!",
    rating: 5,
    avatarSeed: "rajesh",
    category: "Career Switcher"
  }
];

export const MOTIVATIONAL_QUOTES: Quote[] = [
  { text: "Your AI career starts with preparation.", author: "Commit to craft" },
  { text: "AI Engineers are built through practice, not scrolling.", author: "Action beats theory" },
  { text: "The future belongs to developers who understand AI systems.", author: "System design master" },
  { text: "Consistency + AI Skills = Career Growth.", author: "Daily progress" },
  { text: "Start now. Your future AI role is waiting.", author: "2026 Industry Ready" }
];

export const FAQS: FAQ[] = [
  {
    question: "What exactly is included in the ₹299 bundle?",
    answer: "You get lifetime access to an organized Google Drive directory containing 1,500+ structured, concept-based interview questions and answers with physical diagrams, architecture blueprint breakdowns, Python code snippets, and MLOps deployment scenario templates."
  },
  {
    question: "Are the study materials updated for 2026 technological trends?",
    answer: "Yes, completely! The directory is updated in real-time to cover state-of-the-art 2026 engineering patterns including Model Context Protocol (MCP), prefill context caching, hybrid semantic vector DBs, and CrewAI/LangGraph stateful multi-agent systems."
  },
  {
    question: "Do I get lifetime updates as the AI ecosystem changes?",
    answer: "Absolutely! There are no recurring fees or monthly subscriptions. A single payment of ₹299 gives you lifetime secure access. Any new questions, cheatsheets, or revision modules we output are pushed to the same Drive folder entirely for free."
  },
  {
    question: "What format are the study guides in? Can I read on my mobile?",
    answer: "All study guides, roadmap sheets, and Q&A modules are presented in crystal-clear, high-resolution mobile-friendly PDFs, text modules, and copying-supported code files, perfectly optimized for both mobile and desktop screens."
  },
  {
    question: "What happens if there is an issue with accessing the Drive?",
    answer: "We support instant delivery! If you don't receive access immediately or face any permission blocks, you can simply email mdeva.avs@gmail.com or send a direct LinkedIn message to https://www.linkedin.com/in/mdeva-datasci/ and we will manually trigger access for you right away."
  }
];
