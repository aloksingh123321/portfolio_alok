import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, Linkedin, Github, Globe, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
            {/* Navigation/Actions - Hidden in Print */}
            <div className="container mx-auto px-4 mb-8 flex justify-between items-center print:hidden max-w-[210mm]">
                <Button variant="outline" asChild>
                    <Link to="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                </Button>
                <Button onClick={handlePrint}>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                </Button>
            </div>

            {/* Resume Paper */}
            <div className="bg-white shadow-xl mx-auto max-w-[210mm] min-h-[297mm] p-[15mm] print:shadow-none print:p-0 print:max-w-none">
                {/* Header */}
                <header className="text-center border-b-2 border-gray-800 pb-4 mb-4">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">Alok Kumar Singh</h1>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                        INDIAN | DOB: 06-JUN-2006 | Lucknow, UP | +91 9555707521
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <a href="mailto:aloksingh123c@gmail.com" className="flex items-center hover:text-blue-600">
                            <Mail className="w-3 h-3 mr-1" /> aloksingh123c@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/alok-singh-76ab99381" className="flex items-center hover:text-blue-600">
                            <Linkedin className="w-3 h-3 mr-1" /> LinkedIn
                        </a>
                        <a href="https://github.com/aloksingh123321" className="flex items-center hover:text-blue-600">
                            <Github className="w-3 h-3 mr-1" /> GitHub
                        </a>
                        <a href="/" className="flex items-center hover:text-blue-600">
                            <Globe className="w-3 h-3 mr-1" /> Portfolio
                        </a>
                    </div>
                </header>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Education</h2>
                    <div className="flex justify-between items-start mb-1">
                        <div className="font-bold">Shri Ramswaroop Memorial University</div>
                        <div className="text-right font-medium">Barabanki, Uttar Pradesh</div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <div className="italic">Bachelor of Technology in Computer Science & Engineering</div>
                        <div className="italic">Expected Graduation: 2027</div>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                        <li><span className="font-semibold">Current CGPA:</span> 7.56/10.0</li>
                        <li>
                            <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Discrete Mathematics.
                        </li>
                    </ul>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Experience</h2>

                    {/* SIH */}
                    <div className="mb-4">
                        <div className="flex justify-between items-start font-bold">
                            <div>Smart India Hackathon - 2025 (SIH'25) FINALIST</div>
                            <div>SRMU Chapter</div>
                        </div>
                        <div className="flex justify-between items-start text-sm mb-1">
                            <div className="italic">Team Lead | Backend & System Architecture</div>
                            <div className="italic">December 2025</div>
                        </div>
                        <div className="text-sm font-medium mb-1">Ministry of Home Affairs (MHA) • I4C</div>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                            <li>Led a 6-member team (Skills@404) to the Smart India Hackathon 2025 Grand Finale, shortlisted at the national level.</li>
                            <li>Designed and built KAVACH, an AI-based predictive analytics system to forecast cybercrime cash withdrawal locations with 93%+ accuracy.</li>
                            <li>Architected a scalable real-time backend using FastAPI, processing 60,000+ transactions at ~200ms latency, and defended the system before I4C experts and industry leaders.</li>
                        </ul>
                    </div>

                    {/* Internshala */}
                    <div>
                        <div className="flex justify-between items-start font-bold">
                            <div>Internshala</div>
                            <div>SRMU Chapter</div>
                        </div>
                        <div className="flex justify-between items-start text-sm mb-1">
                            <div className="italic">Internshala Student Partner</div>
                            <div className="italic">April 2025</div>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                            <li>Spearheaded 3+ on-campus workshops for 100+ students on resume building, equipping attendees with strategies to improve internship application success rates.</li>
                            <li>Drove a 20% increase in university platform sign-ups by executing targeted marketing campaigns and establishing a peer-to-peer mentoring system.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Projects</h2>

                    {/* KAVACH */}
                    <div className="mb-4">
                        <div className="flex justify-between items-start font-bold">
                            <div>KAVACH — Predictive Analytics Framework for Cybercrime Intervention</div>
                            <div>Indore, M.P.</div>
                        </div>
                        <div className="flex justify-between items-start text-sm mb-1">
                            <div className="italic">Smart India Hackathon 2025</div>
                            <div className="italic">Aug 2025 – Dec 2025</div>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                            <li>Developed an AI/ML-driven predictive system to forecast high-risk ATM withdrawal locations from cybercrime complaints using pattern detection and geospatial analysis.</li>
                            <li>Built a real-time risk heatmap dashboard and alerting framework to deliver actionable intelligence to law enforcement agencies, banks, and I4C.</li>
                        </ul>
                    </div>

                    {/* AAHARITHM */}
                    <div>
                        <div className="flex justify-between items-start font-bold">
                            <div>AAHARITHM - AI-Powered Ayurvedic Wellness Recommender</div>
                            <div>Team Lead</div>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2 mt-1">
                            <li>Architected a Python/Flask backend and a rule-based AI engine that processes user health data to create personalized wellness plans with 95% recommendation accuracy using Ayurvedic principles.</li>
                        </ul>
                    </div>
                </section>

                {/* Achievements */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Achievements & Certifications</h2>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                        <li>Smart India Hackathon 2025 Finalist, representing SRMU under Ministry of Home Affairs (I4C).</li>
                        <li>AI For All (Govt. of India & Intel): Certified in AI fundamentals and real-world applications.</li>
                        <li>AWSome Day Online Conference: Certified in core AWS services and cloud architecture fundamentals.</li>
                    </ul>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Skills</h2>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                        <li><span className="font-semibold">Programming:</span> Python, C, Java, JavaScript, SQL</li>
                        <li><span className="font-semibold">Web Dev:</span> Flask, React, HTML5, CSS3, Tailwind CSS</li>
                        <li><span className="font-semibold">AI/ML:</span> Python (High Proficiency), Predictive Analytics</li>
                        <li><span className="font-semibold">Tools & Platforms:</span> Git, GitHub, VS Code, Postman, Linux</li>
                        <li><span className="font-semibold">Soft Skills:</span> Team Leadership, Problem Solving, Adaptability, Communication</li>
                    </ul>
                </section>

                {/* Interests */}
                <section>
                    <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-3">Interests & Hobbies</h2>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-2">
                        <li><span className="font-semibold">Hobbies:</span> Exploring new technologies and frameworks, coding mini projects, listening to music.</li>
                        <li><span className="font-semibold">Interests:</span> Artificial Intelligence, Web Development, Startups, Futuristic Innovations, and Team Leadership.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;
