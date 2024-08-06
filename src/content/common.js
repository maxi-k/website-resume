const githubUrl = "https://github.com/maxi-k";
const content = {
    person: {
        name: "Maximilian Kuschewski",
        githubUrl
    },
    social: [
        { name: "Github",
          path: githubUrl,
          icon: "github" },
        { name: "Google Scholar",
          path: "https://scholar.google.com/citations?user=PC1VMZAAAAAJ",
          icon: "graduation cap" },
        { name: "LinkedIn",
          path: "https://www.linkedin.com/in/maxi-k",
          icon: "linkedin" },
        { name: "X",
          path: "https://x.com/maxikuschewski",
          icon: "twitter" }
    ],
    publication: {
        readFull: 'PDF',
        readCode: 'Code',
        phdAdvisor: 'https://scholar.google.com/citations?user=qFOwPNQAAAAJ'
    },
    publications: [
        { title: "High-Performance Query Processing with NVMe Arrays: Spilling without Killing Performance",
          authors: ["Maximilian Kuschewski", "Jana Giceva", "Thomas Neumann", "Viktor Leis"],
          conference: "SIGMOD",
          year: 2025,
          type: "Research Paper",
          link: "https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/umami.pdf",
          abstract:
          "This paper aims to bridge the gap between fast in-memory query engines and slow but robust engines that can utilize external storage. " +
          "We find that current systems have to choose between fast in-memory operators and slower out-of-memory operators. " +
          "We present a solution that leverages two independent but complementary techniques: " +
          "First, we propose adaptive materialization, which can turn any hash-based in-memory operator into an out-of-memory operator without reducing in-memory performance. " +
          "Second, we introduce self-regulating compression, which optimizes the throughput of spilling operators based on the current workload and available hardware. " +
          "We evaluate these techniques using the prototype query engine Spilly, which matches the performance of state-of-the-art in-memory systems, but also efficiently executes large out-of-memory workloads by spilling to NVMe arrays."
        },
        { title: "BtrBlocks: Efficient Columnar Compression for Data Lakes",
          authors: ["Maximilian Kuschewski", "David Sauerwein", "Adnan Alhomssi", "Viktor Leis"],
          conference: "SIGMOD",
          year: 2023,
          type: "Research Paper",
          link: "https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/btrblocks.pdf",
          codeLink: "https://github.com/maxi-k/btrblocks",
          abstract:
          "Analytics is moving to the cloud and data is moving into data lakes. " +
          "These reside on blob storage services like S3 and enable seamless data sharing and system interoperability. " +
          "To support this, many systems build on open storage formats like Apache Parquet. " +
          "However, these formats are not optimized for remotely-accessed data lakes and today's high-throughput networks. " +
          "Inefficient decompression makes scans CPU-bound and thus increases query time and cost. " +
          "With this work we present BtrBlocks, an open columnar storage format designed for data lakes. " +
          "BtrBlocks uses a set of lightweight encoding schemes, achieving fast and efficient decompression and high compression ratios."
        },
        { title: "Towards Cost-Optimal Query Processing in the Cloud",
          authors: ["Viktor Leis", "Maximilian Kuschewski"],
          conference: "VLDB",
          year: 2021,
          type: "Vision Paper",
          link: "http://www.vldb.org/pvldb/vol14/p1606-leis.pdf",
          codeLink: "https://github.com/maxi-k/costoptimal-model",
          abstract:
          "Public cloud providers offer hundreds of heterogeneous hardware instances. " +
          "For analytical query processing systems, this presents a major challenge: " +
          "depending on the hardware configuration, performance and cost may differ by orders of magnitude. " +
          "We propose a simple and intuitive model that takes the workload, hardware, and cost into account " +
          "to determine the optimal instance configuration. " +
          "We discuss how such a model-based approach can significantly reduce costs " +
          "and also guide the evolution of cloud-native database systems to achieve our vision of cost-optimal query processing."
        },
        { title: "White-Box OLAP Performance Modeling for the Cloud" ,
          authors: ["Maximilian Kuschewski", "Viktor Leis"],
          conference: "CIDR",
          year: 2021,
          type: "Short Paper",
          link: "http://cidrdb.org/cidr2021/papers/cidr2021_abstract02.pdf",
          abstract:
          "Public cloud providers offer hundreds of heterogeneous hardware instances. " +
          "For cloud-based analytical query processing systems, this presents a major challenge: " +
          "depending on the hardware configuration chosen, performance and cost may differ by orders of magnitude. " +
          "We explore this relationship by building a white-box model that takes the workload, hardware, and cost into account " +
          "to determine the optimal instance configuration. " +
          "We argue that such an approach can guide the evolution of cloud-native OLAP systems."
        }
    ]
}

export default content
