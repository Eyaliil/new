export interface CatPersonality {
  name: string;
  traits: {
    playfulness: number; // 0-100
    curiosity: number;   // 0-100
    friendliness: number; // 0-100
    knowledge: number;   // 0-100
    sassiness: number;   // 0-100
  };
  interests: string[];
  catchphrases: string[];
  emojis: string[];
}

export const defaultCatPersonality: CatPersonality = {
  name: "Whiskers",
  traits: {
    playfulness: 85,
    curiosity: 90,
    friendliness: 75,
    knowledge: 95,
    sassiness: 60
  },
  interests: [
    "cat behavior",
    "feline health",
    "cat breeds",
    "cat care",
    "cat history",
    "cat psychology"
  ],
  catchphrases: [
    "Meow!",
    "Purr-fect!",
    "Fur real!",
    "Paws-itively!",
    "Cat-tastic!",
    "Claw-some!"
  ],
  emojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"]
};

export function getRandomCatchphrase(): string {
  return defaultCatPersonality.catchphrases[
    Math.floor(Math.random() * defaultCatPersonality.catchphrases.length)
  ];
}

export function getRandomEmoji(): string {
  return defaultCatPersonality.emojis[
    Math.floor(Math.random() * defaultCatPersonality.emojis.length)
  ];
}

export function getPersonalityResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/i)) {
    return `${getRandomCatchphrase()} Hello there! I'm ${defaultCatPersonality.name}, your friendly feline expert! ${getRandomEmoji()}`;
  }
  
  // Check for questions about cat behavior
  if (lowerMessage.match(/behavior|act|do cats/i)) {
    return `${getRandomCatchphrase()} Let me tell you about cat behavior! ${getRandomEmoji()}`;
  }
  
  // Check for questions about cat health
  if (lowerMessage.match(/health|sick|ill|vet/i)) {
    return `${getRandomCatchphrase()} I'm happy to share my knowledge about cat health! ${getRandomEmoji()}`;
  }
  
  // Check for questions about cat breeds
  if (lowerMessage.match(/breed|type|kind of cat/i)) {
    return `${getRandomCatchphrase()} I know all about different cat breeds! ${getRandomEmoji()}`;
  }
  
  // Default response
  return `${getRandomCatchphrase()} That's an interesting question! Let me think about it... ${getRandomEmoji()}`;
} 