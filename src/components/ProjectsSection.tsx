import { useState } from 'react';
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  sourceCode?: string;
}
const ProjectCard = ({
  project,
  onClick
}: {
  project: Project;
  onClick: () => void;
}) => {
  return <div className="card group cursor-pointer hover:-translate-y-2 transition-all" onClick={onClick}>
      <div className="h-48 mb-4 overflow-hidden rounded-lg bg-portfolio-container flex items-center justify-center">
        <div className="text-5xl">{project.image}</div>
      </div>
      <div className="px-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-portfolio-accent group-hover:text-portfolio-accent-hover transition-colors">
            {project.title}
          </h3>
          <span className="text-xs bg-portfolio-background px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-portfolio-text-muted mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, i) => <span key={i} className="text-xs bg-portfolio-background/50 px-2 py-0.5 rounded-full">
              {tech}
            </span>)}
          {project.technologies.length > 3 && <span className="text-xs bg-portfolio-background/50 px-2 py-0.5 rounded-full">
              +{project.technologies.length - 3} more
            </span>}
        </div>
      </div>
    </div>;
};
const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projects: Project[] = [{
    title: "Crime Rate Prediction",
    category: "Data Science/ML",
    description: "This project aims to analyze and forecast crime rates across various Indian states and union territories using historical crime data from 2020 to 2022. Leveraging the ARIMA (AutoRegressive Integrated Moving Average) model, it predicts future crime patterns, helping stakeholders make informed decisions.",
    image: "📊",
    technologies: ["Python", "Pandas", "Statsmodels", "Matplotlib", "Streamlit", "ARIMA"],
    liveDemo: "https://crime-rate-prediction-rjvoqo4anvzwg8m9g589vw.streamlit.app/",
    sourceCode: "https://github.com/PurnimaKishore08/crime-rate-prediction"
  }, {
    title: "Tic-Tac-Toe Game",
    category: "Web Application",
    description: "A web-based version of the classic two-player Tic-Tac-Toe game with real-time win detection and responsive design.",
    image: "🎯",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://purnimakishore08.github.io/Tic-Tac-Toe/",
    sourceCode: "https://github.com/PurnimaKishore08/Tic-Tac-Toe"
  }, {
    title: "Student Performance Predictor",
    category: "AI/ML",
    description: "This project aims to assist educators in identifying students at risk of underperformance by analyzing various features such as study hours, parental education, and test scores.",
    image: "📚",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    sourceCode: "https://github.com/PurnimaKishore08/Student-Performance-Predictor"
  }, {
    title: "Traffic Sign Recognition",
    category: "AI/ML",
    description: "This project uses a Convolutional Neural Network (CNN) to classify images of German traffic signs with real-time prediction capabilities.",
    image: "🚦",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    sourceCode: "https://github.com/PurnimaKishore08/Traffic-Sign-Recognition"
  }, {
    title: "Obesity Risk Prediction",
    category: "AI/ML",
    description: "Developed an AI/ML model that analyzes lifestyle habits to predict obesity risk factors with 89% accuracy.",
    image: "🏋️",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    sourceCode: "https://github.com/PurnimaKishore08/-Data-Driven-Estimation-of-Obesity-Risk-from-Lifestyle-Habits"
  }, {
    title: "E-commerce Customer Segmentation",
    category: "Data Science",
    description: "Created a clustering-based marketing insights system to segment customers by behavior patterns.",
    image: "📊",
    technologies: ["Python", "K-Means", "Matplotlib", "SQL"]
  }, {
    title: "Fashion Sensei",
    category: "AI Application",
    description: "A virtual AI fashion assistant that provides style recommendations based on user preferences and trends.",
    image: "👗",
    technologies: ["Python", "Computer Vision", "React", "Flask"],
    sourceCode: "https://github.com/PurnimaKishore08/Fashion-Sensei-Virtual-Fashion-Mentor"
  }, {
    title: "Jarvis Voice Assistant",
    category: "Speech AI",
    description: "Voice-controlled task executor system that responds to natural language commands for everyday tasks.",
    image: "🎤",
    technologies: ["Python", "NLP", "Speech Recognition"],
    sourceCode: "https://github.com/PurnimaKishore08/JARVIS--Voice-Assistant"
  }, {
    title: "Sentiment Analysis",
    category: "NLP/AI",
    description: "This project focuses on understanding the emotional tone behind text inputs such as reviews, comments, or feedback using NLP techniques.",
    image: "💭",
    technologies: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Streamlit"],
    sourceCode: "https://github.com/PurnimaKishore08/CANTILEVER/blob/main/sentiment_analysis_project.zip"
  }, {
    title: "Multi-Functional Car",
    category: "Embedded Systems",
    description: "Sensor-based robotic car with obstacle avoidance and autonomous navigation capabilities.",
    image: "🚗",
    technologies: ["Arduino", "C++", "Sensors", "Motors"]
  }, {
    title: "Delay Circuit & RPS",
    category: "Electronics",
    description: "Foundational electronics systems showcasing core concepts in circuit design and implementation.",
    image: "⚡",
    technologies: ["Circuit Design", "Electronics"]
  }];
  
  return <section id="projects" className="section bg-gradient-portfolio">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg mb-8 max-w-3xl">
          Explore some of my recent projects that demonstrate my technical skills and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => <div key={index} className="opacity-0 animate-fade-in" style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'forwards'
        }}>
              <ProjectCard project={project} onClick={() => setActiveProject(project)} />
            </div>)}
        </div>
        
        {/* Project Modal */}
        {activeProject && <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-portfolio-container rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-portfolio-accent">{activeProject.title}</h3>
                  <button className="text-portfolio-text-muted hover:text-portfolio-text transition-colors" onClick={() => setActiveProject(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="h-64 mb-6 overflow-hidden rounded-lg bg-portfolio-background flex items-center justify-center">
                  <div className="text-8xl">{activeProject.image}</div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm bg-portfolio-accent text-portfolio-background px-3 py-1 rounded-full">
                    {activeProject.category}
                  </span>
                </div>
                
                <p className="text-lg mb-6">
                  {activeProject.title === "Crime Rate Prediction" ? 
                    "This project aims to analyze and forecast crime rates across various Indian states and union territories using historical crime data from 2020 to 2022. Leveraging the ARIMA (AutoRegressive Integrated Moving Average) model, it predicts future crime patterns, helping stakeholders make informed decisions. The dashboard is built using Streamlit, providing users with an intuitive interface to upload custom CSV files, filter data by year or state, and visualize trends through interactive bar and pie charts. This tool is particularly useful for researchers, law enforcement agencies, and policy analysts. The entire solution is coded in Python and integrates key libraries like Pandas, Statsmodels, and Matplotlib. It's a great demonstration of skills in data analysis, machine learning, and frontend deployment."
                    : activeProject.title === "Tic-Tac-Toe Game" ? 
                    "Developed a web-based version of the classic two-player Tic-Tac-Toe game using core front-end technologies. The application allows two players to take turns placing their symbols (X or O) on a 3x3 grid. The game detects a win or draw condition in real-time and provides an option to restart the game. This project emphasizes clean UI, logical game flow, and JavaScript event handling. Key features include a fully interactive 3×3 game board, two-player functionality, real-time win and draw detection, game status updates and alerts, restart functionality, and responsive design for different screen sizes. The project demonstrates front-end web development skills, event handling, game state management, and building lightweight applications without frameworks - just pure HTML, CSS, and JavaScript."
                    : activeProject.title === "Student Performance Predictor" ? 
                    "This project aims to assist educators in identifying students at risk of underperformance by analyzing various features such as study hours, parental education, and test scores. Using Python's scikit-learn library, I trained multiple ML models (Random Forest, SVM) and selected the best-performing one based on accuracy and F1 score. The final model was integrated into a user-friendly interface using Streamlit. Key highlights include achieving over 90% prediction accuracy, interactive web app with data visualization, and clean preprocessing with handling of missing values. The tech stack includes Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, and Streamlit for frontend development."
                    : activeProject.title === "Traffic Sign Recognition" ? 
                    "This project uses a Convolutional Neural Network (CNN) to classify images of German traffic signs. I trained the model on the GTSRB dataset using TensorFlow/Keras. The model achieved high accuracy on the test set, and I deployed it using Streamlit so users can upload an image of a sign and get a real-time prediction. Key highlights include training CNN with 95%+ accuracy and real-time sign recognition with image upload functionality. The tech stack includes Python, TensorFlow/Keras, OpenCV for image processing, GTSRB Dataset, and Streamlit for deployment."
                    : activeProject.title === "Obesity Risk Prediction" ? 
                    "The obesity prediction project focuses on utilizing machine learning techniques to classify and predict obesity levels based on individual lifestyle data. The dataset includes 17 features such as age, gender, dietary habits, physical activity, smoking, alcohol consumption, and body measurements. Data preprocessing involved label encoding, BMI calculation, and standardization. Among various models, the Random Forest classifier achieved the highest accuracy of 91%, effectively handling complex, non-linear relationships. In regression analysis, Random Forest again outperformed with a low RMSE of 7.18 and high R² score of 0.93. K-Means clustering revealed five distinct lifestyle patterns. The results demonstrate the effectiveness of ensemble methods in accurately estimating obesity levels from behavioral and physiological indicators, with potential applications in health risk assessment and personalized recommendations." 
                    : activeProject.title === "E-commerce Customer Segmentation" ?
                    "During my summer training at Kurious Learning Labs Pvt Ltd, I worked on this e-commerce customer segmentation project using machine learning techniques. The objective was to segment customers into distinct groups based on their purchasing behavior and engagement patterns to support personalized marketing and customer retention strategies. I used Python and libraries like Pandas, Scikit-learn, and Seaborn to perform data preprocessing, exploratory data analysis, and implemented the KMeans clustering algorithm. Dimensionality reduction techniques such as PCA and t-SNE were applied for better visualization of clusters. The project enabled actionable insights for targeted campaigns, focusing on high-value customers and improving business decision-making. This hands-on experience deepened my skills in data analysis, model building, and visualization, while reinforcing the importance of data-driven strategies in real-world applications."
                    : activeProject.title === "Fashion Sensei" ?
                    "Fashion Sensei is an AI-powered virtual fashion mentor designed to provide personalized outfit recommendations based on individual style preferences and body measurements. Using advanced machine learning techniques, particularly K-means clustering and deep learning models like CNNs, the system analyzes user inputs—such as color, pattern, and clothing type preferences—to generate tailored fashion suggestions. A user-friendly interface collects these preferences and feeds them into the model, which is trained on diverse fashion datasets for both men's and women's clothing. The project achieves an accuracy of 82.5% in delivering relevant outfit suggestions, helping users confidently express their style while promoting inclusivity and sustainability in fashion. Fashion Sensei showcases the potential of combining AI with personal styling to revolutionize the online fashion experience."
                    : activeProject.title === "Sentiment Analysis" ?
                    "This project focuses on understanding the emotional tone behind text inputs such as reviews, comments, or feedback. I performed text preprocessing using NLP techniques like tokenization, stopword removal, and lemmatization. I then vectorized the clean text using TF-IDF and trained classifiers like Logistic Regression and SVM to detect sentiments. I chose the best model based on accuracy and F1 score and deployed it using Streamlit for real-time sentiment prediction with an interactive interface. The app also includes visual components like word clouds and a confusion matrix to explain the results. Key highlights include achieving over 90% model accuracy on test data, deploying a real-time web app for live sentiment prediction, visualizing positive/negative word clouds and model performance metrics, and cleaning and processing text using a full NLP pipeline. The tech stack includes Python, Pandas, NumPy, NLTK, scikit-learn, TF-IDF Vectorizer, Matplotlib, WordCloud, and Seaborn."
                    : activeProject.title === "Jarvis Voice Assistant" ?
                    "The Jarvis Speech Recognition System is a voice-activated personal assistant inspired by the fictional AI from Iron Woman. It is designed to interact with users through spoken commands and perform a variety of tasks such as opening applications, searching the web, answering questions, and providing real-time information like weather, time, and news updates. The system is developed using Python and integrates several key technologies including speech recognition for converting spoken words into text, natural language processing (NLP) to understand and interpret user commands, and text-to-speech (TTS) for generating vocal responses. Libraries such as SpeechRecognition, Pyttsx3, and Pyaudio are used to enable these functionalities. Additionally, APIs like OpenAI, WolframAlpha, or Wikipedia enhance the assistant's knowledge and response capabilities. The architecture involves capturing audio input, processing it to extract intent, executing the appropriate action, and delivering a voice-based output. This system finds applications in hands-free desktop operations, smart home automation, and accessibility tools, and serves as a practical introduction to AI-powered voice assistant development."
                    : activeProject.title === "Multi-Functional Car" ?
                    "The Multi-Functional Car project is an Arduino-based robotic vehicle designed to perform multiple automated tasks, including fire detection and extinguishing, wireless video surveillance, and Bluetooth-controlled navigation. Equipped with components such as the LM35 temperature sensor, HC-05 Bluetooth module, L298N motor driver, and a wireless camera, the car is capable of detecting elevated temperatures and responding by activating a fan to suppress potential fires. It also provides real-time video feedback, allowing remote monitoring through a mobile device. The car's movements are controlled via a smartphone using Bluetooth, making it an effective tool for surveillance and safety in environments that may be hazardous or difficult to access. The project demonstrates an integration of hardware and software systems to achieve functionality, mobility, and automation, showcasing the application of embedded systems and IoT in practical, safety-focused solutions."
                    : activeProject.title === "Delay Circuit & RPS" ?
                    "This project consists of two foundational electronic systems. The Delay Circuit is designed to control timing in electronic applications by delaying signal activation for specific periods. Built using resistors, capacitors, and 555 timers, it enables precise timing control for automation systems and sequenced operations. The Regulated Power Supply (RPS) provides stable, consistent output voltage regardless of input fluctuations or load conditions. Comprising a transformer, rectifier, filter, and voltage regulator, the RPS ensures sensitive components receive safe, appropriate voltage levels. Together, these systems demonstrate core electronic design principles and provide essential functionality for more complex electronic projects, showcasing the practical application of circuit theory in creating reliable power management and timing solutions."
                    : activeProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, i) => <span key={i} className="text-sm bg-portfolio-background px-3 py-1 rounded-full">
                        {tech}
                      </span>)}
                  </div>
                </div>
                
                {(activeProject.liveDemo || activeProject.sourceCode) && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.liveDemo && (
                        <a 
                          href={activeProject.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="button-primary flex items-center justify-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {activeProject.sourceCode && (
                        <a 
                          href={activeProject.sourceCode} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="button-outline flex items-center justify-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <button className="button-outline" onClick={() => setActiveProject(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
};
export default ProjectsSection;
