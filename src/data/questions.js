export const sampleQuestions = [
    {
        no: 1,
        question: "1. Which technology is primarily used to process Big Data across distributed computing nodes?",
        options: [
            "A. Apache Hadoop",
            "B. Microsoft Excel",
            "C. MySQL",
            "D. MATLAB"
        ],
        correctAnswer: 0,
        explanation: 
        "Apache Hadoop is a distributed computing framework that enables parallel processing of massive datasets across multiple machines, making it ideal for Big Data workloads."
    },
    {
        no: 2,
        question: "2. In the context of neural networks, what does the activation function introduce into the model?",
        options: [
            "A. Linearity",
            "B. Random noise",
            "C. Non-linearity",
            "D. Weight normalization"
        ],
        correctAnswer: 2,
        explanation: 
        "Activation functions introduce non-linearity, allowing neural networks to model complex relationships beyond simple linear mappings."
    },
    {
        no: 3,
        question: "3. Which of the following best describes the relationship between Big Data and Connectionist AI?",
        options: [
            "A. They are independent technologies with no overlap.",
            "B. Big Data provides the raw material that Connectionist AI uses to learn patterns.",
            "C. Connectionist AI generates Big Data for storage systems.",
            "D. Big Data replaces the need for AI algorithms."
        ],
        correctAnswer: 1,
        explanation: 
        "Connectionist AI relies on Big Data as training material—large, diverse datasets that allow neural networks to learn complex representations and patterns."
    },
    {
        no: 4,
        question: "4. What is the primary role of the input layer in a neural network?",
        options: [
            "A. To make final predictions",
            "B. To clean data automatically",
            "C. To translate raw data into numerical form for processing",
            "D. To backpropagate errors"
        ],
        correctAnswer: 2,
        explanation: 
        "The input layer serves as a translator, converting raw or unstructured data (like images or text) into numerical inputs the network can process."
    },
    {
        no: 5,
        question: "5. Why did early Symbolic AI systems struggle with real-world applications?",
        options: [
            "A. They used too many neural network layers",
            "B. They could not handle ambiguous or unstructured data and lacked learning ability",
            "C. They required too much Big Data for training",
            "D. They relied on probabilistic reasoning instead of deterministic rules"
        ],
        correctAnswer: 1,
        explanation: 
        "Symbolic AI depended on static, rule-based systems and could not handle the ambiguity and unstructured nature of real-world data, leading to its decline."
    },
    {
        no: 6,
        question: "6. In a Big Data context, which ‘V’ is most directly linked to ensuring that AI models make accurate and unbiased predictions?",
        options: [
            "A. Volume",
            "B. Velocity",
            "C. Veracity",
            "D. Variety"
        ],
        correctAnswer: 2,
        explanation: 
        "Veracity ensures that data is accurate, reliable, and unbiased—critical for producing valid and ethical AI model predictions."
    },
    {
        no: 7,
        question: "7. During the training of a neural network, what is the main purpose of the loss function?",
        options: [
            "A. To calculate how far predictions are from actual results",
            "B. To speed up data ingestion",
            "C. To normalize the data before training",
            "D. To replace the activation function during optimization"
        ],
        correctAnswer: 0,
        explanation: 
        "The loss function quantifies the difference between the model’s predictions and the true labels, guiding weight adjustments during backpropagation."
    },
    {
        no: 8,
        question: "8. How do Connectionist AI models enhance climate change forecasting compared to traditional rule-based systems?",
        options: [
            "A. They require no historical data for predictions",
            "B. They simulate climate systems through explicit physics-based equations",
            "C. They learn complex, nonlinear relationships from vast, diverse climate datasets",
            "D. They only use small, static datasets for rapid processing"
        ],
        correctAnswer: 2,
        explanation: 
        "Connectionist models can learn complex, nonlinear dependencies across diverse data sources—such as satellites and ocean sensors—allowing more accurate, data-driven climate forecasts."
    },
        
    {
        no: 9,
        question: "9. Which of the following best defines semi-structured data?",
        options: [
            "A. Data that follows a strict, predefined schema",
            "B. Data that lacks any organizational elements or hierarchy",
            "C. Data that includes tags or markers to enforce a partial structure",
            "D. Data that is only stored in relational databases"
        ],
        correctAnswer: 2,
        explanation: "Semi-structured data includes tags or markers (e.g., XML, JSON) that provide partial organization, making it more flexible than structured data but more manageable than unstructured data."
    },
    {
        no: 10,
        question: "10. Which type of Big Data source is most likely to generate real-time sensor readings and telemetry data?",
        options: [
            "A. Social media platforms",
            "B. IoT devices",
            "C. Cloud data centers",
            "D. Enterprise databases"
        ],
        correctAnswer: 1,
        explanation: "IoT devices—such as smartwatches, vehicles, and industrial sensors—continuously generate real-time telemetry and sensor data that can be structured, semi-structured, or unstructured."
    },
    {
        no: 11,
        question: "11. In Hadoop, which component is primarily responsible for managing and allocating computational resources across the cluster?",
        options: [
            "A. HDFS",
            "B. YARN",
            "C. MapReduce",
            "D. Spark Core"
        ],
        correctAnswer: 1,
        explanation: "YARN (Yet Another Resource Negotiator) manages resources and job scheduling in a Hadoop cluster, ensuring efficient use of computational capacity."
    },
    {
        no: 12,
        question: "12. Which statement correctly compares structured and unstructured data?",
        options: [
            "A. Structured data is less efficient to process than unstructured data.",
            "B. Unstructured data can be easily queried with SQL.",
            "C. Structured data follows a fixed schema, while unstructured data has no predefined format.",
            "D. Unstructured data is always stored in relational databases."
        ],
        correctAnswer: 2,
        explanation: "Structured data adheres to a defined schema, while unstructured data lacks a fixed format, making it harder to search, store, and process."
    },
    {
        no: 13,
        question: "13. Why is Spark generally faster than Hadoop’s MapReduce in processing Big Data workloads?",
        options: [
            "A. Spark stores data permanently on disk.",
            "B. Spark performs most operations in memory, minimizing disk I/O.",
            "C. Spark requires fewer computing nodes to operate.",
            "D. Spark uses a fixed schema for all operations."
        ],
        correctAnswer: 1,
        explanation: "Spark's in-memory computation drastically reduces disk reads and writes, making it significantly faster than Hadoop’s MapReduce for iterative and real-time tasks."
    },
    {
        no: 14,
        question: "14. What advantage does edge computing provide for AI systems such as autonomous vehicles?",
        options: [
            "A. It increases latency for safety-critical tasks.",
            "B. It processes data in real time close to where it is generated.",
            "C. It requires all data to be sent to a centralized cloud.",
            "D. It eliminates the need for local computation."
        ],
        correctAnswer: 1,
        explanation: "Edge computing enables data to be processed near its source—such as in a car’s onboard computer—allowing real-time AI inference for safety-critical decisions like braking or steering."
    },
    {
        no: 15,
        question: "15. Which of the following best explains the concept of 'schema-on-read' used in data lakes?",
        options: [
            "A. The schema is applied before data is stored in the lake.",
            "B. The schema must match the database design.",
            "C. The schema is applied only when data is retrieved and analyzed.",
            "D. The schema changes every time new data is ingested."
        ],
        correctAnswer: 2,
        explanation: "In data lakes, schema-on-read means data is stored in its raw form and the schema is applied only at the time of analysis, offering flexibility in handling diverse data types."
    },
    {
        no: 16,
        question: "16. Why might an organization choose a NoSQL database instead of a traditional relational database?",
        options: [
            "A. To handle highly structured, fixed-schema data efficiently",
            "B. To manage flexible, semi-structured, or unstructured data that scales horizontally",
            "C. To ensure strict ACID compliance for every transaction",
            "D. To replace cloud computing infrastructure entirely"
        ],
        correctAnswer: 1,
        explanation: "NoSQL databases are optimized for scalability and flexibility, making them ideal for handling semi-structured and unstructured data that cannot easily fit into fixed relational schemas."
    },

    { 
        no: 17,
        question: "17. What is the primary limitation of traditional statistical methods when applied to modern, high-dimensional data?",
        options: [
            "A. They lack interpretability.",
            "B. They assume linear and low-dimensional relationships.",
            "C. They require neural network architectures to function.",
            "D. They can only be used for unstructured data."
        ],
        correctAnswer: 1,
        explanation: "Traditional methods often assume linearity and low dimensionality, making them less effective for complex, nonlinear, and high-dimensional data common in modern AI applications."
    },
    {
        no: 18,
        question: "18. Which neural network component introduces nonlinearity into model predictions?",
        options: [
            "A. Loss function",
            "B. Gradient computation",
            "C. Activation function",
            "D. Weight initialization"
        ],
        correctAnswer: 2,
        explanation: "Activation functions (such as ReLU or Sigmoid) introduce nonlinearity, allowing networks to learn complex, non-linear mappings beyond linear regression."
    },
    {
        no: 19,
        question: "19. Why do convolutional layers in CNNs use small local filters instead of fully connected layers for images?",
        options: [
            "A. To reduce memory consumption and exploit spatial locality",
            "B. To increase the number of parameters for better fitting",
            "C. To ensure each pixel is connected to all others",
            "D. To disable weight sharing and enhance randomness"
        ],
        correctAnswer: 0,
        explanation: "Local filters capture spatial patterns while sharing weights across regions, dramatically reducing parameters and improving generalization for image data."
    },
    {
        no: 20,
        question: "20. In the context of optimization, what does the term 'local minimum' refer to?",
        options: [
            "A. The lowest possible value of the global loss function",
            "B. A point where the loss is lower than nearby values but not globally minimal",
            "C. A random initialization of weights",
            "D. The final output layer’s value"
        ],
        correctAnswer: 1,
        explanation: "A local minimum is a point where the loss is smaller than neighboring values, but not necessarily the smallest possible globally. Gradient descent can get stuck here."
    },
    {
        no: 21,
        question: "21. Which of the following best describes 'model drift' in AI systems?",
        options: [
            "A. A decrease in hardware performance over time",
            "B. A mismatch between training and production data distributions",
            "C. Random fluctuations in learning rates",
            "D. A neural network’s tendency to overfit the training set"
        ],
        correctAnswer: 1,
        explanation: "Model drift occurs when the data distribution or underlying relationships change, causing a trained model’s predictions to degrade over time."
    },
    {
        no: 22,
        question: "22. What advantage does Adam optimization have over simple gradient descent?",
        options: [
            "A. It uses dropout regularization automatically.",
            "B. It adapts learning rates for each parameter using momentum and variance estimates.",
            "C. It trains only linear models.",
            "D. It eliminates the need for loss functions."
        ],
        correctAnswer: 1,
        explanation: "Adam combines ideas from RMSProp and momentum to adapt learning rates per parameter, speeding up and stabilizing convergence during training."
    },
    {
        no: 23,
        question: "23. How do attention mechanisms improve performance in sequence models?",
        options: [
            "A. By assigning equal weight to all input tokens",
            "B. By focusing computation only on the final output layer",
            "C. By dynamically weighting input positions based on their relevance to each output",
            "D. By removing temporal dependencies from data"
        ],
        correctAnswer: 2,
        explanation: "Attention allows models to assign varying importance to different input positions, helping capture long-range dependencies and improving sequence modeling."
    },
    {
        no: 24,
        question: "24. What is the main purpose of SHAP visualizations in AI interpretability?",
        options: [
            "A. To show training accuracy over epochs",
            "B. To identify which input features most influence model predictions",
            "C. To visualize gradient flow in backpropagation",
            "D. To optimize learning rates"
        ],
        correctAnswer: 1,
        explanation: "SHAP visualizations assign credit to individual features, showing how each contributes to the model’s output and increasing interpretability."
    },
    {
        no: 25,
        question: "25. Why are interactive data visualization tools like Plotly valuable in deep learning analysis?",
        options: [
            "A. They simplify neural architecture design.",
            "B. They allow real-time exploration of complex, high-dimensional data.",
            "C. They automatically retrain models when new data arrives.",
            "D. They eliminate the need for preprocessing."
        ],
        correctAnswer: 1,
        explanation: "Interactive visualizations enable researchers to explore trends, detect anomalies, and interpret patterns dynamically — essential for understanding model behavior."
    },

    {
        no: 26,
        question: "26. In a neural network, what do weights represent?",
        options: [
            "A. The bias added to each neuron",
            "B. The strength of the connection between neurons",
            "C. The learning rate used during training",
            "D. The activation function of a neuron"
        ],
        correctAnswer: 1,
        explanation: "Weights represent the strength or importance of each input signal in influencing a neuron's output — analogous to synaptic strengths in the brain."
    },
    {
        no: 27,
        question: "27. What is the main role of an activation function in a neural network?",
        options: [
            "A. To store learned weights",
            "B. To introduce non-linearity into the model",
            "C. To normalize the output of each neuron",
            "D. To compute the loss function"
        ],
        correctAnswer: 1,
        explanation: "Activation functions like ReLU, sigmoid, and tanh introduce non-linearity, allowing neural networks to model complex, non-linear relationships."
    },
    {
        no: 28,
        question: "28. Which of the following best describes the purpose of backpropagation?",
        options: [
            "A. To calculate predictions during inference",
            "B. To compute the gradient of the loss with respect to each weight and bias",
            "C. To initialize all network parameters to zero",
            "D. To increase the network’s output dimensionality"
        ],
        correctAnswer: 1,
        explanation: "Backpropagation computes the gradient of the loss with respect to each parameter using the chain rule, allowing weights to be updated to reduce error."
    },
    {
        no: 29,
        question: "29. Which neural architecture is specifically designed to handle spatial hierarchies in image data?",
        options: [
            "A. Recurrent Neural Network (RNN)",
            "B. Transformer",
            "C. Convolutional Neural Network (CNN)",
            "D. Perceptron"
        ],
        correctAnswer: 2,
        explanation: "Convolutional Neural Networks (CNNs) process grid-like data such as images using convolutional filters that capture spatial hierarchies."
    },
    {
        no: 30,
        question: "30. What problem do LSTM and GRU architectures solve in traditional RNNs?",
        options: [
            "A. Lack of convolutional filters",
            "B. Overfitting during image processing",
            "C. Vanishing and exploding gradient problems in long sequences",
            "D. High computational cost in feedforward layers"
        ],
        correctAnswer: 2,
        explanation: "LSTM and GRU networks address the vanishing and exploding gradient problems, allowing RNNs to learn long-term dependencies in sequence data."
    },
    {
        no: 31,
        question: "31. What is the key idea behind dropout regularization in neural networks?",
        options: [
            "A. To randomly eliminate neurons during training to prevent co-adaptation",
            "B. To permanently remove neurons that contribute little to accuracy",
            "C. To increase the learning rate for faster convergence",
            "D. To duplicate neurons and average their outputs"
        ],
        correctAnswer: 0,
        explanation: "Dropout temporarily deactivates random neurons during training, preventing co-adaptation and improving generalization."
    },
    {
        no: 32,
        question: "32. In L1 regularization, what happens to less important features during training?",
        options: [
            "A. Their corresponding weights become exactly zero",
            "B. Their corresponding weights increase in magnitude",
            "C. Their corresponding weights are squared and penalized",
            "D. Their gradients are frozen to prevent updates"
        ],
        correctAnswer: 0,
        explanation: "L1 regularization encourages sparsity by pushing unimportant feature weights to exactly zero, effectively performing feature selection."
    },
    {
        no: 33,
        question: "33. How does the Self-Organizing Map (SOM) preserve the topological structure of input data?",
        options: [
            "A. By using backpropagation with labeled data",
            "B. By updating neighboring neurons based on distance to the Best Matching Unit (BMU)",
            "C. By storing the original data in a 2D grid",
            "D. By applying dropout to random neurons during mapping"
        ],
        correctAnswer: 1,
        explanation: "SOMs adjust not only the BMU but also its neighbors, ensuring that nearby neurons represent similar input patterns and preserving data topology."
    },
    {
        no: 34,
        question: "34. Why are Spiking Neural Networks (SNNs) considered more biologically realistic than traditional ANNs?",
        options: [
            "A. They rely on static weights without learning",
            "B. They use continuous signals instead of spikes",
            "C. They model time-dependent, discrete spike-based communication between neurons",
            "D. They remove activation functions entirely"
        ],
        correctAnswer: 2,
        explanation: "SNNs communicate via time-based spikes, mimicking biological neurons’ electrical activity and incorporating temporal dynamics into computation."
    },
    {
        no: 35,
        question: "35. According to the Universal Approximation Theorem, what fundamental capability does a neural network possess?",
        options: [
            "A. It can perfectly memorize any training dataset without error.",
            "B. It can approximate any continuous function given sufficient neurons and layers.",
            "C. It can only model linear relationships between variables.",
            "D. It guarantees zero generalization error on unseen data."
        ],
        correctAnswer: 1,
        explanation: "The Universal Approximation Theorem states that a feedforward neural network with enough neurons and appropriate activation functions can approximate any continuous function, highlighting its expressive power."
    },
    {
        no: 36,
        question: "36. How does synaptic plasticity in biological neurons relate to learning in artificial neural networks?",
        options: [
            "A. Both rely on random changes in connectivity that do not depend on experience.",
            "B. Both strengthen or weaken connections based on experience or error feedback.",
            "C. Both eliminate neurons that fail to reach a firing threshold.",
            "D. Both depend entirely on fixed synaptic weights determined before training."
        ],
        correctAnswer: 1,
        explanation: "In both systems, learning occurs through adjusting connection strengths: synaptic plasticity modifies biological connections through experience, while backpropagation adjusts weights in artificial networks based on error gradients."
    },

    {
        no: 37,
        question: "37. In high-dimensional neural representations, why does the 'curse of dimensionality' pose a challenge for analytical modeling and visualization?",
        options: [
            "A. Because higher dimensions simplify clustering and distance-based relationships.",
            "B. Because data points become sparse, and distance metrics lose discriminative power.",
            "C. Because visualization tools automatically normalize high-dimensional data.",
            "D. Because non-linear models cannot operate on high-dimensional spaces."
        ],
        correctAnswer: 1,
        explanation: "In high-dimensional spaces, data points become sparse and distances between points converge, making clustering, modeling, and visualization less meaningful — a phenomenon known as the 'curse of dimensionality.'"
    },
    {
        no: 38,
        question: "38. When visualizing neural activation spaces using t-SNE or UMAP, what is the primary limitation researchers must consider?",
        options: [
            "A. These methods require labeled data to compute embeddings.",
            "B. They preserve global distances perfectly while distorting local clusters.",
            "C. They often distort global geometry while preserving local structure, which can mislead interpretation of overall data topology.",
            "D. They cannot be applied to deep learning representations due to nonlinearity."
        ],
        correctAnswer: 2,
        explanation: "Techniques like t-SNE and UMAP preserve local neighborhood relationships but distort global distances, which can lead to misinterpretation of large-scale data geometry or inter-cluster relationships."
    },

    {
        no: 39,
        question: "39. What is the main goal of data governance in the context of Big Data and Connectionist AI?",
        options: [
            "A. To collect as much data as possible without restriction",
            "B. To ensure ethical, transparent, and accountable management of personal and institutional data",
            "C. To increase corporate profits through unrestricted data sharing",
            "D. To eliminate all forms of data anonymization"
        ],
        correctAnswer: 1,
        explanation: "Data governance ensures that data is managed ethically and transparently, safeguarding privacy, fairness, and accountability in AI-driven decision-making."
    },
    {
        no: 40,
        question: "40. Which of the following best describes the principle of 'data minimization' under privacy ethics?",
        options: [
            "A. Collecting only the data necessary for a specific purpose",
            "B. Maximizing data collection for future research",
            "C. Randomly deleting portions of data after collection",
            "D. Encrypting all data to reduce bias"
        ],
        correctAnswer: 0,
        explanation: "Data minimization means collecting only what is necessary for a defined purpose, reducing privacy risks and ensuring ethical stewardship."
    },
    {
        no: 41,
        question: "41. Why is algorithmic bias considered an ethical concern rather than merely a technical issue?",
        options: [
            "A. Because it results from deliberate manipulation of data",
            "B. Because it reflects and amplifies social inequalities present in historical data",
            "C. Because it can be fully eliminated with better code",
            "D. Because it only affects low-accuracy models"
        ],
        correctAnswer: 1,
        explanation: "Algorithmic bias mirrors existing societal inequities, meaning ethical responsibility extends beyond coding to social awareness and justice in AI design."
    },
    {
        no: 42,
        question: "42. What is a major challenge of Explainable AI (XAI) when applied to deep neural networks?",
        options: [
            "A. It eliminates the need for model accuracy",
            "B. It requires complete public access to training data",
            "C. There is often a trade-off between interpretability and performance",
            "D. It can only be applied to symbolic AI systems"
        ],
        correctAnswer: 2,
        explanation: "Deep models are complex, and making them interpretable often reduces precision or speed, creating a tension between transparency and performance."
    },
    {
        no: 43,
        question: "43. How does Federated Learning address privacy concerns in large-scale AI systems?",
        options: [
            "A. By anonymizing all training data before processing",
            "B. By training models locally on devices without sharing raw data",
            "C. By encrypting all user inputs and storing them centrally",
            "D. By using smaller models that require less computation"
        ],
        correctAnswer: 1,
        explanation: "Federated Learning allows local model training without transferring personal data, preserving user privacy while enabling collective intelligence."
    },
    {
        no: 44,
        question: "44. What is the primary environmental concern associated with training large connectionist models like GPT or BERT?",
        options: [
            "A. Data redundancy across multiple servers",
            "B. The high carbon and energy footprint from massive computational requirements",
            "C. Excessive dependence on open-source datasets",
            "D. The use of symbolic reasoning in computation"
        ],
        correctAnswer: 1,
        explanation: "Training large-scale models consumes vast energy resources and generates significant carbon emissions, raising environmental sustainability concerns."
    },

    {
        no: 45,
        question: "45. How does the integration of symbolic AI with connectionist models address limitations inherent in purely neural systems?",
        options: [
            "A. By replacing neural networks with rule-based logic systems",
            "B. By combining structured reasoning with distributed representations to enhance interpretability and generalization",
            "C. By discarding learned representations in favor of symbolic computation",
            "D. By reducing neural model capacity to prevent overfitting"
        ],
        correctAnswer: 1,
        explanation: "Hybrid systems integrate symbolic reasoning with neural learning, combining the flexibility of connectionist representations with the structure and logic of symbolic AI, improving reasoning and interpretability."
    },
    {
        no: 46,
        question: "46. In the context of Big Data analytics, why is data provenance crucial for ensuring scientific reproducibility and ethical accountability?",
        options: [
            "A. It tracks the origin and transformation of data, ensuring transparency and reliability of analytical results",
            "B. It prevents the sharing of any form of metadata across datasets",
            "C. It guarantees that all datasets are unbiased by default",
            "D. It eliminates the need for version control in machine learning experiments"
        ],
        correctAnswer: 0,
        explanation: "Data provenance documents the full lifecycle of data — from collection to processing — ensuring that analyses are reproducible, auditable, and ethically traceable."
    },
    {
        no: 47,
        question: "47. What is a key theoretical challenge in scaling deep connectionist architectures toward human-level general intelligence?",
        options: [
            "A. The inability to use GPUs efficiently",
            "B. The absence of hierarchical memory, abstraction, and causal reasoning mechanisms found in human cognition",
            "C. The limitation of backpropagation to symbolic reasoning tasks",
            "D. The exclusive use of linear activation functions"
        ],
        correctAnswer: 1,
        explanation: "While deep networks excel at pattern recognition, they lack structured memory, abstraction, and causal reasoning — essential cognitive mechanisms for achieving general intelligence."
    },
    {
        no: 48,
        question: "48. As connectionist AI systems become more autonomous, what ethical framework is most critical for guiding their deployment in high-stakes domains like healthcare and law?",
        options: [
            "A. Utilitarianism, prioritizing outcomes that maximize computational efficiency",
            "B. Accountability and human-in-the-loop governance ensuring explainability, fairness, and oversight",
            "C. Complete algorithmic independence from human judgment",
            "D. Deontological reasoning that prohibits machine learning in moral decisions"
        ],
        correctAnswer: 1,
        explanation: "Ethical deployment of AI in critical sectors requires human-in-the-loop frameworks that emphasize accountability, fairness, and explainability, preventing harm and ensuring responsible oversight."
    },

    {
        no: 49,
        question: "49. What is the main advantage of using cloud computing in AI applications?",
        options: [
            "A. It eliminates the need for any internet connection",
            "B. It provides scalable computing resources without requiring physical hardware ownership",
            "C. It limits access to small amounts of data only",
            "D. It slows down the processing of AI models"
        ],
        correctAnswer: 1,
        explanation: "Cloud computing allows AI systems to scale resources up or down based on demand, reducing the need for organizations to purchase and maintain expensive hardware."
    },
    {
        no: 50,
        question: "50. What type of data is typically found in social media posts such as photos, videos, and comments?",
        options: [
            "A. Structured data",
            "B. Semi-structured data",
            "C. Unstructured data",
            "D. Relational data"
        ],
        correctAnswer: 2,
        explanation: "Social media posts consist mainly of unstructured data such as text, images, and videos that do not follow a fixed schema."
    },
]