// Step 1: Questions
export const questions = [
    {
        question: "What is type narrowing in TypeScript used for?",
        options: [
            "To reduce the number of possible types",
            "To increase the number of possible types",
            "To convert types",
            "To remove types"
        ],
        correctAnswer: 0
    },
    {
        question: "What are nested objects in TypeScript?",
        options: [
            "Objects that are deeply nested in other objects",
            "Objects that have circular references",
            "Objects that are declared inside functions",
            "Objects that are declared inside other objects"
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following demonstrates a nested object in TypeScript?",
        options: [
            "let person: { name: string, address: { city: string, zip: number } } = { name: 'John', address: { city: 'New York', zip: 10001 } };",
            "let person = { name: 'John', address: { city: 'New York', zip: 10001 } };",
            "let person: { name: string, address: { city: string, zip: number } };",
            "let person = { name: 'John', address: { city: 'New York', zip: '10001' } };"
        ],
        correctAnswer: 0
    },

    // Interfaces
    {
        question: "What is an interface in TypeScript?",
        options: [
            "A syntactical contract that defines the data structure of an object",
            "A built-in data type",
            "A way to cast types",
            "A type assertion in TypeScript"
        ],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define an interface in TypeScript?",
        options: [
            "type",
            "interface",
            "implements",
            "class"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following correctly defines an interface in TypeScript?",
        options: [
            "interface Car { make: string; model: string; year: number; }",
            "type Car = { make: string; model: string; year: number; }",
            "let Car = { make: string; model: string; year: number; }",
            "class Car { make: string; model: string; year: number; }"
        ],
        correctAnswer: 0
    },

    // Type vs Interface
    {
        question: "What is the difference between a type and an interface in TypeScript?",
        options: [
            "Types can be used with primitive and complex types, while interfaces are limited to object types",
            "Interfaces can be used with primitive and complex types, while types are limited to object types",
            "There is no difference; they are interchangeable",
            "Interfaces provide stronger type checking than types"
        ],
        correctAnswer: 0
    },
    {
        question: "Which statement is true regarding extending functionality in TypeScript?",
        options: [
            "Types can extend interfaces, but interfaces cannot extend types",
            "Interfaces can extend types, but types cannot extend interfaces",
            "Both types and interfaces can extend each other",
            "Extending functionality is not supported in TypeScript"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following scenarios favors using an interface over a type?",
        options: [
            "When you need to use union types or intersection types",
            "When you need to define complex object structures",
            "When you need to enforce strict type constraints",
            "When you need to define aliases for primitive types"
        ],
        correctAnswer: 1
    },

    // Additional Object Types
    {
        question: "What is an object type declaration used for in TypeScript?",
        options: [
            "To define the structure of an object",
            "To define the structure of an array",
            "To define the structure of a function",
            "To define the structure of a class"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you define a complex object type in TypeScript?",
        options: [
            "interface User { name: string; age: number; address: { city: string; postalCode: string; }; }",
            "type User = { name: string; age: number; address: { city: string; postalCode: string; }; }",
            "let User = { name: string; age: number; address: { city: string; postalCode: string; }; }",
            "class User { name: string; age: number; address: { city: string; postalCode: string; }; }"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following TypeScript features is primarily used to define object types?",
        options: [
            "Interfaces",
            "Classes",
            "Types",
            "Functions"
        ],
        correctAnswer: 0
    },
      // Type Compatibility
      {
        question: "What is type compatibility in TypeScript?",
        options: [
            "It refers to the ability of TypeScript to assign types that have identical structure but were defined separately",
            "It refers to strict checking of types based on their explicit declarations",
            "It refers to compatibility between primitive types only",
            "It refers to compatibility between classes and interfaces"
        ],
        correctAnswer: 0
    },
    {
        question: "When are two types considered compatible in TypeScript?",
        options: [
            "When they have identical names",
            "When they have identical structures",
            "When they are declared using the same keyword",
            "When they are declared in the same file"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following demonstrates type compatibility?
        code: interface Car {
                make: string;
                model: string;
            }

            let car: Car = { make: 'Toyota', model: 'Camry' };
            let vehicle = car;`,
        options: [
            "Both car and vehicle are considered compatible because they have the same structure",
            "vehicle cannot be assigned from car due to different names",
            "vehicle is assigned from car because they have different structures",
            "car cannot be assigned to vehicle due to different structures"
        ],
        correctAnswer: 0
    },

    // Stale Object vs Fresh Object
    {
        question: "What is a 'stale object' in TypeScript?",
        options: [
            "An object that has been declared but not initialized",
            "An object that is outdated or no longer in use",
            "An object that does not conform to the specified type",
            "An object that is globally accessible"
        ],
        correctAnswer: 1
    },
    {
        question: "Which statement best describes a 'fresh object' in TypeScript?",
        options: [
            "An object that has been recently created",
            "An object that is up-to-date with the latest TypeScript features",
            "An object that has undergone type checking",
            "An object that is globally accessible"
        ],
        correctAnswer: 0
    },

    // Duck Typing
    {
        question: "What is duck typing in TypeScript?",
        options: [
            "It is a form of structural typing that determines type compatibility based on the presence of certain properties",
            "It is a form of nominal typing that assigns types based on their explicit declarations",
            "It is a form of loose typing that allows for dynamic type changes",
            "It is a form of static typing that enforces strict type checking"
        ],
        correctAnswer: 0
    },
    {
        question: "Which principle is associated with duck typing?",
        options: [
            "If it looks like a duck and quacks like a duck, then it must be a duck",
            "Types must be explicitly declared to ensure type safety",
            "Types must be statically checked to prevent runtime errors",
            "Types must be strictly nominal to ensure type compatibility"
        ],
        correctAnswer: 0
    },

    // Future TypeScript Features
    {
        question: "Which of the following type systems might TypeScript support in future versions?",
        options: [
            "Nominal typing",
            "Structural typing",
            "Dynamic typing",
            "Loose typing"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary motivation behind potential support for nominal typing in TypeScript?",
        options: [
            "To enforce strict type checking based on the explicit names of types",
            "To allow for loose typing based on inferred types",
            "To enhance dynamic type changes",
            "To support type casting operations"
        ],
        correctAnswer: 0
    },
    {
        question: "Which TypeScript feature is likely to evolve in future versions to support more strict type checking?",
        options: [
            "Interfaces",
            "Type aliases",
            "Classes",
            "Nominal types"
        ],
        correctAnswer: 3
    },

    // Origins of TypeScript
    {
        question: "Who developed TypeScript?",
        options: [
            "Microsoft",
            "Google",
            "Apple",
            "Facebook"
        ],
        correctAnswer: 0
    },
    {
        question: "When was TypeScript first released?",
        options: [
            "2010",
            "2012",
            "2014",
            "2016"
        ],
        correctAnswer: 1
    },
    {
        question: "What was the primary goal behind the development of TypeScript?",
        options: [
            "To enhance JavaScript performance",
            "To introduce new syntax features",
            "To provide optional static typing for JavaScript",
            "To replace JavaScript in web development"
        ],
        correctAnswer: 2
    },
     // Nested Objects
     {
        question: "What is a nested object in TypeScript?",
        options: [
            "An object that is deeply nested within another object",
            "An object that has multiple properties",
            "An object that is declared using the nested keyword",
            "An object that is globally accessible"
        ],
        correctAnswer: 0
    },
    {
        question: `Which statement best describes accessing a deeply nested property in TypeScript?
        code: let data = {
                user: {
                    profile: {
                        name: 'Alice',
                        age: 30
                    }
                }
            };`,
        options: [
            "data.user.profile.name",
            "data.user.profile['name']",
            "data['user']['profile']['name']",
            "All of the above"
        ],
        correctAnswer: 3
    },

    // Type and Interface Intersection Types
    {
        question: "What does an intersection type represent in TypeScript?",
        options: [
            "It represents a type that combines all properties of multiple types",
            "It represents a type that excludes properties of multiple types",
            "It represents a type that checks for the presence of certain properties",
            "It represents a type that accepts any value"
        ],
        correctAnswer: 0
    },
    {
        question: `Which of the following demonstrates an intersection type in TypeScript?
        code: interface Printable {
                print: () => void;
            }

            interface Loggable {
                log: () => void;
            }

            type LoggableAndPrintable = ?`,
        options: [
            "Printable & Loggable;",
            "Printable | Loggable;",
            "Printable &| Loggable;",
            "Printable |& Loggable;"
        ],
        correctAnswer: 0
    },

    // any, unknown, and never Types
    {
        question: "What is the any type in TypeScript used for?",
        options: [
            "It represents a value that can be of any type",
            "It represents a value that cannot have any type",
            "It represents a value that is of a specific type",
            "It represents a value that must be explicitly typed"
        ],
        correctAnswer: 0
    },
    {
        question: "When should you use the unknown type in TypeScript?",
        options: [
            "When you are unsure about the type of a value",
            "When you want to restrict the type of a value to a specific type",
            "When you want to explicitly specify the type of a value",
            "When you want to prevent any type from being assigned to a value"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the never type represent in TypeScript?",
        options: [
            "It represents a value that is never used",
            "It represents a value that cannot be assigned any type",
            "It represents a value that does not exist",
            "It represents a value that is of a specific type"
        ],
        correctAnswer: 2
    },

    // Combination Questions
    {
        question: "Which TypeScript type is used to declare an object with optional properties?",
        options: [
            "Partial<Type>",
            "Required<Type>",
            "Readonly<Type>",
            "Pick<Type, Keys>"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you define an object in TypeScript that may have either a name property of type string or a age property of type number?",
        options: [
            "{ name: string; age?: number; }",
            "{ name: string | number; age: number | string; }",
            "{ name?: string; age?: number; }",
            "{ name: string & number; age: number & string; }"
        ],
        correctAnswer: 0
    },
    {
        question: "Which TypeScript feature allows you to create a new type from existing ones by picking properties?",
        options: [
            "keyof",
            "extends",
            "Pick<Type, Keys>",
            "Omit<Type, Keys>"
        ],
        correctAnswer: 2
    },

    // Structural Typing vs Nominal Typing
    {
        question: "In TypeScript, which typing system is primarily used?",
        options: [
            "Structural typing",
            "Nominal typing",
            "Both are equally used",
            "Neither is used in TypeScript"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following TypeScript features relates to structural typing?",
        options: [
            "Interfaces",
            "Classes",
            "Type aliases",
            "Function typings"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary motivation behind potential support for nominal typing in TypeScript?",
        options: [
            "To enforce strict type checking based on the explicit names of types",
            "To allow for loose typing based on inferred types",
            "To enhance dynamic type changes",
            "To support type casting operations"
        ],
        correctAnswer: 0
    },
    {
        question: "Which TypeScript feature is likely to evolve in future versions to support more strict type checking?",
        options: [
            "Interfaces",
            "Type aliases",
            "Classes",
            "Nominal types"
        ],
        correctAnswer: 3
    },
    {
        question: "What is an example of structural typing in TypeScript?",
        options: [
            "Interfaces",
            "Classes",
            "Type aliases",
            "Function typings"
        ],
        correctAnswer: 0
    }
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");
const viewAnswersBtn = document.querySelector("#view-answers");

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

// Step 3: Load Quiz function
const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    userAnswers.push(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on completing the quiz!</p>
        <p>Don't lose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()">Restart</button>
        <button id="view-answers-btn">View Answers</button>
        </div>`;
        document.querySelector("#view-answers-btn").addEventListener("click", () => {
            displayAnswers();
        });
    }
});

const displayAnswers = () => {
    let answerHTML = `<div class="result view-answers"><h2>Correct Answers</h2>`;
    questions.forEach((question, index) => {
        answerHTML += `<p>Q${index + 1}: ${question.question}</p>`;
        answerHTML += `<p>Your answer: ${question.options[userAnswers[index]]}</p>`;
        answerHTML += `<p>Correct answer: ${question.options[question.correctAnswer]}</p><hr>`;
    });
    answerHTML += `<button class="reload-button" onclick="window.location.reload()">Restart</button></div>`;
    quiz.innerHTML = answerHTML;
};