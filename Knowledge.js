// Puris AI Knowledge Base
// This file contains all the knowledge and responses for the AI chatbot

const PurisKnowledge = {
    // Greeting patterns
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings'],
        responses: [
            "Hello! I'm Puris, your AI assistant. How can I help you today?",
            "Hi there! Great to see you. What can I do for you?",
            "Hey! I'm here and ready to help. What's on your mind?",
            "Greetings! I'm Puris. Feel free to ask me anything!"
        ]
    },

    // Farewell patterns
    farewells: {
        patterns: ['bye', 'goodbye', 'see you', 'take care', 'later', 'farewell'],
        responses: [
            "Goodbye! It was great chatting with you. Come back anytime!",
            "See you later! Don't hesitate to return if you need help.",
            "Take care! I'll be here whenever you need me.",
            "Farewell! Have a wonderful day ahead!"
        ]
    },

    // About Puris
    about: {
        patterns: ['who are you', 'what are you', 'your name', 'about you', 'introduce yourself', 'what is puris'],
        responses: [
            "I'm Puris, an AI assistant designed to help you with information and conversations. I'm built with a focus on clarity and helpfulness!",
            "I'm Puris! Think of me as your digital companion ready to answer questions, provide information, and have meaningful conversations.",
            "My name is Puris. I'm an AI chatbot created to assist you with various topics and provide helpful responses."
        ]
    },

    // Technology topics
    technology: {
        patterns: ['technology', 'tech', 'programming', 'coding', 'software', 'computer', 'ai', 'artificial intelligence', 'machine learning'],
        responses: [
            "Technology is fascinating! From AI and machine learning to web development and cloud computing, there's always something new to explore. What specific area interests you?",
            "The tech world is evolving rapidly. AI, blockchain, quantum computing, and IoT are reshaping our future. Would you like to know more about any of these?",
            "Programming and software development are powerful skills. Whether it's Python, JavaScript, or other languages, coding opens up endless possibilities. What would you like to learn about?"
        ]
    },

    // Health topics
    health: {
        patterns: ['health', 'fitness', 'exercise', 'diet', 'nutrition', 'wellness', 'mental health', 'sleep'],
        responses: [
            "Health is wealth! Regular exercise, balanced nutrition, adequate sleep, and mental wellness are the pillars of a healthy lifestyle. What aspect would you like to discuss?",
            "Taking care of your health involves both physical and mental well-being. Exercise regularly, eat nutritious foods, stay hydrated, and don't forget to rest. How can I help you with your health goals?",
            "Wellness is a holistic approach to health. It includes physical fitness, mental clarity, emotional balance, and social connections. What area interests you most?"
        ]
    },

    // Science topics
    science: {
        patterns: ['science', 'physics', 'chemistry', 'biology', 'astronomy', 'space', 'universe', 'nature'],
        responses: [
            "Science helps us understand the universe! From the tiniest atoms to vast galaxies, there's so much to discover. What scientific topic catches your interest?",
            "The natural world is full of wonders. Biology explores life, chemistry studies matter, physics explains forces, and astronomy reveals the cosmos. What would you like to explore?",
            "Science is the pursuit of knowledge through observation and experimentation. It has given us incredible technologies and insights. What area of science fascinates you?"
        ]
    },

    // Education topics
    education: {
        patterns: ['education', 'learning', 'study', 'school', 'university', 'college', 'course', 'knowledge'],
        responses: [
            "Education is the foundation of growth! Whether formal or self-directed, learning opens doors to new opportunities. What would you like to learn about?",
            "Continuous learning is key to personal and professional development. There are so many resources available today - online courses, books, tutorials. How can I help with your learning journey?",
            "Knowledge empowers us to make better decisions and understand the world. What subject or skill are you interested in developing?"
        ]
    },

    // Weather topics
    weather: {
        patterns: ['weather', 'climate', 'rain', 'sunny', 'temperature', 'forecast'],
        responses: [
            "Weather affects our daily lives significantly! While I can't provide real-time forecasts, I can discuss climate patterns, weather phenomena, or how weather impacts various activities. What would you like to know?",
            "Climate and weather are fascinating topics. From tropical storms to arctic cold fronts, atmospheric science helps us understand and predict conditions. What aspect interests you?",
            "Weather patterns are influenced by many factors including geography, ocean currents, and atmospheric conditions. Would you like to learn more about meteorology?"
        ]
    },

    // Entertainment topics
    entertainment: {
        patterns: ['movie', 'music', 'game', 'book', 'entertainment', 'fun', 'hobby', 'sport', 'art'],
        responses: [
            "Entertainment enriches our lives! Whether it's movies, music, games, sports, or art, there's something for everyone. What type of entertainment do you enjoy?",
            "Having hobbies and enjoying entertainment is important for balance and happiness. From reading to gaming, from sports to crafts - what are your interests?",
            "Art and entertainment express human creativity in wonderful ways. Music moves us, films tell stories, games challenge us, and sports unite us. What would you like to discuss?"
        ]
    },

    // Work and productivity
    productivity: {
        patterns: ['work', 'productivity', 'job', 'career', 'business', 'office', 'meeting', 'project', 'task'],
        responses: [
            "Productivity is about working smarter, not harder. Time management, goal setting, and maintaining focus are key elements. What productivity challenge can I help you with?",
            "Career growth requires continuous improvement and adaptation. Whether it's skills development, networking, or work-life balance, I'm here to help. What's on your mind?",
            "Effective work habits make a big difference. Breaking tasks into smaller steps, avoiding multitasking, and taking regular breaks can boost productivity. Would you like some tips?"
        ]
    },

    // Help and capabilities
    help: {
        patterns: ['help', 'what can you do', 'capabilities', 'features', 'assist', 'support'],
        responses: [
            "I can help you with various topics including technology, health, science, education, entertainment, productivity, and more! Just ask me anything and I'll do my best to assist.",
            "I'm here to answer questions, provide information, and have conversations on many subjects. Feel free to ask about tech, health, science, work, hobbies, or just chat!",
            "My capabilities include answering questions, explaining concepts, providing suggestions, and engaging in helpful conversations. What would you like to explore?"
        ]
    },

    // Thanks
    thanks: {
        patterns: ['thank', 'thanks', 'appreciate', 'grateful', 'helpful'],
        responses: [
            "You're welcome! I'm happy I could help. Is there anything else you'd like to know?",
            "My pleasure! Feel free to ask if you have more questions.",
            "Glad I could assist! Don't hesitate to reach out anytime.",
            "You're very welcome! I'm here whenever you need me."
        ]
    },

    // Feelings/Status
    feelings: {
        patterns: ['how are you', 'how do you feel', 'are you okay', 'you good', 'whats up'],
        responses: [
            "I'm doing great, thank you for asking! Ready and eager to help you with anything you need.",
            "I'm functioning perfectly! Every conversation makes me better at helping. How are you doing?",
            "All systems go! I'm here and happy to chat. What can I do for you today?",
            "I'm wonderful! Thanks for checking in. Now, how can I assist you?"
        ]
    },

    // Default fallback responses
    fallback: [
        "That's an interesting topic! While I may not have specific information on that, I'd love to learn more about what you're looking for.",
        "I appreciate your question! Could you provide a bit more context so I can give you a better response?",
        "Great question! Let me think about that... Feel free to ask me about technology, health, science, education, or other topics.",
        "I'm not entirely sure about that specific topic, but I'm always learning. Is there something related I might help you with?",
        "That's a thoughtful query! While I process that, feel free to ask me about other topics I'm knowledgeable in.",
        "Hmm, that's a unique question. I'd suggest exploring that topic further. Meanwhile, is there anything else I can help with?"
    ]
};

// Function to find the best matching response
function findResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check each knowledge category
    for (const category in PurisKnowledge) {
        if (category === 'fallback') continue;
        
        const data = PurisKnowledge[category];
        if (data.patterns && data.patterns.some(pattern => message.includes(pattern))) {
            const responses = data.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Return a fallback response if no match found
    const fallbacks = PurisKnowledge.fallback;
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PurisKnowledge, findResponse };
}
