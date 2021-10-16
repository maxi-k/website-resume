const content = {
    person: {
        name: "Maximilian Kuschewski"
    },
    social: [
        { name: "Github",
          path: "https://github.com/maxi-k",
          icon: "github" },
        { name: "Google Scholar",
          path: "https://scholar.google.com/citations?user=PC1VMZAAAAAJ",
          icon: "graduation cap" },
        { name: "LinkedIn",
          path: "https://www.linkedin.com/in/maxi-k",
          icon: "linkedin" }
    ],
    publication: {
        readFull: 'PDF',
        readCode: 'Code',
        phdAdvisor: 'https://scholar.google.com/citations?user=qFOwPNQAAAAJ'
    },
    publications: [
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
